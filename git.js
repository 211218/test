const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const eventType = req.headers['x-github-event'];
    const payload = req.query;

    if (eventType === 'push') {
        const branch = payload.ref.split('/').pop();
        const repository = payload.repository.name;
        const commits = payload.commits.map(commit => ({
            message: commit.message,
            author: commit.author.name
        }));

        console.log(`Se recibió una  notificación de un push en la rama ${branch} del repositorio ${repository}`);
        console.log(`Commits:`);
        console.log(commits);
    }

    res.status(200).send('OK');
});


app.listen(3000, () => {
    console.log('Webhook server listening on port 3000');
});