// Filter posts based on search input
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

// Sort posts by date
function sortPostsByDate() {
    const posts = document.getElementById('blog-posts');
    const postItems = Array.from(posts.getElementsByTagName('li'));

    postItems.sort((a, b) => new Date(b.getAttribute('data-date')) - new Date(a.getAttribute('data-date')));

    posts.innerHTML = '';
    postItems.forEach(post => posts.appendChild(post));
}

// Sort posts by category
function sortPostsByCategory() {
    const posts = document.getElementById('blog-posts');
    const postItems = Array.from(posts.getElementsByTagName('li'));

    postItems.sort((a, b) => {
        const categoryA = a.getAttribute('data-category').toLowerCase();
        const categoryB = b.getAttribute('data-category').toLowerCase();
        if (categoryA < categoryB) return -1;
        if (categoryA > categoryB) return 1;
        return 0;
    });

    posts.innerHTML = '';
    postItems.forEach(post => posts.appendChild(post));
}

let currentPage = 1;
const postsPerPage = 2; // Adjust the number of posts per page

function paginatePosts() {
    const posts = document.getElementById('blog-posts').getElementsByTagName('li');
    const totalPosts = posts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    Array.from(posts).forEach((post, index) => {
        post.style.display = (index >= (currentPage - 1) * postsPerPage && index < currentPage * postsPerPage) ? '' : 'none';
    });

    document.getElementById('page-number').textContent = `Page ${currentPage}`;

    document.getElementById('prev-page').disabled = currentPage === 1;
    document.getElementById('next-page').disabled = currentPage === totalPages;
}

function changePage(direction) {
    const posts = document.getElementById('blog-posts').getElementsByTagName('li');
    const totalPosts = posts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    currentPage += direction;

    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;

    paginatePosts();
}

// Call paginatePosts initially to display the first page of posts
paginatePosts();
