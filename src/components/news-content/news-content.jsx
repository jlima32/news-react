import "./news-content.css";
import foto from "../../assets/noticia1.webp";
import NewsSidebar from "../news-sidebar/news-sidebar.jsx";


export default function NewsContent(){
    return <>
        <div className="news-content">
                <h1>
                    Hamilton será piloto da Ferrari em 2025: maiores vencedores da F1 se unem
                </h1>
                <h2>
                O piloto mais vencedor da história da Fórmula 1 se une à equipe mais vencedora da Fórmula 1 em uma  transferência surpreendente e que foi confirmada nesta quinta-feira: o heptacampeão Lewis Hamilton deixará a Mercedes no final de 2024 e se juntará à Ferrari. O inglês terá 40 anos quando se tornar companheiro de  Charles Leclerc na Scuderia.
                </h2>

                <div className="news-dt-social">
                    <div className="news-dt-social-date">
                        <p>02/02/2024 - 17h00</p>
                    </div>
                    <div className="news-dt-social-icons">
                        <i class="fa-brands fa-facebook face"></i>
                        <i class="fa-brands fa-twitter twitter"></i>
                        <i class="fa-brands fa-whatsapp whats"></i>
                        <i class="fa-brands fa-linkedin linkedin"></i>
                    </div>
                </div>

                <div className="news-img-sidebar">
                    <div className="news-img-sidebar-img">
                        <img src={foto} alt="Foto Notícia" />
                        <p className="news-img-sidebar-img-credit">Imagem: Steve Etherington/Mercedes</p>
                    </div>
                    <div className="news-img-sidebar-sidebar">
                        <h3>Veja Também</h3>
                        <NewsSidebar />
                        <NewsSidebar />
                        <NewsSidebar />
                        <NewsSidebar />
                        <NewsSidebar />
                    </div>
                </div>

                <div className="news-text">
                    <p>Além disso, Hamilton tem na Ferrari uma folha em branco para trabalhar de modo semelhante ao que fez na Mercedes fora das pistas: com ele, a equipe alemã deu mais espaço para a temática da diversidade e também deu início ao Projeto Accelerate 25, que quer aumentar o número de funcionários não-brancos do time até o ano que vem. </p>
                    <p>John Elkann, presidente da marca italiana, ainda ofereceu a criação de um fundo de investimento em sua empresa, Exor, para os projetos pessoais de Hamilton, no valor de 250 milhões de euros, equivalente a R$ 1,3 bilhão. Por sua vez, a Mercedes teria negado a Hamilton a possibilidade de torná-lo embaixador da marca até 2035. </p>
                    <p>Por fim, Hamilton decidiu encerrar a parceria de 11 anos com a Mercedes, tendo informado a equipe sobre a mudança nesta quarta-feira, na véspera do anúncio. O que facilitou o acordo foi o fato do contrato de Hamilton com a Mercedes ser de um ano, até o fim de 2024, com possiblidade de extensão até 2025 - mas com uma cláusula que permitiria ao heptacampeão romper o vínculo com a equipe alemã. Após os anúncios oficiais, Wolff confirmou o prazo do contrato acertado no último ano com o piloto. Porém, o austríaco disse que sentia-se alinhado com Hamilton até a época do Natal, e negou que haja preocupações em relação ao rendimento do carro para esta temporada.</p>
                    <p>Toto disse entender a escolha de Hamilton de comunicar sua saída agora, mesmo com uma temporada pela frente. "Claramente o momento [do anúncio] nos surpreendeu. Mas acho que o que ele está tentando fazer é talvez dar muito tempo para decidir o que queremos fazer no próximo ano", disse ele.</p>
                    <p>Desta vez, Wolff não só tem mais tempo, como também está lidando com um mercado de pilotos muito abertos, com vários contratos se encerrando ao final da temporada. E sabendo que tem uma das melhores vagas ainda em aberto, ao lado do lugar de Sergio Perez na Red Bull. Afinal, a Ferrari e a McLaren estão fechadas, ainda que Wolff tenha indicado que houve certos movimentos recentes no mercado que fecharam algumas portas, e ele muito provavelmente se refere à renovação do contrato de Lando Norris com a McLaren.</p>
                
                </div>

            </div>
    </>
}