const newBlog = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-name').value.trim();
    const postBody = document.querySelector('#post_body').value.trim();

    if (title && postBody) {
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
//             alert('Failed to publish post.');
//         }
//     }
// };

const deleteBlog = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

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

document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newBlog);

// document
// .querySelector('.blog-list')
// .addEventListener('click', deleteBlog);

document
    .querySelector('.blog-list')
    .addEventListener('click', deleteBlog);
