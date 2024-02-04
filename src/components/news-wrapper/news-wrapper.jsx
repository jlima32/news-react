import "./news-wrapper.css";
import foto from "../../assets/noticia1.webp";
import { Link } from "react-router-dom";

export default function NewsWrapper(){
    return <>
        <div className="news-wrapper">
            <div className="box-single-news">
                <div className="img-container">
                    <img src={foto} alt="Foto Noticia" />
                </div>
                <div className="single-news-content">
                    <div className="news-cat-dt">
                        <p className="news-category orange"><Link to="/News">Esportes</Link></p>
                        <p className="news-date">02/02/2024</p>
                    </div>
                    <h2><Link to="/News">Hamilton terá salário na Ferrari de R$ 250 milhões</Link></h2>
                    <p>O piloto Lewis Hamilton terá um salário de £40 milhões por ano (R$ 250 milhões) na Ferrari. A informação é do jornal MailSport. O site ainda diz que Hamilton ...</p>
                </div>
            </div>
        </div>
    </>
}