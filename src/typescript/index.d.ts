declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      PORT?: string
      DISCORD_APPLICATION_ID: string
      DISCORD_TOKEN: string
    }
  }
}

export {}