import express from 'express';
import cors from 'cors';

const server = express();

server.use(cors());
server.use(express.json());

// npx nodemon index.js
// sudo killall -9 node

const tweets = [];
const users = [];

server.post("/sign-up", (req, res) => {
    const body = req.body;
    users.push(body);
    res.send("Ok");
});

server.get("/tweets", (req, res) => {

    if (tweets.length <= 10) {
        res.send([...tweets].reverse())
    } else {
        res.send([...tweets].reverse().splice(0, 10))
    };
});

server.post("/tweets", (req, res) => {
    const body = req.body;
    const { username, tweet } = body
    const { avatar } = users.find(name => name.username === username);

    tweets.push({
        username,
        avatar,
        tweet
    });

    res.send("Ok");
});

server.listen(5000, () => { console.log('Tô funcionando na porta 5000!') });