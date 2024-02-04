import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home.jsx";
import News from "./pages/news/news.jsx";

export default function Rotas(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news/:id" element={<News />} />
        </Routes>
    </BrowserRouter>
}