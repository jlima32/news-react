import "./home.css";
import Header from "../../components/header/header.jsx";
import NewsWrapper from "../../components/news-wrapper/news-wrapper.jsx";
import Footer from "../../components/footer/footer.jsx";
import Loader from "../../components/loader/loader.jsx";
import { useState, useEffect } from "react";


export default function Home(){

    const [news, setNews] = useState([]);
    const [qtNews, setqtNews] = useState(6);
    const loadMore = () => {
        setqtNews(qtNews + 3);
    }

    const slice = news.slice(0, qtNews);

    const [removeLoading, setRemoveLoading] = useState(false);
    
    useEffect(() =>{
        setTimeout(
            () => {
                fetch(`https://65bf85cb25a83926ab952277.mockapi.io/news/noticias/?orderby=data&order=desc`)
                .then((resp) => resp.json())
                .then((data) => {
                    setNews(data);
                    setRemoveLoading(true)
                })
            .catch((err) => console.log(err))
            }, 100)
    }, [])    

    return <>
        <Header />
        <section className="news">
            <div className="center">
            {news.length > 0 &&
                slice.map((item) => 
                    <NewsWrapper
                        key={item.id} 
                        id={item.id} 
                        img={item.img} 
                        categoria={item.categoria} 
                        data={item.data} 
                        titulo={item.titulo} 
                        noticia={item.noticia} 
                    />
                )}
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

