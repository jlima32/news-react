import "./news-content.css";
import NewsSidebar from "../news-sidebar/news-sidebar.jsx";


export default function NewsContent({titulo, subtitulo, data, img, creditoImg, noticia}){
    return <>
        <div className="news-content">
                <h1>
                    {titulo}
                </h1>
                <h2>
                {subtitulo}
                </h2>

                <div className="news-dt-social">
                    <div className="news-dt-social-date">
                        <p>{data}</p>
                    </div>
                    <div className="news-dt-social-icons">
                        <i className="fa-brands fa-facebook face"></i>
                        <i className="fa-brands fa-twitter twitter"></i>
                        <i className="fa-brands fa-whatsapp whats"></i>
                        <i className="fa-brands fa-linkedin linkedin"></i>
                    </div>
                </div>

                <div className="news-img-sidebar">
                    <div className="news-img-sidebar-img">
                        <img src={img} alt="Foto Notícia" />
                        <p className="news-img-sidebar-img-credit">Imagem: {creditoImg}</p>
                    </div>
                    <div className="news-img-sidebar-sidebar">
                        <h3>Veja Também</h3>
                        <NewsSidebar />
                        <NewsSidebar />
                        <NewsSidebar />
                        <NewsSidebar />
                        <NewsSidebar />
                    </div>
                </div>

                <div className="news-text">
                    <p>{noticia}</p>
                
                </div>

            </div>
    </>
}