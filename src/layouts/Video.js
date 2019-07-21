import React from 'react';
import Nav from './Nav';
import List3 from '../pages/List3';
import List4 from '../pages/List4';
import '../assets/css/video.css'

class Video extends React.Component{
    render(){
        return(
            <div className="video" >
               <Nav/>
               <List3/>
               <List3/>
               <List3/>
               <List4/>
            </div>
        )
    }
}

export default Video;