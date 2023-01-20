const server = {
  env: process.env.NODE_ENV || 'development',
  apiRoot: `/api/${process.env.API_VERSION}/${process.env.API_NAMESPACE}`,
  port: process.env.PORT ? +process.env.PORT : 3000,
  devMode: process.env.NODE_ENV !== 'production',
  isProduction: process.env.IS_PRODUCTION === 'true',
  clientId: process.env.CLIENT_ID,
};

export default server;
