const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server listening on port ${port}...`));
