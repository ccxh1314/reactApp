import React from 'react';
import ReactSwipe from 'react-swipe'
import '../assets/css/swipe.css';

import banner1 from '../assets/img/banner/banner1.jpg';
import banner2 from '../assets/img/banner/banner2.jpg';
import banner3 from '../assets/img/banner/banner3.jpg';
import banner4 from '../assets/img/banner/banner4.jpg';

class Swiper extends React.Component{
    render(){
            return(
                <div className="m-slider" data-ydui-slider>
                    {/* <div className="slider-wrapper"> */}
                    <ReactSwipe
                            className="carousel"
                            swipeOptions={{ 
                                auto:5000,
                                speed:800
                             }}
                        >
                        <div className="slider-item">
                            <a href="pages.html">
                                <p className="aui-slider-text">影片《复仇者联盟3：无限战争》主创在沪亮相</p>
                                <img src={banner1}/>
                            </a>
                        </div>
                        <div className="slider-item">
                            <a href="pages.html">
                                <p className="aui-slider-text">拉加德呼吁消除所有贸易保护主义措施</p>
                                <img src={banner2}/>
                            </a>
                        </div>
                        <div className="slider-item">
                            <a href="#">
                                <p className="aui-slider-text">海上港结束亚冠小组赛征程抵沪受到热情接机</p>
                                <img src={banner3}/>
                            </a>
                        </div>
                        <div className="slider-item">
                            <a href="#">
                                <p className="aui-slider-text">佟丽娅与男粉丝合影超亲切 比剪刀手嘟嘴卖萌</p>
                                <img src={banner4}/>
                            </a>
                        </div>
                        </ReactSwipe>       
                    {/* </div> */}
                    <div className="slider-pagination">
                        <span className="slider-pagination-item slider-pagination-item-active"></span>
                        <span className="slider-pagination-item "></span>
                        <span className="slider-pagination-item "></span>
                        <span className="slider-pagination-item "></span>
                    </div>
            </div>
            )
        }
}

export default Swiper;