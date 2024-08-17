function filterPosts() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const posts = document.getElementById('blog-posts').getElementsByTagName('li');

    Array.from(posts).forEach(function(post) {
        const keywords = post.getAttribute('data-keywords').toLowerCase();
        if (keywords.includes(searchInput)) {
            post.style.display = '';
        } else {
            post.style.display = 'none';
        }
    });
}
