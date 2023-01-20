declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      API_VERSION: string;
      API_NAMESPACE?: string;
      CLIENT_ID: string;
    }
  }
}

export {};
