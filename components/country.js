import Card from "./card";
import React from "react";

const Country = ({data}) => {
    return (
        <Card>
            <div className="country">
                <div className="title">{data.country}</div>
                <div className="highlight-wrap">
                    <div className="highlight">{data.cases}</div>
                    <div className="today"> +{data.todayCases} (今日)</div>
                </div>

                <div className="bottom">
                    <div>
                        <div className="label">死亡</div>
                        <div className="item">{data.deaths}</div>
                    </div>

                    <div>
                        <div className="label">康復</div>
                        <div className="item">{data.recovered}</div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .title {
                    font-size:24px;
                    color: #a0a0a0;
                }
                .highlight{
                    font-size:60px;
                    font-weight: 400;
                    line-height: 60px;
                }
                .highlight-wrap{
                    display: flex;
                    align-items: center;
                    font-size: 16px;
                    flex-wrap: wrap;
                }
                .today{
                    margin-left:10px;
                    color: red;
                }
                .bottom{
                    display: flex;
                    margin-top:28px;
                }
                .bottom > * {
                    margin-right:30px;
                }
              
            
            `}</style>
        </Card>


    );
};

export default Country;