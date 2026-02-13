import express from 'express'
import requestIp from 'request-ip'

const app = express();

app.use(requestIp.mw());

//? create a session
// const session = await createSession(user.id, {
//     ip: req.clientIp,
//     userAgent: req.headers["user-agent"]
// })







app.listen(3000, () => {
    console.log(`Server: I'm here`)
})