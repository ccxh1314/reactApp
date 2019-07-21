import React from 'react';
import Nav from './Nav';
import Swiper from './Swipe'
import List from '../pages/List'
import '../assets/css/home.css';

import More from './More'
class Home extends React.Component{
    render(){
        return(
          
                <div className="aui-scrollView">
                   <div className="aui-content">
                        <Nav/>
                        <Swiper/>
                        <List/>
                        <More/>
                    </div>
                </div>
           
        )
    }
}
export default Home; 