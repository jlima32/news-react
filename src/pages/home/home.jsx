import "./home.css";
import Header from "../../components/header/header.jsx";
import NewsWrapper from "../../components/news-wrapper/news-wrapper.jsx";


export default function Home(){
    return <>
        <Header />

        <section className="news">
            <div className="center">
                <NewsWrapper />
                <NewsWrapper />
                <NewsWrapper />
                <NewsWrapper />
                <NewsWrapper />
                <NewsWrapper />
            </div>
        </section>

    </>
}

