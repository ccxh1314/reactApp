import React,{Component} from 'react';
import Cell2 from '../components/cell/Cell2'
import axios from '../utils/axios'
// import '../components/cell/assets/css/cell.css'

class List2 extends Component{
    state = {
        list:[]
    }
    componentDidMount(){
        // console.log(axios)
        axios({
            url:"/api/follow",
            params:{_page:1,_limit:2}
        }).then(
            res =>  
            this.setState({list:res.data.data})
            //  console.log(res.data)
        )

    }


    render(){
        let {list} = this.state
        return(
            <div className="aui-news-box">
                <article className="aui-news-list">
                {  list.map((item)=>{
                                        return (
                                            <Cell2
                                                key={item._id}
                                                data={item}
                                                dataName = "hot"
                                            />
                                        )
                                })
                            }
                </article>
             
            </div>
        )
    }
}

export default List2;
