const app = require('../app');
const PORT = process.env.PORT || 3000;
// const PORT = 3000; // .env에 등록.

const logger = require('../src/config/logger');

app.listen(PORT, () => logger.info(`${PORT} 포트에서 서버가 가동됨`));