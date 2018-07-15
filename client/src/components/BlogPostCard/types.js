import PropTypes from 'prop-types';
import BlogPostItem from '../../models/BlogPostItem';

export const propTypes = {
    post: PropTypes.instanceOf(BlogPostItem).isRequired
};