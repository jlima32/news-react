import "./search-bar.css";

export default function SearchBar(){
    return <>
        <div className="search">
            <form className="searchbar">
                <input type="text" id="searchInput" name="searchInput" placeholder="Digite o que procura..." />
                <button className="searchButton">
                    <i class="fas fa-search"></i>
                </button>
            </form>
        </div>
    </>
}