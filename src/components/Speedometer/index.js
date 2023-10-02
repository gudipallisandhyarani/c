// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
    state = {
        speed:0,
    }



Accelerate = () => {
    const {speed} =this.state
if (speed < 200) {
    this.setState(prevState => ({speed: prevState.speed + 10}))

 }   
}

Brake = () => {
    const {speed} = this.state
    if (speed > 0) {
        this.setState(prevState =>({speed: prevState.speed- 10}))
    }
 }
render(){
        const {speed}= this.state

        return (
            <div className ="container">
            <h1 className="heading">SPEEDOMETER</h1>
            <img className="image"
            src ="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" 
            alt ="speedometer" />
            <h2 className = "heading2">Speed is {speed}mph</h2>
            <p className = "para">Min Limit Is 0mph, Max Limit Is 200mph</p>
            <div className = "buttons-container">
            
            <button type = "button" 
            className="A-button" 
            onClick ={this.Accelerate}>Accelerate</button>
           
            <button  type = "button" 
            className ="B-button" 
            onClick ={this.Brake}>Apply Brake</button>
            </div>
</div>
        )

    }
}
export default Speedometer