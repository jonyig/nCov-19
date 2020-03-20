import React from "react";
import Card from "./card";


const Rank = ({data}) => {
    return (
        <Card>
            <div className="rank">
                <div className="header">
                    <div className="title">Top10</div>
                    <div className="col">
                        <div className="label">確診</div>
                        <div className="label">死亡</div>
                        <div className="label">康復</div>
                    </div>
                </div>
                <div className="content">
                    {
                        data.slice(0, 10).map((item, index) =>
                            <div className="country">
                                <div>{index + 1}. {item.country}</div>
                                <div className="stats">
                                    <div className="num">
                                        <span>{item.cases}</span>
                                        <div className="daily">
                                            <div className="today">+{item.todayCases}</div>
                                        </div>
                                    </div>
                                    <div className="num">
                                        <span>{item.deaths}</span>
                                        <div className="daily">
                                            <div className="today">+{item.todayDeaths}</div>
                                        </div>
                                    </div>
                                    <div className="num">
                                        <span>{item.recovered}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>


            <style jsx>{`
                .header {
                    display:flex;
                    align-items: center;
                    font-size: 24px;
                    color: #a0a0a0;
                    margin-bottom: 5px;
                }
                .rank{
                    display:flex;
                    flex-direction:column;
                    height: 615px;
                }
                .col{
                    display: flex;
                    margin-left: auto;
                    text-align: right;
                    margin-right: 5px;
                }
                .label {
                    width: 60px;
                    margin-left: 20px;
                    color: #5f5f5f;
                    font-size: 16px;
                    font-weight: 500;
                }
                .content {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }
                .country {
                    display: flex;
                    padding: 0 4px;
                    align-items: center;
                    border-bottom: 1px solid #f5f5f5;
                    flex: 1;
                }
                .country:last-child {
                    border-bottom: none;
                }
                .stats {
                    display: flex;
                    margin-left: auto;
                    text-align: right;
                    margin-right: 5px;
                }
                .stats .num {
                    width: 60px;
                    margin-left: 20px;
                    font-size: 16px;
                    line-height: 18px;
                }
                .today {
                    font-size:10px;
                    color: red;
                    font-weight:500;                
                }
            `}</style>
        </Card>


    );
};

export default Rank;