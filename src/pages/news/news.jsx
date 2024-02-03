import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import NewsContent from "../../components/news-content/news-content.jsx";

export default function News(){
    return<>
        <Header />

        <section className="news">
            <NewsContent />
        </section>

        <Footer />
    </>
}