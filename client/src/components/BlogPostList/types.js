import PropTypes from 'prop-types';
import BlogPostItem from '../../models/BlogPostItem';

export const propTypes = {
    isLoading: PropTypes.bool.isRequired,
    postsToRender: PropTypes.arrayOf(PropTypes.instanceOf(BlogPostItem)).isRequired
};