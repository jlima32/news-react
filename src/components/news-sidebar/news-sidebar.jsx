import "./news-sidebar.css";
import foto from "../../assets/noticia1.webp";

export default function NewsSidebar(){
    return<>

        <div className="news-img-sidebar-more-news">
            <div className="more-news-img">
                <img src={foto} alt="Foto Mais Notícias" />
            </div>
            <div className="more-news-content">
                <p class="more-news-content-title">carros</p>
                <p class="more-news-content-news"><a href="#">Fim da torcida única? Saiba o motivo ...</a></p>
                <p class="more-news-content-date">01/02/2024</p>
            </div>
        </div>
    </>
}