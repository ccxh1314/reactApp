import React from 'react';
import '../assets/css/header.css'

class Header extends React.Component{
    render(){
        return(
            <header className="aui-navBar">
                <a href="javascript:;" className="aui-navBar-item">
                    <i className="aui-icon aui-icon-back"></i>
                </a>
                <div className="aui-navBar-center">
                    <span className="aui-navBar-title aui-navBar-logo"></span>
                </div>
                <a href="javascript:;" className="aui-navBar-item">
                    <i className="aui-icon aui-icon-user"></i>
                </a>
		</header>
        )
    }
}
export default Header;
