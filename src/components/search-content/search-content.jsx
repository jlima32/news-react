import "./search-content.css";
import { Link } from "react-router-dom";

export default function SearchContent({ id, categoria, data, titulo, subtitulo}){
    return <>
        
                <div className="search-result-container">
                    <div className="flex">
                        <p className={`search-result-container-category ${categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}Txt`}>{categoria}</p>
                        <p className="search-result-container-category-date">{data}</p>
                    </div>
                    <div className="search-result-container-news-title-news">
                            <h2><Link to={`/News/${id}`}>{titulo}</Link></h2>
                            <p>{subtitulo}</p>
                    </div>
                </div>

    </>
}