import fetch from "isomorphic-unfetch";
import React from "react";
import World from "../components/world";
import Country from "../components/country";
import Rank from "../components/rank";
import News from "../components/news";

require('now-env');

const Index = ({dataAll, dataTaiwan, dataChina, dataSort, dataNews}) => {
    return (
        <div className="app">
            <div className="container">
                <h1 className="header">NCOV-19</h1>
                <div className="stats">
                    <div className="left">
                        <div>
                            <World data={dataAll}/>
                        </div>
                        <div>
                            <Country data={dataTaiwan}/>
                        </div>
                        <div>
                            <Country data={dataChina}/>
                        </div>
                    </div>
                    <div className="right">
                        <Rank data={dataSort}/>
                    </div>


                </div>
                <div className="bottom">
                    <News data={dataNews}/>
                </div>
            </div>
            <style jsx global>{`
                body{
                    background: #fcfcfc;

                }
                `}</style>
            <style jsx>{`
                .app{
                    max-width: 1000px;
                    margin:auto;
                }
                .container {
                    margin: 0 20px;
                }
                .header {
                    font-size: 32px;
                    font-weight: 400;
                }
                .stats {
                    display: flex;
                }
                .left {
                    flex: 0 0 350px;
                }
                .left > * {
                    margin-right: 20px;
                    margin-bottom: 20px;
                }
                .right {
                    flex: 1;
                }
                @media (max-width: 820px) {
                    .stats {
                        flex-direction: column;
                    }
                    .left > * {
                        margin-right: 0;
                    }
                }
                

                `}</style>

        </div>
    );
};


Index.getInitialProps = async function () {
    const all = await fetch("https://corona.lmao.ninja/all/");
    const dataAll = await all.json();

    const country = await fetch("https://corona.lmao.ninja/countries");
    const dataCountry = await country.json();

    const dataTaiwan = dataCountry.find(c => c.country === "Taiwan");
    const dataChina = dataCountry.find(c => c.country === "China");

    const sort = await fetch("https://corona.lmao.ninja/countries?sort=cases");
    const dataSort = await sort.json();

    const NEWS_API_KEY = process.env.NEWS_API_KEY;
    const news = await fetch(`http://newsapi.org/v2/top-headlines?q=%E7%96%AB%E6%83%85&country=tw&apiKey=${NEWS_API_KEY}`);
    const dataNews = await news.json();

    return {dataAll, dataTaiwan, dataChina, dataSort, dataNews};
};
export default Index;