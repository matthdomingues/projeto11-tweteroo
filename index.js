import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());

// armazenamento de dados //

const user = {
    username: 'bobesponja',
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
};

const tweet = {
    username: "bobesponja",
    tweet: "eu amo o hub"
};

// POST //

// /sign-up

const logar = {
    username: "bobesponja",
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
};

// /tweets

const tweets = {
    username: "bobesponja",
    tweet: "eu amo o hub"
};

server.get("/hello", (request, response) => {
    response.send("")
});

server.listen(5000);