const newComment = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment-body').value.trim();

    if (comment) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment_body }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/blog');
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
    .addEventListener('click', newComment);

document
    .querySelector('.comment-list')
    .addEventListener('click', deleteComment);