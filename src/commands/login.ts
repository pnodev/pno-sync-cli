import {Command} from '@oclif/core'
import cors from 'cors'
import express from 'express'
import open from 'open'

import {saveAuth} from '../helpers/auth.js'

export default class Login extends Command {
  static override description = 'Cli Login for Sync'
  static override examples = ['<%= config.bin %> <%= command.id %>']

  public async run(): Promise<void> {
    const PORT = 4567
    const app = express()

    app.use(express.json(), cors({origin: 'http://localhost:3000'}))

    const server = app.listen(PORT, () => {
      this.log(`Listen on http://localhost:${PORT}`)
    })

    const callbackPromise = new Promise<{userId: string}>((resolve) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      app.post('/auth', (req: any, res: any) => {
        const {userId} = req.body
        if (userId) {
          res.send({success: true})
          resolve({userId})
        } else {
          res.status(400).send({success: false})
        }
      })
    })

    await open('http://localhost:3000/cli-callback')

    const {userId} = await callbackPromise

    saveAuth(userId)
    this.log(`✅ Eingeloggt als ${userId}`)

    server.close()
  }
}
