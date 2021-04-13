const newComment = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment-body').value.trim();
    const blogId = event.target.getAttribute('blog-id');
    console.log(event.target);

    if (event.target.hasAttribute('blog-id')) {
        // const id = event.target.getAttribute('form-input');

        // const response = await fetch(`/api/comments/${id}`, {

        const response = await fetch(`/api/comments/`, {
            method: 'POST',
            body: JSON.stringify({ comment_body: comment }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            // document.location.replace(`/blog/${blogId}`);
            console.log(response);
            console.log(blogId);
        } else {
            alert('Failed to publish comment.');
        }
    }
};

const deleteComment = async (event) => {
    if (event.target.hasAttribute('comment-data-id')) {
        const id = event.target.getAttribute('comment-data-id');

        const response = await fetch(`/api/comments/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/blog');
        } else {
            alert('Failed to erase comment.');
        }
    }
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newComment);

document
    .querySelector('.comment-list')
    .addEventListener('click', deleteComment);