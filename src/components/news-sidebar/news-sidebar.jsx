import "./news-sidebar.css";
import foto from "../../assets/noticia1.webp";
import { Link } from "react-router-dom";

export default function NewsSidebar(){
    return<>

        <div className="news-img-sidebar-more-news">
            <div className="more-news-img">
                <img src={foto} alt="Foto Mais Notícias" />
            </div>
            <div className="more-news-content">
                <p className="more-news-content-title">carros</p>
                <p className="more-news-content-news"><Link to="/News">Fim da torcida única? Saiba o motivo ...</Link></p>
                <p className="more-news-content-date">01/02/2024</p>
            </div>
        </div>
    </>
}