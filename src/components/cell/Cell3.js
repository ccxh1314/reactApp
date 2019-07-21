import React,{Component} from 'react';
import './assets/css/cell3.css'
// import {Link} from 'react-router-dom'
import ad4jpg from './assets/img/ad/ad-4.jpg' 


export default class Cell3 extends Component{
  render(){
    // let {data,dataName}=this.props;
    return (
        <a href="javascript:;" className="aui-news-item aui-news-list-one">
          <div className="aui-news-item-img">
                <img src={ad4jpg} alt=""/>
                <i className="aui-play-btn"></i>
        </div>
        <div className="aui-news-item-text">
            <h2 className="aui-news-item-text-title">王思聪关注的最小网红，还是抖音第一小女神，才9岁就合作TFBOYS</h2>
            <div className="aui-news-item-text-info">
                <span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-comment"></i>2390</span>
                <span className="aui-news-item-text-info-text">潮流老湿</span>
            </div>
        </div>
    </a>
    )
  }
}
