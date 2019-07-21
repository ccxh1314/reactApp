import React from 'react';
// import styles from '../assets/css/footer.module.css';
import '../assets/css/footer.css';

import {NavLink} from 'react-router-dom';

class Footer extends React.Component{
    // componentWillUpdate(){
    //     var arr = document.querySelectorAll(".aui-footer-item")
    //     // console.log(arr)
    //     for(var i=0;i<arr.length;i++){
    //         arr[i].index = i;
    //         arr[i].onclick = function(){
    //                 console.log(this.index)
    //                 for(var j=0;j<arr.length;j++){
    //                         arr[j].className = 'aui-footer-item'
    //                 }
    //                 this.className = "aui-footer-item current"
    //         }
    //     }
    // }
    
    render(){
        return(
            <footer className="aui-footer-bar aui-footer-fixed">
             {/* <footer className={styles.aui-footer-bar} > */}
                <NavLink to="/home" className="aui-footer-item current">
                    
                    <span className="aui-footer-item-icon">
                        <i className="aui-icon aui-icon-news"></i>
                    </span>
                    <span className="aui-footer-item-text">要闻</span>
                </NavLink>

                <a href="/video" className="aui-footer-item">
                    <span className="aui-footer-item-icon">
                        <i className="aui-icon aui-icon-video"></i>
                    </span>
                    <span className="aui-footer-item-text">视频</span>
                </a>

                <NavLink to="/hot" className="aui-footer-item">
                    <span className="aui-footer-item-icon">
                        <i className="aui-icon aui-icon-hot"></i>
                    </span>
                    <span className="aui-footer-item-text">推荐</span>
                </NavLink>
                
                <NavLink to="/user" className="aui-footer-item">
                    <span className="aui-footer-item-icon">
                        <i className="aui-icon aui-icon-my"></i>
                    </span>
                    <span className="aui-footer-item-text">我的</span>
                </NavLink>
        </footer>
        )
    }
}

export default Footer;