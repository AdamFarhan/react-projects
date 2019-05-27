import React from 'react';

class Validation extends React.Component{
  render(){
    let validString = null;
    if(this.props.inputString.length >= 5){
      validString = (
        <div>
          <p>Text is good</p>
        </div>
      )
    }else{
      validString = (
        <div>
          <p>Text is too short</p>
        </div>
      )
    }

    return(
      <div className="Validation">
        {validString}
      </div>
    )
  }
}

export default Validation;