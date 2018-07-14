import PropTypes from 'prop-types';

export const propTypes = {
    searchText: PropTypes.string,
    updateSearchText: PropTypes.func.isRequired,
    updatePosts: PropTypes.func.isRequired
};