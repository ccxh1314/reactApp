import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from '../layouts/Home.js';

import {Switch,Route,Redirect} from 'react-router-dom';
import User from '../layouts/User';
import Hot from '../layouts/Hot';
import ErrorPage from "../layouts/ErrorPage";
import Loading from '../components/loading/Loading'
import Video from '../layouts/Video';
import Reg from '../layouts/Reg';
import Login from '../layouts/Login';

import '../assets/css/base.css';
import '../assets/css/icon.css';
import '../assets/css/app.css'; 

import PubSub from 'pubsub-js';

class App extends React.Component{
    
    state = {
        bHead:true,
        bFoot:true,
        bLoad:false
    };

    token = null;
    constructor(){
      super();

      this.token = PubSub.subscribe('VIEW_LOADING',(evname,payload)=>{
            console.log('app',evname,payload)
            this.setState({bLoad:payload})
      })

    }


    checkPath(path){
        if (/home/.test(path)){
          this.setState({bHead:true,bFoot:true})
        }
        if (/login|reg|detail/.test(path)){
          this.setState({bHead:false,bFoot:false})
        }
        if (/user|hot|video/.test(path)){
          this.setState({bHead:false,bFoot:true})
        }
      }
    
      componentWillReceiveProps(nextProps){
        console.log('app',nextProps.location.pathname);//监听路由
        let path  = nextProps.location.pathname;
        this.checkPath(path)
      }
      componentDidMount(){
        let path  = this.props.location.pathname;
        this.checkPath(path)
      }


    render(){
        return(
            <div className="App aui-flexView ">
                  {this.state.bLoad && <Loading/>}
                 {this.state.bHead && <Header/>}
                
                <Switch>
                    {/* <Home /> */}
                    <Route path="/home" component={Home} />
                    <Route path="/user" component={User} />
                    <Route path="/video" component={Video} />
                    <Route path="/hot" component={Hot} />
                    <Route path="/reg" component={Reg} />
                    <Route path="/login" component={Login} />
                    <Redirect exact from="/" to="/home" />
                    <Route component={ErrorPage}/>

                </Switch>
                {this.state.bFoot ? <Footer/> : null}
            </div>
          
        ) 
    }
} 
export default App;      