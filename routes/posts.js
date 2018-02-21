let getPosts = (req, res) => {
    //    console.log('getPosts: ' + req.originalUrl);
    res.status(200).send(req.store.posts);
};

let addPost = (req, res) => {
    //    console.log('addPost: ' + req.originalUrl + ' -- ' + JSON.stringify(req.body));
    const newId = req.store.posts.length;
    const newPost = req.body; // Maybe do some validation...
    req.store.posts.push(newPost);
    res.status(201).send({
        'id': newId
    });
};

let updatePost = (req, res) => {
    //    console.log('updatePost: ' + req.originalUrl + ' -- ' + req.params.post_id + ' -- ' + JSON.stringify(req.body));
    Object.assign(req.store.posts[req.params.post_id], req.body);
    res.sendStatus(204);
};

let removePost = (req, res) => {
    //    console.log('removePost: ' + req.originalUrl + ' -- ' + req.params.post_id);
    req.store.posts.splice(req.params.post_id, 1);
    res.sendStatus(204);
};

module.exports = {
    "getPosts": getPosts,
    "addPost": addPost,
    "updatePost": updatePost,
    "removePost": removePost
};