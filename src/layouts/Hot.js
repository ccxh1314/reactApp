import React from 'react';
import '../assets/css/hot.css'
import List from '../pages/List'
import List2 from '../pages/List2'
import List3 from '../pages/List3'
import List4 from '../pages/List4'



class Hot extends React.Component{
    render(){
        return(
            <div className="aui-flexView">
                <header className="aui-navBar">
                    <a href="javascript:;" className="aui-navBar-item">
                        <i className="aui-icon aui-icon-back"></i>
                    </a>
                    <div className="aui-navBar-center">
                        <span className="aui-navBar-title">推荐</span>
                    </div>
                    <a href="javascript:;" className="aui-navBar-item">
                        <i className="aui-icon aui-icon-user"></i>
                    </a>
                </header>

                <section className="aui-scrollView">
                    <div className="aui-content">
                        <div className="aui-load">
                            <p>为你精选10条推荐</p>
                        </div>
                        <List/> 
                        <List2/>
                        <List3/>
                        <div className="divR"></div>
                        <List4/>
                        <div className="divR"></div>

                    </div>
                </section> 
                

            </div>

        )
    }
}

export default Hot;