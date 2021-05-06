const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//gets the Posts
router.get('/', (req, res) => {
    // res.send('We are on Posts');
    try {
        const posts = Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

//Submits the Posts
router.post('/', async(req, res) => {
    //console.log(req.body);
    const post = new Post({
        video_title: req.body.video_title,
        description: req.body.description,
        video_URL: req.body.video_URL,
        video_thumbnail: req.body.video_thumbnail,
        video_view_count: req.body.video_view_count,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        channel_title: req.body.channel_title,
        channel_description: req.body.channel_description,
        channel_thumbnail: req.body.channel_thumbnail,
        channel_subscribers: req.body.channel_subscribers
    });
    try {
        const savedPost = post.save();
        res.json(savedPost);

    } catch (err) {
        res.json({ message: err });
    }
});

//Update the posts in database when changes in youtube feed takes place
router.patch('/:postId', async(req, res) => {
    try {
        const updatedPost = Post.updateOne({ _id: req.params.postId }, {
            $set: {
                video_title: req.body.video_title,
                description: req.body.description,
                video_URL: req.body.video_URL,
                video_thumbnail: req.body.video_thumbnail,
                video_view_count: req.body.video_view_count,
                likes: req.body.likes,
                dislikes: req.body.dislikes,
                channel_title: req.body.channel_title,
                channel_description: req.body.channel_description,
                channel_thumbnail: req.body.channel_thumbnail,
                channel_subscribers: req.body.channel_subscribers
            }
        });
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;