import React,{Component} from 'react';
import Cell4 from '../components/cell/Cell4'
import axios from '../utils/axios'
// import '../components/cell/assets/css/cell.css'

class List extends Component{
    // state = {
    //     list:[]
    // }
    // componentDidMount(){
    //     // console.log(axios)
    //     axios({
    //         url:"/api/home",
    //         params:{_page:1,_limit:4}
    //     }).then(
    //         res =>  
    //         this.setState({list:res.data.data})
    //         //  console.log(res.data)
    //     )

    // }


    render(){
        // let {list} = this.state
        return(
            <div className="aui-news-box">
                <article className="aui-news-list">
                    <Cell4/>
                {/* {  list.map((item)=>{
                                        return (
                                            <Cell 
                                                key={item._id}
                                                data={item}
                                                dataName = "home"
                                            />
                                        )
                                })
                            } */}
                </article>
             
            </div>
        )
    }
}

export default List;
