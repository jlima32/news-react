import "./header.css"
import { Link } from "react-router-dom";

export default function Header(){
    return <>
        <header>
            <div className="center">
                <div className="logo">
                    <Link to="/">123 <span>News</span></Link>
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