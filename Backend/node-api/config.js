require('dotenv').config();


module.exports = {
    // 서버 정보
  app: {
    port: process.env.PORT,
    host: process.env.HOST
  }
}
