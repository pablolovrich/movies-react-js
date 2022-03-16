import styles from "./Search.module.css"
import { FaSearch } from "react-icons/fa";
import { useQuery } from "../hooks/useQuery";
import { useNavigate } from "react-router-dom";

const Search = () => {

    const query = useQuery();
    const search = query.get("search")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                    className={styles.searchInput}
                    type="text"
                    value={search}
                    onChange={(e) => {
                        const value = e.target.value
                        navigate("/?search=" + value);
                    }}
                    placeholder="Search title"
                    aria-label="Search Movies"
                />
                <FaSearch className={styles.searchButton} size={20} />
            </div>
        </form>
    )
}

export default Search