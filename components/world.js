import Card from "./card";
import React from "react";
import moment from "moment";

const World = ({data}) => {
    return (
        <Card>
            <div className="world">
                <div className="title">Coronavirus</div>
                <div className="highlight">{data.cases}</div>
                <div className="bottom">
                    <div>
                        <div className="label">死亡</div>
                        <div className="item">{data.deaths}</div>
                    </div>

                    <div>
                        <div className="label">康復</div>
                        <div className="item">{data.recovered}</div>
                    </div>
                    <div className="time">
                        {moment(data.updated)
                            .locale("zh-TW")
                            .fromNow()}
                        更新
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

export default World;