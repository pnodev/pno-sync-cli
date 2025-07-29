import {Command, Flags} from '@oclif/core'
import axios, {isAxiosError} from 'axios'

export default class Send extends Command {
  static description = 'Send a payload to a topic channel'
  static flags = {
    appId: Flags.string({description: 'App ID', required: true}),
    key: Flags.string({description: 'Public Key', required: true}),
    payload: Flags.string({description: 'JSON payload to send'}),
    topic: Flags.string({description: 'Topic-Name', required: true}),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(Send)

    const url = `https://connect.sync.pno.dev/stream/${flags.appId}?key=${flags.key}&topic=${flags.topic}`

    let parsedPayload = {message: 'Hello World!'}

    if (flags.payload) {
      try {
        console.log(flags.payload)
        parsedPayload = JSON.parse(flags.payload)
      } catch {
        this.error('❌ Invalid JSON payload. Please provide a valid JSON string.')
      }
    }

    try {
      const response = await axios.post(
        url,
        {payload: parsedPayload},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      this.log(`✅ Send: ${response.status}`)
      this.log(response.data)
    } catch (error) {
      if (isAxiosError(error)) {
        this.error(`❌ Axios error: ${error.response?.status} ${error.response?.data}`)
      } else {
        this.error(`❌ Unknown error: ${error}`)
      }
    }
  }
}
