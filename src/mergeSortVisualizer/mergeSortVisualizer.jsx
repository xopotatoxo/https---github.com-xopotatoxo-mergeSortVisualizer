import React from "react";
import './App.css';

export class mergeSortVisualizer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            array: [],
        };
    }

componentMount(){
    this.resetArray();
}

resetArray(){
    const array = [];
    for (let i = 0; i < 100; i++){
        array.push(randomIntFromInterval(5, 100));
    }
    this.setState({array});
}

render(){
    const{array}=this.state;

    return(
        <>
        {array.map((value,idx)=>(
            <div className="array-bar" key={idx}>
                {value}
            </div>
        ))}
        </>
        );
    }
}