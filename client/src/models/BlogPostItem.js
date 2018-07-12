class BlogPostItem {
    constructor(properties) {
        this.id = properties.id;
        this.title = properties.title;
        this.body = properties.body;
    }

    containsText(searchText) {
        if (!searchText || searchText.length < 1) { return true; }
        const upperCaseSearchText = searchText.toUpperCase();
        const titleContainsText = this.title.toUpperCase().indexOf(upperCaseSearchText) > -1;
        const bodyContainsText = this.body.toUpperCase().indexOf(upperCaseSearchText) > -1;

        return bodyContainsText || titleContainsText;
    }

}

export default BlogPostItem;