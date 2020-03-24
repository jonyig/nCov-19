import Card from "./card";
import React from "react";
import moment from "moment";


const News = ({data}) => {


    return (
        <Card>
            <div className="news">
                <div className="header">
                    News
                </div>
                {data.articles.map(item => {
                    return (
                        <div className="item" key={item.url}>
                            <div className="img">
                                <img src={item.urlToImage} alt=""/>
                            </div>
                            <div className="content">
                                <div className="title">
                                    {item.title}
                                </div>
                                <div className="description">
                                    {item.description}
                                </div>
                                <div className="footer">
                                    <a href={item.url} target="_blank">Click Me</a>
                                    <div className="time">
                                        {moment(item.publishedAt).format("YYYY-MM-DD HH:mm:ss")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <style jsx>{`
             .header{
                padding-left: 4px;
                font-size: 24px;
                color: #a0a0a0;
                margin-bottom: 15px;
             }
             .item {
                display: flex;
             }
             .title {
                font-size: 20px;
                margin-bottom: 8px;
             }
             .description {
                color: #585858;
             }
             .content {
                padding: 0 4px;
                align-items: center;
                border-bottom: 1px solid #f5f5f5;
                flex: 1;
                margin: 10px;
             }
             .img {
                margin-top: 10px;
             }
             .img img {
                border-radius: 10px;
                width: 120px;
                height: 80px;
                object-fit: cover;
             }
             .footer {
                display: flex;
                align-items: center;
             }
             .footer > a {
                color :orange;
                text-decoration :none;
             }
             .time {
                color: #585858;
                margin-left: auto;
             }
             @media (max-width: 500px) {
                .item {
                    flex-direction:column;
                }
                .img img {
                    width:100%;
                    height:200px;
                }
                .content {
                    margin-left:0px;
                } 
                .footer {
                    margin-top:10px;
                }          
             }
            `}</style>
        </Card>

    );
};


export default News;