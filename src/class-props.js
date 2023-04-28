import React from "react"

export default class MsgBox2 extends React.Component{
    render(){
    const divStyle={
        argin: '10px',
        padding: '5px',
        color: this.props.color,
        backgroundColor: this.props.bgColor,
        fontSize: this.props.fontSize,
        border: this.props.borderact
    }
    return (
        <div style={divStyle}>{this.props.text}</div>
    )
    }
    }