import React from 'react';
import '../assets/css/user.css'
import headjpg from '../assets/img/user/head.jpg';
import {Link} from 'react-router-dom';

class User extends React.Component{
    render(){
        return(
            
    // <section className="aui-flexView">
    <>
        <section className="aui-scrollView">
            <div className="aui-content">

                <div className="aui-user-header">
                    <div className="aui-user-content">
                        <div className="aui-user-fex">
                            <div className="aui-user-fex-head">
                                <div className="aui-user-fex-photo">
                                    <img src={headjpg} alt=""/>
                                </div>
                                <div className="aui-user-fex-title">
                                    <h2>C壹壹C同学</h2>
                                    <span>
                                        <em><i className="aui-icon aui-icon-sign"></i>北京</em>
                                        <em>天蝎座</em>
                                    </span>
                                </div>
                            </div>
                            <div className="aui-user-fex-info">
                                <a href="#"> <i className="aui-icon aui-icon-coin"></i> 签到领金币</a>
                            </div>
                        </div>
                        <div className="aui-user-prompt">
                            <p>您今天已阅读时长4小时</p>
                        </div>
                        <div className="aui-user-list">
                            <a href="comment.html">
                                <span className="aui-user-list-digit">523</span>
                                <span className="aui-user-list-text">发表</span>
                            </a>
                            <a href="follow.html">
                                <span className="aui-user-list-digit">1240</span>
                                <span className="aui-user-list-text">关注</span>
                            </a>
                            <a href="fans.html">
                                <span className="aui-user-list-digit">3423</span>
                                <span className="aui-user-list-text">粉丝</span>
                            </a>
                            <a href="sign.html">
                                <span className="aui-user-list-digit">23</span>
                                <span className="aui-user-list-text">金币</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="aui-user-list-item">
                    <a href="information.html" className="aui-user-list-cell">
                        <div className="aui-user-list-cell-left">
                            <i className="aui-icon aui-icon-dope"></i>
                            消息
                        </div>
                        <div className="aui-user-list-cell-right">
                            最新消息
                        </div>
                    </a>
                    <a href="history.html" className="aui-user-list-cell">
                        <div className="aui-user-list-cell-left">
                            <i className="aui-icon aui-icon-lss"></i>
                            历史/收藏
                        </div>
                        <div className="aui-user-list-cell-right">

                        </div>
                    </a>
                    <div className="divR"></div>
                    <a href="sign.html" className="aui-user-list-cell">
                        <div className="aui-user-list-cell-left">
                            <i className="aui-icon aui-icon-jbb"></i>
                            金币
                        </div>
                        <div className="aui-user-list-cell-right">
                            查看金币
                        </div>
                    </a>
                    <a href="free.html" className="aui-user-list-cell">
                        <div className="aui-user-list-cell-left">
                            <i className="aui-icon aui-icon-llw"></i>
                            免流量看新闻
                        </div>
                        <div className="aui-user-list-cell-right">

                        </div>
                    </a>
                    <a href="https://shop108012643.m.taobao.com/" className="aui-user-list-cell">
                        <div className="aui-user-list-cell-left">
                            <i className="aui-icon aui-icon-scc"></i>
                            商城
                        </div>
                        <div className="aui-user-list-cell-right">

                        </div>
                    </a>
                    <div className="divR"></div>
                    <a href="time.html" className="aui-user-list-cell">
                        <div className="aui-user-list-cell-left">
                            <i className="aui-icon aui-icon-ydd"></i>
                            阅读时长
                        </div>
                        <div className="aui-user-list-cell-right">

                        </div>
                    </a>
                    <a href="feedback.html" className="aui-user-list-cell">
                        <div className="aui-user-list-cell-left">
                            <i className="aui-icon aui-icon-yjj"></i>
                            意见反馈
                        </div>
                        <div className="aui-user-list-cell-right">

                        </div>
                    </a>
                    <Link to='/login' className="aui-user-list-cell">
                        <div className="aui-user-list-cell-left">
                            <i className="aui-icon aui-icon-szz"></i>
                            退出当前账号
                            
                        </div>
                        <div className="aui-user-list-cell-right">

                        </div>
                    </Link>
                </div>

            </div>
        </section>
    </>
// </section>
        )
    }
}

export default User;