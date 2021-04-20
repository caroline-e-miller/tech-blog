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


// const updateBlog = async (event) => {
//     event.preventDefault();

//     const title = document.querySelector('#blog-name').value.trim();
//     const post_body = document.querySelector('#blog-body').value.trim();
//     const id = event.target.getAttribute('blog-edit-id');

//     console.log(`### ${title} ### ${post_body} ## ${id}`);

//     if (title && post_body) {
//         // Send the e-mail and password to the server
//         const response = await fetch(`/api/post/${id}`, {
//             method: 'PUT',
//             body: JSON.stringify({ title, post_body }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             document.location.replace(`/dashboard`);
//         } else {
//             alert('Failed to update the blog.');
//         }
//     }
// }

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

document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newBlog);

document
    .querySelector('.blog-list')
    .addEventListener('click', deleteBlog);

// document
//     .querySelector('.edit-btn')
//     .addEventListener('click', updateBlog);
