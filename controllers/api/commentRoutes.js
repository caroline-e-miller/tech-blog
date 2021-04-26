const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// create new comment
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            id: req.params.id,
            comment_body: req.body.comment_body,
            blog_id: req.body.blogId,
            user_id: req.session.user_id,
            date_created: req.body.date_created
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;