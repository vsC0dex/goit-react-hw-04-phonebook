import PropTypes from 'prop-types';

import styles from './phonebook-list.module.css';

const PhonebookList = ({ removeContact, contacts }) => {
  const contact = contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}
      <button onClick={() => removeContact(id)} className={styles.btn}>
        Delete
      </button>
    </li>
  ));
  return <ol className={styles.list}>{contact}</ol>;
};

export default PhonebookList;

PhonebookList.defaultProps = {
  contacts: [],
};

PhonebookList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
