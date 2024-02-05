import "./search.css";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Search(){

    const { text } = useParams();
    const [newsSearch, setNewsSearch] = useState([]);

    useEffect(() => {
        fetch(`https://65bf85cb25a83926ab952277.mockapi.io/news/noticias/?search=${text}`)
            .then((resp) => resp.json())
            .then((data) => {
                    if(data === 'Not found'){
                        setNewsSearch('')
                    }else{
                        setNewsSearch(data);
                    }
                
            })
            .catch(err => console.log(err))
    }, [text])

    return <>
        <Header />
        <section className="news">
            <div className="search-content">
                <p className="search-result">
                    {newsSearch.length} { newsSearch.length !== 1 ? 'resultados' : 'resultado' } para <strong>{text}</strong>
                </p>

                <div className="search-result-container">
                    <div className="flex">
                        <p className="search-result-container-category saudeTxt">SAÚDE</p>
                        <p className="search-result-container-category-date">04/02/2022 - 18h00</p>
                    </div>
                    <div className="search-result-container-news-title-news">
                            <a href=""><h2>Confira a lista com todos os campeões da Supercopa</h2></a>
                            <p>OS CAMPEÕES DA SUPERCOPA DO BRASIL 1990 - Grêmio (vice Vasco) 1991 - Corinthians (vice Flamengo) 2020 - Flamengo (vice Atlético Paranaense, atual Athletico) 2021 - Flamengo (vice Palmeiras ...) Lorem ipsum dolor sit amet consecte</p>
                    </div>
                </div>

            </div>
            
        
        </section>

        <Footer />
    </>
}