import React, { Component } from "react";

class InstructionsComponent extends Component {
    // this really doesn't need to be a class component
    render() {
        return (
            <>
                <h3>Instructions:</h3> 
                <p>Click 'start' and then play</p>

              <button onClick={this.props.onClick}>Close Instructions</button>
            </>
            
        );
    }
}
  
  export default InstructionsComponent;