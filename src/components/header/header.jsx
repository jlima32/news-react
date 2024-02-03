import "./header.css"

export default function Header(){
    return <>
        <header>
            <div className="center">
                <div className="logo">
                    123 <span>News</span>
                </div>
                <div className="search">
                    <form className="searchbar">
                        <input type="text" id="searchInput" name="searchInput" placeholder="Digite o que procura..." />
                    </form>
                </div>
            </div>
        </header>
    </>
}