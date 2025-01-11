const prompt = require('prompt-sync')();
const fs = require('fs');

let posts = [];
createPosts()

function createPosts() {
    try {
        // Check if a posts json file already exists and create one if it doesn't
        if (!fs.existsSync('posts.json')) {
            console.log('Creating a post collection.');
            fs.writeFileSync('posts.json', JSON.stringify([], null, 2));
            return;
        }
    } catch (err) {
        console.error('Error initializing posts:', err);
    }
}

function loadPosts() {
    try {
        const data = fs.readFileSync('posts.json', 'utf-8');
        posts = JSON.parse(data);
    } catch (err) {
        console.error("Error loading posts:", err);
        posts = [];
    }
}

function savePosts() {
    try {
        fs.writeFileSync('posts.json', JSON.stringify(posts, null, 2));
    } catch (err) {
        console.error("Error saving posts:", err);
    }
}

function createPost() {
    const title = prompt('Enter post title: ');
    const content = prompt('Enter post content: ');
    posts.push({ title, content });
    savePosts();
    console.log('Post created successfully!');
}

function listPosts() {
    loadPosts()

    if (posts.length === 0) {
        console.log('No posts found.');
        return;
    }

    posts.forEach((post, index) => {
        console.log(`${index + 1}. ${post.title}: ${post.content}`);
    });
}

function editPost() { // allows user to overwrite a post
    listPosts();
    const index = parseInt(prompt('Enter the index of the post to edit: ')) - 1;
    if (index >= 0 && index < posts.length) {
        const title = prompt('Enter new title: ');
        const content = prompt('Enter new content: ');
        posts[index] = { title, content };
        savePosts();
        console.log('Post edited successfully!');
    } else {
        console.log('Invalid index.');
    }
}

function deletePost() {
    listPosts();
    const index = parseInt(prompt('Enter the index of the post to delete: ')) - 1;
    if (index >= 0 && index < posts.length) {
        posts.splice(index, 1);
        savePosts();
        console.log('Post deleted successfully!');
    } else {
        console.log('Invalid index.');
    }
}

function viewBlogPosts() { //will display the link to my blog on medium
    console.log('Visit my blog posts on Medium: https://medium.com/@nwakalokenechukwu/javascript-variables-do-they-vary-or-are-they-all-the-same-ec7102d7969b');
}

function main() {
    loadPosts(); // Load existing posts from the file
    console.log('Welcome to the Blog CLI!');
    while (true) {
        console.log('\nOptions:');
        console.log('1. Create Post');
        console.log('2. List Posts');
        console.log('3. Edit Post');
        console.log('4. Delete Post');
        console.log('5. View Blog Posts');
        console.log('6. Exit');

        const choice = parseInt(prompt('Enter your choice: '));

        switch (choice) {
            case 1:
                createPost();
                break;
            case 2:
                listPosts();
                break;
            case 3:
                editPost();
                break;
            case 4:
                deletePost();
                break;
            case 5:
                viewBlogPosts();
                break;
            case 6:
                console.log('Goodbye!');
                process.exit(0);
        }
    }
}

main();