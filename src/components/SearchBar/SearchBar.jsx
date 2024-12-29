import s from "./searchBar.module.css";
import { GoSearch } from "react-icons/go";

const SearchBar = () => {
  return (
  <header className={s.header}>
  <form className={s.form}>
    <input
      type="text"
      autocomplete="off"
      autofocus
                  placeholder="Search images and photos"
                  className={s.input}
    />
    <button className={s.search} type="submit"><GoSearch /></button>
  </form>
</header>
  )
}

export default SearchBar






