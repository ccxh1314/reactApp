import React from 'react';
// import ReactSwipe from 'react-swipe';
import ad1jpg from '../assets/img/ad/ad-1.jpg';
import ad2jpg from '../assets/img/ad/ad-2.jpg';
import ad3jpg from '../assets/img/ad/ad-3.jpg';
import ad4jpg from '../assets/img/ad/ad-4.jpg';

import '../assets/css/more.css'


class More extends React.Component{
 render(){
    return(
        <div className="aui-picture">
            <div className="aui-cell-flex">
                <a href="javascript:;" className="aui-cell-flex-item">
                    <div className="aui-cell-text-fl">独家精选</div>
                    <div className="aui-cell-text-fr aui-cell-arrow">查看更多</div>
                </a>
            </div>
            <div className="aui-picture-box">
                <div className="aui-slide-box aui-slide-box-clear">
                    <div className="aui-slide-list">
                        <ul className="aui-slide-item-list">
                        {/* <ReactSwipe
                                className="carousel"
                                swipeOptions={{ 
                                    auto:5000,
                                    speed:800
                                }}
                            > */}

                            <li className="aui-slide-item-item">
                                <a href="#" className="v-link">
                                    <img className="v-img" src={ad1jpg}/>
                                </a>
                                <p>鹿晗28岁生日，跑男团凌晨集体送祝福 鹿晗今年这事可能会实现</p>
                            </li>
                            <li className="aui-slide-item-item">
                                <a href="#" className="v-link">
                                    <img className="v-img" src={ad2jpg}/>
                                </a>
                                <p>短史记 “八百冷娃投黄河”的故事，并非凭空捏造</p>
                            </li>
                            <li className="aui-slide-item-item">
                                <a href="#" className="v-link">
                                    <img className="v-img" src={ad3jpg}/>
                                </a>
                                <p>还是抖音第一小女神，才9岁就合作TFBOYS</p>
                            </li>
                            <li className="aui-slide-item-item">
                                <a href="#" className="v-link">
                                    <img className="v-img" src={ad4jpg}/>
                                </a>
                                <p>2017国际超模大赛中国区总决赛三亚落幕</p>
                            </li>
                            {/* </ReactSwipe>     */}
                    
                        </ul>
                    </div>
                </div>
        </div>
    </div>
        )
    }
}

export default More;