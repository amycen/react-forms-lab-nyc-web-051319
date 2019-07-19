import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }
<<<<<<< HEAD

  updateMsg = (e) => {
=======
  
  updatedMsg = (e) => {
>>>>>>> 2109c0be24c6111c9e0ff0f335f852e478e9c131
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
<<<<<<< HEAD
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.updateMsg}/>
        <p>Remaining Characters: {this.props.maxChars - this.state.message.length}</p>
=======
        <input type="text" name="message" id="message" value={this.state.message onChange={this.updatedMsg} />
        <p>{this.props.maxChar - this.state.message.length}</p>
>>>>>>> 2109c0be24c6111c9e0ff0f335f852e478e9c131
      </div>
    );
  }
}

export default TwitterMessage;
