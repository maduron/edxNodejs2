let getComments = (req, res) => {
    //    console.log('getComments: ' + req.originalUrl + ' -- ' + req.params.post_id);
    res.status(200).send(req.store.posts[req.params.post_id].comments);
};

let addComment = (req, res) => {
    //    console.log('addComment: ' + req.originalUrl + ' -- ' + req.params.post_id + ' -- ' + JSON.stringify(req.body));
    if (!req.store.posts[req.params.post_id].comments) {
        req.store.posts[req.params.post_id].comments = [];
    }
    const id = req.store.posts[req.params.post_id].comments.length;
    req.store.posts[req.params.post_id].comments.push(req.body);
    res.status(201).send({
        "id": id
    });
};

let updateComment = (req, res) => {
    //    console.log('updateComment: ' + req.originalUrl + ' -- ' + req.params.post_id + ' -- ' + req.params.comment_id + ' -- ' + JSON.stringify(req.body));
    Object.assign(req.store.posts[req.params.post_id].comments[req.params.comment_id], req.body);
    res.sendStatus(200);
};

let removeComment = (req, res) => {
    //    console.log('removeComment: ' + req.originalUrl + ' -- ' + req.params.post_id + ' -- ' + req.params.comment_id);
    req.store.posts[req.params.post_id].comments.splice(req.params.comment_id, 1);
    res.sendStatus(204);
};

module.exports = {
    "getComments": getComments,
    "addComment": addComment,
    "updateComment": updateComment,
    "removeComment": removeComment
};