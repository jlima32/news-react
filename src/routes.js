import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home.jsx";
import News from "./pages/news/news.jsx";
import Search from "./pages/search/search.jsx";

export default function Rotas(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/News" element={<Home />} />
            <Route path="/Search" element={<Home />} />
            <Route path="/News/:id" element={<News />} />
            <Route path="/Search/:text" element={<Search />} />
        </Routes>
    </BrowserRouter>
}