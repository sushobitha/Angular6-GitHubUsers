//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/Angular6-GitHubUsers'));

app.get('*', (req, res) => {
    res.sendFile(`./Angular6-GitHubUsers/dist/index.html`); // load the single view file (angular will handle the page changes on the front-end)
})

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);