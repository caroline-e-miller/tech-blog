const newComment = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment-desc').value.trim();

    if (comment) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment_body }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
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
            document.location.replace('/dashboard');
        } else {
            alert('Failed to erase comment.');
        }
    }
};