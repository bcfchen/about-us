import React from "react";
import * as blogActions from "../../redux/actions/blogActions";
import toast from "toastr";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import BlogPostList from "../../components/BlogPostList/BlogPostList";
import BlogSearch from "../../components/BlogSearch/BlogSearch";
import * as _ from 'lodash';
import { propTypes } from './types';


export class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true };
        this.updateSearchText = this.updateSearchText.bind(this);
        this.updatePosts = _.debounce(this.updatePosts.bind(this), 300);
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts(searchText) {
        this.setState({ isLoading: true });
        this.props.blogActions.searchPostByText(searchText).then(() => {
            this.setState({ isLoading: false })
        }).catch(err => {
            toast.error(err.message);
            this.setState({ isLoading: false })
        });
    }

    updateSearchText(searchText) {
        this.props.blogActions.updateSearchText(searchText);
    };

    render() {
        return (
            <div>
                <BlogSearch searchText={this.props.searchText} updatePosts={this.updatePosts} updateSearchText={this.updateSearchText} />
                <BlogPostList isLoading={this.state.isLoading} postsToRender={this.props.posts} />
                <div className="btns-container">
                    <Button className="prev-btn" variant="contained" disabled={!this.props.prevButtonActive} onClick={this.props.blogActions.prevPage}>Prev</Button>
                    <Button className="next-btn" variant="contained" disabled={!this.props.nextButtonActive} onClick={this.props.blogActions.nextPage}>Next</Button>
                </div>
            </div>);
    }
}

const mapDispatchToProps = dispatch => {
    return { blogActions: bindActionCreators(blogActions, dispatch) }
};

const mapStateToProps = (state, ownProps) => {
    let blogPageState = state.blogPage;
    return {
        posts: blogPageState.posts.slice(blogPageState.startIndex, blogPageState.endIndex),
        prevButtonActive: blogPageState.prevButtonActive,
        nextButtonActive: blogPageState.nextButtonActive,
        searchText: blogPageState.searchText
    };
};

BlogPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);