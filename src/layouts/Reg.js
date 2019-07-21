import React from 'react';
import '../assets/css/reg.css';
import {Link} from 'react-router-dom';
import axios from '../utils/axios';
// console.log(axios)

class Reg extends React.Component{
    state={
        username:"",
        password:"",
        mess:""

    };
    reg = ()=>{
        // console.log(this.state.username,this.state.passname)
        axios({
            url:'/api/reg',
            method:'post',
            data:{username:this.state.username,password:this.state.password}
        }).then(
            res => {
                // console.log(res.data)
                if(res.data.err == 0){
                    this.setState({mess:'注册成功，即将跳转到登录'})

                    setTimeout(()=>{
                        this.props.history.push('/login')
                    },2000)
                    
                }else{
                    this.setState({mess:'注册失败'})
                }
            }
        )
    }

    render(){
        return(
            <div className="reg">
                        
                <header className="head"><a className="goback" href="javascript:history.go(-1)"></a>注册</header>
                    <div className="logo"></div>
                    <form action="">
                        <ul className="form">
                            <li><input type="text" placeholder="请输入用户名" value={this.state.value} onChange={(ev)=>this.setState({username:ev.target.value})}/></li>
                            <li><input type="password" placeholder="请输入密码" value={this.state.password} onChange={(ev)=>this.setState({password:ev.target.value})}/></li>
                            <li><input type="button" value="注&nbsp;&nbsp;&nbsp;&nbsp;册" onClick={this.reg}/></li>
                            <li className="mess">{this.state.mess}</li>
                        </ul>
                    </form>
                    <ul className="fix miss">
                        <li className="r"><Link to="/login">已有账号,立即登录</Link></li>
                    </ul>
                    
            </div>
        )
    }
}

export default Reg;