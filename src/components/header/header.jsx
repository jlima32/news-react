import SearchBar from "../search-bar/search-bar.jsx";
import "./header.css"
import { Link } from "react-router-dom";

export default function Header(){
    return <>
        <header>
            <div className="center">
                <div className="logo">
                    <Link to="/">123 <span>News</span></Link>
                </div>
                <SearchBar />
            </div>
        </header>
    </>
}