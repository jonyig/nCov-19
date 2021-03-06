import fetch from "isomorphic-unfetch";
import React from "react";
import World from "../components/world";
import Country from "../components/country";
import Rank from "../components/rank";
import News from "../components/news";
import Head from "next/head";

require('now-env');

const Index = ({dataAll, dataTaiwan, dataChina, dataSort, dataNews}) => {

    const GA_KEY = process.env.GA_KEY;

    return (
        <>
            <Head>

                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <title>Covid-19 新冠肺炎</title>
                <meta name="title" content="Covid-19 新冠肺炎"/>
                <link rel="shortcut icon"
                      href="https://jonny-test.s3-ap-northeast-1.amazonaws.com/favicon-2020032502481465.ico"/>

                <meta
                    name="description"
                    content="Coronavirus - 新冠肺炎相關訊息，包含了台灣、世界確診數據以及相關新聞"
                />

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://covid19tw.tk/"/>
                <meta property="og:title" content="Covid-19 新冠肺炎快訊"/>
                <meta
                    property="og:description"
                    content="Coronavirus - 新冠肺炎相關訊息，包含了台灣、世界確診數據以及相關新聞|武漢肺炎"
                />
                <meta
                    property="og:image"
                    content="https://jonny-test.s3-ap-northeast-1.amazonaws.com/w1240-p16x9-php1LTNyP.jpg"
                />

                {GA_KEY && (
                    <>
                        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_KEY}`}/>

                        <script dangerouslySetInnerHTML={{
                            __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_KEY}');`,
                        }}>
                        </script>
                    </>
                )}
            </Head>
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
                    <div className="footer">
                        © 2020 Powered by
                        <img src="https://jonny-test.s3-ap-northeast-1.amazonaws.com/favicon-2020032502481465.ico"
                             alt=""/>
                        &nbsp;
                        <a href="https://blog.jonnykuo.now.sh/"><b>Jonny</b></a>
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
                .footer {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    padding: 20px 10px;
                }
                .footer > a {
                    color :orange;
                    text-decoration :none;
                } 
                

                `}</style>

            </div>
        </>
    );
};

Index.getInitialProps = async function () {
    const all = await fetch("https://corona.lmao.ninja/v2/all/");
    const dataAll = await all.json();

    const country = await fetch("https://corona.lmao.ninja/v2/countries");
    const dataCountry = await country.json();


    const dataTaiwan = dataCountry.find(c => c.country === "Taiwan");
    const dataChina = dataCountry.find(c => c.country === "China");

    const sort = await fetch("https://corona.lmao.ninja/v2/countries?sort=cases");
    const dataSort = await sort.json();

    const NEWS_API_KEY = process.env.NEWS_API_KEY;
    const news = await fetch(`http://newsapi.org/v2/top-headlines?q=%E7%96%AB%E6%83%85&country=tw&apiKey=${NEWS_API_KEY}`);
    const dataNews = await news.json();

    return {dataAll, dataTaiwan, dataChina, dataSort, dataNews};
};
export default Index;