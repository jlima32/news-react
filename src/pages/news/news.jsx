import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import Loader from "../../components/loader/loader.jsx";
import NewsContent from "../../components/news-content/news-content.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function News(){
    const { id } = useParams()

    const [news, setNews] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);

    useEffect(() => {
        fetch(`https://65bf85cb25a83926ab952277.mockapi.io/news/noticias/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setNews(data);
                setRemoveLoading(true)
            })
            .catch(err => console.log(err))
    }, [id])

    return<>
        <Header />
        <section className="news">
            
        {!removeLoading && <Loader />}
            <NewsContent 
                key={news.id}
                titulo={news.titulo}
                subtitulo={news.subtitulo}
                data={news.data}
                img={news.img}
                creditoImg={news.creditoImg}
                noticia={news.noticia}
            />
        </section>

        <Footer />
    </>
}