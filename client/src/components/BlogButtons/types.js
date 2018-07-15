import PropTypes from 'prop-types';

export const propTypes = {
    prevButtonActive: PropTypes.bool.isRequired,
    nextButtonActive: PropTypes.bool.isRequired,
    prevPage: PropTypes.func.isRequired,
    nextPage: PropTypes.func.isRequired
};