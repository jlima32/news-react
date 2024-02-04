import "./home.css";
import Header from "../../components/header/header.jsx";
import NewsWrapper from "../../components/news-wrapper/news-wrapper.jsx";
import Footer from "../../components/footer/footer.jsx";
import { useState, useEffect } from "react";


export default function Home(){

    const [news, setNews] = useState([]);
    
    useEffect(() =>{
        fetch('https://65bf85cb25a83926ab952277.mockapi.io/news/noticias')
            .then((resp) => resp.json())
            .then((data) => {
                setNews(data);
            })
            .catch((err) => console.log(err))
    }, [])    

    return <>
        <Header />

        <section className="news">
            <div className="center">
            {news.length > 0 &&
                    news.map((item) => 
                    <NewsWrapper
                    key={item.id} 
                    img={item.img} 
                    categoria={item.categoria} 
                    data={item.data} 
                    titulo={item.titulo} 
                    noticia={item.noticia} 
                    />)}
            </div>
        </section>

        <Footer />

    </>
}

