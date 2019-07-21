import React from 'react';
import '../assets/css/nav.css'
class Nav extends React.Component{
    render(){
        return(
            <div className="aui-nav-top">
                <div className="aui-nav-scroll">
                    <div className="aui-nav-main">
                        <div className="aui-nav-track">
                            <a href="javascript:;" className="aui-nav-list current">要闻</a>
                            <a href="javascript:;" className="aui-nav-list">视频</a>
                            <a href="javascript:;" className="aui-nav-list">热点</a>
                            <a href="javascript:;" className="aui-nav-list">社会</a>
                            <a href="javascript:;" className="aui-nav-list">娱乐</a>
                            <a href="javascript:;" className="aui-nav-list">军事</a>
                            <a href="javascript:;" className="aui-nav-list">科技</a>
                            <a href="javascript:;" className="aui-nav-list">汽车</a>
                            <a href="javascript:;" className="aui-nav-list">体育</a>
                            <a href="javascript:;" className="aui-nav-list">财经</a>
                            <a href="javascript:;" className="aui-nav-list">国际</a>
                            <a href="javascript:;" className="aui-nav-list">时尚</a>
                            <a href="javascript:;" className="aui-nav-list">时尚</a>
                            <a href="javascript:;" className="aui-nav-list">房产</a>
                            <a href="javascript:;" className="aui-nav-list">历史</a>
                            <a href="javascript:;" className="aui-nav-list">酷站</a>
                        </div>
                    </div>
                    <div className="aui-nav-more">
                        <a href="channel.html" className="aui-icon aui-icon-add"></a>
                    </div>
                </div>
        </div>
        )
    }
}
export default Nav;