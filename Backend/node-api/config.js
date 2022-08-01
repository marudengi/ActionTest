const env = process.env.NODE_ENV;

const config = {
 app: {
  port: parseInt(process.env.APP_PORT),
  host: process.env.APP_host
 }
};

module.exports = config[env];
