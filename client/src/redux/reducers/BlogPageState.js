import BlogPageStateBuilder from "./BlogPageStateBuilder";
class BlogPageState {
    constructor(properties) {
        this.posts = properties.posts;
        this.startIndex = properties.startIndex;
        this.endIndex = properties.endIndex;
        this.prevButtonActive = properties.prevButtonActive;
        this.nextButtonActive = properties.nextButtonActive;
        this.searchText = properties.searchText;
    }

    setStartIndex(newStartIndex) {
        if (newStartIndex >= this.posts.length) { return; }
        if (newStartIndex < 0) {
            this.startIndex = 0;
            return;
        }

        this.startIndex = newStartIndex;
    }

    setPosts(posts) {
        this.posts = posts;
        this.startIndex = 0;
    }

    static get builder() { return BlogPageStateBuilder; }
}

export default BlogPageState;