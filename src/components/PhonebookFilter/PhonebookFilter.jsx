import PropTypes from 'prop-types';

import styles from './phonebook-filter.module.css';

const PhonebookFilter = ({ handleChange }) => {
  return (
    <div className={styles.formGroup}>
      <label>Find contacts by name or number</label>
      <input
        name="filter"
        onChange={handleChange}
        placeholder="Filter contacts"
      />
    </div>
  );
};

export default PhonebookFilter;

PhonebookFilter.propTypes = {
  handleChange: PropTypes.func,
};
