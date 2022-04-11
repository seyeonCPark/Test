const app = require('../app');
const PORT = process.env.PORT || 3000;
// const PORT = 3000; // .env에 등록.

app.listen(PORT, () => {
    console.log("-----running xo-----")
});