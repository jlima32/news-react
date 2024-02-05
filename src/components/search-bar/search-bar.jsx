import "./search-bar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchBar(){
    const [valor,setValor] = useState('');
    const handleChange = (e) => {
        setValor(e.target.value);
    }

    const navigate = useNavigate();

    function search(){
        navigate(`/Search/${valor}`);
    }

    return <>
        <div className="search">
            <form className="searchbar">
                <input type="text" id="searchInput" name="searchInput" onChange={handleChange} placeholder="Digite o que procura..." />
                <button className="searchButton" onClick={search}>
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
    </>
}