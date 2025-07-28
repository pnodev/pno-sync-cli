import {Command, Flags} from '@oclif/core'
import axios, {isAxiosError} from 'axios'
import dotenv from 'dotenv'
import fs from 'node:fs'
import path from 'node:path'

export type JsonSchema =
  | {items: JsonSchema; required: boolean; type: 'array'}
  | {
      properties: Record<string, JsonSchema>
      required: boolean
      type: 'object'
    }
  | {required?: boolean; type: 'any' | 'boolean' | 'number' | 'string'}
export type PayloadSchema = Record<string, JsonSchema>

function jsonSchemaToType(s: JsonSchema, indent: string = '  '): string {
  switch (s.type) {
    case 'array': {
      return `Array<${jsonSchemaToType(s.items, indent)}>`
    }

    case 'boolean': {
      return 'boolean'
    }

    case 'number': {
      return 'number'
    }

    case 'object': {
      const props = Object.entries(s.properties)
      if (props.length === 0) return '{}'

      return `{\n${props
        .map(([key, value]) => {
          const optional = value.required === false ? '?' : ''
          return `${indent}${key}${optional}: ${jsonSchemaToType(value, indent + '  ')}`
        })
        .join(';\n')};\n${indent.slice(2)}}`
    }

    case 'string': {
      return 'string'
    }

    default: {
      return 'any'
    }
  }
}

export function payloadSchemaToType(schema: PayloadSchema, name: string = 'payload'): string {
  const props = Object.entries(schema)
    .map(([key, value]) => {
      const optional = value.required === false ? '?' : ''
      return `  ${key}${optional}: ${jsonSchemaToType(value, '    ')}`
    })
    .join(';\n')

  return `export type ${name} = {\n${props}\n};`
}

export default class GenerateTypes extends Command {
  static description = 'Send a payload to a topic channel'
  static flags = {
    appId: Flags.string({description: 'App ID', required: true}),
    exportName: Flags.string({
      default: 'payload',
      description: 'Name of the generated type',
      required: false,
    }),
    key: Flags.string({description: 'Public Key', required: true}),
    output: Flags.string({
      default: 'stdout',
      description: 'Output target: "stdout" (default) or filename (e.g. types.ts)',
      required: false,
    }),
  }

  public async run(): Promise<void> {
    dotenv.config()

    const {flags} = await this.parse(GenerateTypes)

    const url = `${process.env.PNO_SYNC_ENGINE_URL}/stream/${flags.appId}/schema?key=${flags.key}`

    try {
      const response = await axios.get(url)

      const data = response.data as PayloadSchema
      const generatedType = payloadSchemaToType(data, flags.exportName)

      if (flags.output === 'stdout') {
        this.log(generatedType)
      } else {
        const filePath = path.resolve(process.cwd(), flags.output)
        fs.writeFileSync(filePath, generatedType)
        this.log(`✅ Type file written to ${filePath}`)
      }

      this.log(`✅ Generate Types: ${response.status}`)
    } catch (error) {
      if (isAxiosError(error)) {
        this.error(`❌ Axios error: ${error.response?.status} ${error.response?.data}`)
      } else {
        this.error(`❌ Unknown error: ${error}`)
      }
    }
  }
}
