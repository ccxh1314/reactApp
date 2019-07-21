import React,{Component} from 'react';
import './assets/css/cell2.css'
// import {Link} from 'react-router-dom'
// import ad4jpg from './assets/img/ad/ad4.jpg'
// import ad2jpg from './assets/img/ad/ad2.jpg'
// import ad3jpg from './assets/img/ad/ad3.jpg'


export default class Cell2 extends Component{
  render(){
    let {data,dataName}=this.props;
    return (
        <a href="javascript:;" className="aui-news-item aui-news-list-two">
        <div className="clearfix">
            <div className="aui-news-item-img">
                <img src={'http://localhost:3000'+ data.img1} alt=""/>
            </div>
            <div className="aui-news-item-img">
                <img src={'http://localhost:3000'+ data.img3} alt=""/>
            </div>
            <div className="aui-news-item-img">
                <img src={'http://localhost:3000'+ data.img2} alt=""/>
            </div>
        </div>
        <div className="aui-news-item-text">
            <h2 className="aui-news-item-text-title">{data.content}</h2>
            <div className="aui-news-item-text-info">
                <span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-comment"></i>{data.num}</span>
                <span className="aui-news-item-text-info-text">{data.name}</span>
            </div>
        </div>
    </a>
    )
  }
}
