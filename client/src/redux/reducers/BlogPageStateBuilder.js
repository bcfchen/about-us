import BlogPageState from "./BlogPageState";
class BlogPageStateBuilder {
    init(state, increment) {
        this.state = new BlogPageState(state);
        this.increment = increment;
        return this;
    }

    forNextPage() {
        this.state.setStartIndex(this.state.startIndex + this.increment);
        return this;
    }

    forPrevPage() {
        this.state.setStartIndex(this.state.startIndex - this.increment);
        return this;
    }

    forSearchText(searchText = "") {
        this.state.searchText = searchText;
        return this;
    }

    forSearchResults(posts, searchText = "") {
        this.state.setPosts(posts);
        return this;
    }

    build() {
        let calculatedEndIndex = this.state.startIndex + this.increment,
            atTheEnd = calculatedEndIndex >= this.state.posts.length;
        return {
            ...this.state,
            endIndex: atTheEnd ? this.state.posts.length : calculatedEndIndex,
            prevButtonActive: this.state.startIndex !== 0,
            nextButtonActive: !atTheEnd
        };
    }
}

export default BlogPageStateBuilder;