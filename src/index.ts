import * as express from 'express'

import { Client } from 'discord.js'

const client = new Client({ intents: [] })

client.on('ready', (client) => {
  console.log('started')

  for (const key of client.guilds.cache) {
    console.log(key)
  }
})

client.login(process.env.DISCORD_TOKEN)

const app = express()

app.get('/', (req, res) => {
  res.status(200).send('ok')
})

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})
