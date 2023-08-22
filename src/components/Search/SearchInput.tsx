import styles from './SearchInput.module.css';
function SearchInput() {
  return (
    <div className={styles['search-box']}>
      <i className={styles['fas fa-search spotlight-icon']}></i>
      <input className={styles['search']} type="search" placeholder="Type to find the art..." />
    </div>
  );
}

export default SearchInput;
