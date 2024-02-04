import "./news-sidebar.css";
import { Link } from "react-router-dom";

export default function NewsSidebar({id, img, categoria, titulo, data}){
    return<>

        <div className="news-img-sidebar-more-news">
            <div className="more-news-img">
                <img src={img} alt="Foto Mais Notícias" />
            </div>
            <div className="more-news-content">
                <p className={`more-news-content-title ${categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}Txt`}>{categoria}</p>
                <p className="more-news-content-news"><Link to={`/News/${id}`}>{titulo}</Link></p>
                <p className="more-news-content-date">{data.slice(0,10)}</p>
            </div>
        </div>
    </>
}