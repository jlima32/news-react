import "./news-wrapper.css";
import { Link } from "react-router-dom";

 function NewsWrapper({ id, img, categoria, data, titulo, noticia }){
    return <>
        <div className="news-wrapper">
            <div className="box-single-news">
                <div className="img-container">
                    <img src={img} alt="Foto Noticia" />
                </div>
                <div className="single-news-content">
                    <div className="news-cat-dt">
                        <p className={`news-category ${categoria.toLowerCase()}`}><Link to="/News">{categoria}</Link></p>
                        <p className="news-date">{data.slice(0,10)}</p>
                    </div>
                    <h2><Link to="/News">{titulo}</Link></h2>
                    <p>{noticia.slice(0,175)} ...</p>
                </div>
            </div>
        </div>
    </>
}

export default NewsWrapper;