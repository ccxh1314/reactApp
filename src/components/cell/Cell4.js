import React from 'react';
import './assets/css/cell4.css';

// import ad1jpg from './assets/img/ad/ad1.jpg'


class Cell4 extends React.Component {

    render() {
        let {data,dataName} = this.props;
        // console.log(data)
        return (
        <div className="aui-label-box">
            <div className="aui-label-content">
                <ul>
                    <li>
                        <a href="special.html">独家</a>
                    </li>
                    <li>
                        <a href="special.html">宠物</a>
                    </li>
                    <li>
                        <a href="special.html">娱乐</a>
                    </li>
                    <li>
                        <a href="special.html">画家</a>
                    </li>
                    <li>
                        <a href="special.html">时尚</a>
                    </li>
                    <li>
                        <a href="special.html">文学</a>
                    </li>
                    <li>
                        <a href="special.html">汽车</a>
                    </li>
                    <li>
                        <a href="special.html">历史</a>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default Cell4;