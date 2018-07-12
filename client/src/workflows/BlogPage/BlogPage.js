import React from "react";
import * as blogActions from "../../redux/actions/blogActions";
import toast from "toastr";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import BlogPostList from "../../components/BlogPostList/BlogPostList";
import BlogSearch from "../../components/BlogSearch/BlogSearch";
import ProgressIndicator from "../../components/ProgressIndicator/ProgressIndicator";
const LIST_SIZE = 10;
class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true };
    }

    componentDidMount() {
        this.props.blogActions.searchPostByText().then(() => {
            this.setState({ isLoading: false })
        }).catch(err => {
            toast.error(err.message);
            this.setState({ isLoading: false })
        });
    }



    render() {
        return (
            <div>
                <BlogSearch />
                {this.state.isLoading && <ProgressIndicator />}
                <BlogPostList isLoading={this.state.isLoading} postsToRender={this.props.postsToRender} />
                <div className="buttons-container">
                    <Button variant="contained" >Prev</Button>
                    <Button variant="contained" disabled={true}>Next</Button>
                </div>
            </div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    let postsToRender = state.blogPage.posts.slice(state.startIndex, LIST_SIZE);
    return {
        postsToRender,
        startIndex: state.startIndex
    };
};

const mapDispatchToProps = dispatch => {
    return {
        blogActions: bindActionCreators(blogActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);