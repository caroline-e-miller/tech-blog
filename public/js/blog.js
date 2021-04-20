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
            body: JSON.stringify({ blogId, comment_body: comment }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace(`/blog/${blogId}`);
            console.log(response);
            console.log(blogId);
        } else {
            alert('Failed to publish comment.');
        }
    }
};

const updateBlog = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#input-title').value.trim();
    const post_body = document.querySelector('#input-body').value.trim();
    const id = event.target.getAttribute('blog-edit-id');

    console.log(`### ${title} ### ${post_body} ## ${id}`);

    if (title && post_body) {
        // Send the e-mail and password to the server
        const response = await fetch(`/api/blog/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, post_body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(`/blog`);
        } else {
            alert('Failed to update the blog.');
        }
    }
}

// const deleteComment = async (event) => {
//     if (event.target.hasAttribute('comment-data-id')) {
//         const id = event.target.getAttribute('comment-data-id');

//         const response = await fetch(`/api/comments/${id}`, {
//             method: 'DELETE',
//         });

//         if (response.ok) {
//             document.location.replace('/blog');
//         } else {
//             alert('Failed to erase comment.');
//         }
//     }
// };

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newComment);

document
    .querySelector('.edit-btn')
    .addEventListener('click', updateBlog);
// document
//     .querySelector('.comment-list')
//     .addEventListener('click', deleteComment);