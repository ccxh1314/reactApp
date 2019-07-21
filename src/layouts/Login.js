import React from 'react';
import '../assets/css/login.css';
import {Link} from 'react-router-dom';
// console.log(axios)

class Login extends React.Component{
    state = {
        username:'',
        password:'',
        mess:''
    }
    login = ()=>{
        axios({
            url:'api/login',
            method:'post',
            data:{username:this.state.username,password:this.state.password}
        }).then((res)=>{
            // console.log(res.data)
            if(res.data.err == 0){
                this.setState({mess:'登录成功'})

                setTimeout(()=>{
                    this.props.history.push('/')
                },2000)
            }else{
                this.setState({mess:'登录失败,请重新登录'})

            }
        })
    }

    render(){
        return(
            <div className="reg">
                        
                <header className="head"><a className="goback" href="javascript:history.go(-1)"></a>登录</header>
                    <div className="logo"></div>
                    <form action="">
                        <ul className="form">
                            <li><input type="text" placeholder="请输入账号" value={this.state.username} onChange={(ev)=>this.setState({username:ev.target.value})}/></li>
                            <li><input type="password" placeholder="请输入密码" value={this.state.password} onChange={(ev)=>this.setState({password:ev.target.value})}/></li>
                            <li><input type="button" value="登&nbsp;&nbsp;&nbsp;&nbsp;录" onClick={this.login}/></li>
                            <li>{this.state.mess}</li>
                        </ul>
                    </form>
                    <ul className="fix miss">
                        <li className="l"><a href="javascript:;">忘记密码？</a></li>
                        <li className="r"><Link to="reg">账号注册</Link></li>
                    </ul>
                    
            </div>
        )
    }
}

export default Login;