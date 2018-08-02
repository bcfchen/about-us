import PropTypes from 'prop-types';

export const propTypes = {
    posts: PropTypes.array.isRequired,
    prevButtonActive: PropTypes.bool.isRequired,
    nextButtonActive: PropTypes.bool.isRequired,
    searchText: PropTypes.string
};