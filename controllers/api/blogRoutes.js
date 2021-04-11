const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

// find all blogs
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [{ model: Comment }, { model: User }]
        });
        res.status(200).json(blogData);

    } catch (error) {
        res.status(500).json(error);
    }
});

// create new blog post
router.post('/', withAuth, async (req, res) => {
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }
});

// delete a blog post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!blogData) {
            res.status(404).json({ message: 'No blog found with this id!' });
            return;
        }

        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update a blog post
router.put('/:id', async (req, res) => {
    try {
        const blogData = await Blog.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(blogData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
