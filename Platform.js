document.addEventListener('DOMContentLoaded', function() {
    const publishBtn = document.getElementById('publishBtn');
    const postTitleInput = document.getElementById('postTitle');
    const postContentInput = document.getElementById('postContent');
    const postsContainer = document.getElementById('postsContainer');

    publishBtn.addEventListener('click', function() {
        const title = postTitleInput.value.trim();
        const content = postContentInput.value.trim();

        if (title && content) {
            addPost(title, content);
            postTitleInput.value = '';
            postContentInput.value = '';
        } else {
            alert('Please fill in both the title and content fields.');
        }
    });

    function addPost(title, content) {
        const post = document.createElement('div');
        post.className = 'post';

        const postTitle = document.createElement('h3');
        postTitle.textContent = title;

        const postContent = document.createElement('p');
        postContent.textContent = content;

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';

        post.appendChild(postTitle);
        post.appendChild(postContent);
        post.appendChild(editBtn);
        post.appendChild(deleteBtn);
        postsContainer.appendChild(post);

        // Edit functionality
        editBtn.addEventListener('click', function() {
            const newTitle = prompt('Edit Title', title);
            const newContent = prompt('Edit Content', content);

            if (newTitle && newContent) {
                postTitle.textContent = newTitle;
                postContent.textContent = newContent;
            }
        });

        // Delete functionality
        deleteBtn.addEventListener('click', function() {
            postsContainer.removeChild(post);
        });
    }
});
