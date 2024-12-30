import s from "./searchBar.module.css";
import { GoSearch } from "react-icons/go";

const SearchBar = ( {onSubmit} ) => {
  return (
  <header className={s.header}>
  <form onSubmit={onSubmit} className={s.form}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      className={s.input}    
    />
    <button className={s.search} type="submit"><GoSearch /></button>
  </form>
</header>
  )
}

export default SearchBar






