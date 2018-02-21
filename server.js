const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const routes = require('./routes/index.js');

let store = {
    posts: [{
        'name': 'Top 10 ES6 features every Web Developer must know',
        'url': 'https://webapplog.com/es6',
        'text': 'This essay will give you a quick introduction to ES6. If you don\'t know what is ES6, it\'s a new JavaScipt implementation',
        'comments': [{
                'text': 'Cruel..., .var {house, mouse} = No type optimization at all.'
            },
            {
                'text': "I think you're undervaluing the benefits of 'let' and 'const'."
            },
            {
                'text': '(p1, p2) => {...}, I understand this. Thank you!'
            }
        ]
    }]
};

const app = express();

app.use(logger('dev'));

app.use((req, res, next) => {

    const url = req.originalUrl;

    if (!(/^\/posts(\/\d+(\/comments(\/\d+)?)?)?$/.test(url))) {
        res.status(400).send('Malformed Request!');
        return;
    }

    const ids = url.match(/\d+/g);

    if (ids != null && ids.length > 0) {
        const post_id = parseInt(ids[0]);
        if (post_id >= store.posts.length) {
            res.status(416).send('Invalid Arguments!');
            return;
        }
        if (ids.length > 1) {
            const comment_id = parseInt(ids[1]);
            if (!store.posts[post_id].comments || comment_id >= store.posts[post_id].comments.length) {
                res.status(416).send('Invalid Arguments!');
                return;
            }
        }
    }

    req.store = store;
    next();
});

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {
    app.use(errorHandler())
}

app.delete('/posts/:post_id/comments/:comment_id', routes.comments.removeComment);
app.put('/posts/:post_id/comments/:comment_id', routes.comments.updateComment);
app.post('/posts/:post_id/comments', routes.comments.addComment);
app.get('/posts/:post_id/comments', routes.comments.getComments);

app.delete('/posts/:post_id', routes.posts.removePost);
app.put('/posts/:post_id', routes.posts.updatePost);
app.post('/posts', routes.posts.addPost);
app.get('/posts', routes.posts.getPosts);


app.use((req, res) => { // this is superflous, but anyway...
    res.status(404).send('Not found!');
});

app.listen(3000, () => {
    console.log('App listening on http://localhost:3000');
});