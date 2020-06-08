import React from 'react'
import "./text.less"
import "./text.css"
import buyImg from "@/assets/1.png"
import testImg from "@/assets/1.png"
export default class Home extends React.Component {
    render(){
        return (
            <div className="test test2">
                <p>hello world</p>
                <img src={buyImg} alt="" />
                <img src={testImg} alt="" style={{width:360,height:60}}/>
            </div>
        )
    }
}
