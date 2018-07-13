import PropTypes from 'prop-types';

export const propTypes = {
    searchText: PropTypes.string,
    onSearch: PropTypes.func.isRequired,
    classes: PropTypes.shape({ progress: PropTypes.string })
};