import "./loader.css";
import loading from "../../assets/loading.svg";

export default function Loader() {
    return<>
    <div className="loader-container">
        <img className="loader" src={loading} alt="Carregando ..." />
    </div>
    </>
}