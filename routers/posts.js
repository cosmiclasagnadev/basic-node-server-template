const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
// importing all needed packages

// Sample Router for getting all instances of a model
router.get('/', async (req, res) => {
    
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message: err})
    }

})


// Sample Router for creating an instance of a model
router.post('/', async (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await newPost.save();
        res.json(savedPost);
    } catch (err) {
        res.json({message: err})
    }

})

// Sample Router for finding a specific instance of a model by _id
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({message: err})
    }

})

// Sample Router for deleting a specific instance of a model by _id
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    } catch (err) {
        res.json({message: err})
    }

})

// Sample Router for udpating a specific instance of a model by _id
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({_id: req.params.postId}, {$set: {
            title: req.body.title
        }});
        res.json(updatedPost);
    } catch (err) {
        res.json({message: err})
    }

})

module.exports = router;