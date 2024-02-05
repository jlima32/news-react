import "./search.css";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import Loader from "../../components/loader/loader.jsx";
import SearchContent from "../../components/search-content/search-content.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Search(){

    const { text } = useParams();
    const [news, setNews] = useState([]);
    const [qtNews, setqtNews] = useState(3);
    const loadMore = () => {
        setqtNews(qtNews + 3);
    }

    const slice = news.slice(0, qtNews);
    const [removeLoading, setRemoveLoading] = useState(false);
    
    useEffect(() => {

        setTimeout(
            () => {
                fetch(`https://65bf85cb25a83926ab952277.mockapi.io/news/noticias/?search=${text}&orderby=data&order=desc`)
                    .then((resp) => resp.json())
                    .then((data) => {
                            if(data === 'Not found'){
                                setNews('')
                            }else{
                                setNews(data);
                            }
                            setRemoveLoading(true)
                    })
                    .catch(err => console.log(err))
            }, 100)
            }, [text])

    return <>
        <Header />
        <section className="news">
            <div className="search-content">
                <p className="search-result">
                    {news.length} { news.length !== 1 ? 'resultados' : 'resultado' } para <strong>{text}</strong>
                </p>
                    {news.length > 0 
                        ? slice.map((item) => 
                            <SearchContent
                                key={item.id}
                                id={item.id}
                                categoria={item.categoria}
                                data={item.data}
                                titulo={item.titulo}
                                subtitulo={item.subtitulo}
                            />     
                            )
                        : <p className="search-result"><strong>Por favor, tente novamente com outro termo.</strong></p>
                    }
                    
                {!removeLoading && <Loader />}
            </div>

            <div className="center" onClick={() => loadMore()}>
                {
                    news.length !== slice.length &&
                    <button className="btn more-news">Carregar Mais</button>
                }
                
            </div>

        </section>

        <Footer />
    </>
}