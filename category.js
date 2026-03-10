function addPost() {
    const input = document.querySelector('.post-input');
    const postContent = input.value;
    if (text === '') return;

    const postList = document.getElementById('posts-lists');
    const postItem = document.createElement('div');
    postContent.className = 'reddit-post';
    postContent.innerHTML = `
        <div class="post-header">
            <div class="avatar"></div>
            <div>
                <span class="post-username">Username</span>
                <span class="post-handle"> Just now </span>
            </div>
        </div>
        <p class="post-content">${postContent}</p>
        <div class="post-actions">
            <button class="like-btn">Like</button>
            <button class="comment-btn">Comment</button>
            <button class="share-btn">Share</button>
        </div>
    `;
    postList.prepend(post);
    input.value = '';
}