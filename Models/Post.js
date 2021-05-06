const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    video_title: String, 
    description: String,
    video_URL: String, 
    video_thumbnail: String,
    video_view_count: String,
    likes: String,
    dislikes: String, 
    channel_title: String, 
    channel_description: String, 
    channel_thumbnail: String, 
    channel_subscribers: String
});

module.exports = mongoose.model('Posts', PostSchema);