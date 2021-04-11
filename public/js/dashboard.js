const newBlog = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-name').value.trim();
    const post_body = document.querySelector('#blog-body').value.trim();

    if (title && post_body) {
        const response = await fetch(`/api/blogs`, {
            method: 'POST',
            body: JSON.stringify({ title, post_body }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to publish post.');
        }
    }
};

// const newComment = async (event) => {
//     event.preventDefault();

//     const comment = document.querySelector('#comment-desc').value.trim();

//     if (comment) {
//         const response = await fetch(`/api/comments`, {
//             method: 'POST',
//             body: JSON.stringify({ comment_body }),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (response.ok) {
//             document.location.replace('/dashboard');
//         } else {
//             alert('Failed to publish comment.');
//         }
//     }
// };

const deleteBlog = async (event) => {
    if (event.target.hasAttribute('blog-data-id')) {
        const id = event.target.getAttribute('blog-data-id');

        const response = await fetch(`/api/blogs/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to erase post.');
        }
    }
};

// const deleteComment = async (event) => {
//     if (event.target.hasAttribute('comment-data-id')) {
//         const id = event.target.getAttribute('comment-data-id');

//         const response = await fetch(`/api/comments/${id}`, {
//             method: 'DELETE',
//         });

//         if (response.ok) {
//             document.location.replace('/dashboard');
//         } else {
//             alert('Failed to erase comment.');
//         }
//     }
// };

document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newBlog);

document
    .querySelector('.new-comment-form')
    .addEventListener('click', newComment);

document
    .querySelector('.comment-list')
    .addEventListener('click', deleteComment);

document
    .querySelector('.blog-list')
    .addEventListener('click', deleteBlog);
