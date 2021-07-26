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


