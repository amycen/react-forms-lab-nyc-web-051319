import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
<<<<<<< HEAD
      username: '',
      password: ''
    };
  }

  updateUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  updatePwd = (e) => {
=======
      username: ''
      password: ''
    };
  }
  
  changeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  changePwd = (e) => {
>>>>>>> 2109c0be24c6111c9e0ff0f335f852e478e9c131
    this.setState({
      password: e.target.value
    })
  }
<<<<<<< HEAD

  submitForm = (e) => {
    e.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state)
    }
  }
 
=======
>>>>>>> 2109c0be24c6111c9e0ff0f335f852e478e9c131
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>
            Username
<<<<<<< HEAD
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.updateUsername}  />
=======
            <input id="username" name="username" type="text" value: {this.state.username} onChange={changeUsername} />
>>>>>>> 2109c0be24c6111c9e0ff0f335f852e478e9c131
          </label>
        </div>
        <div>
          <label>
            Password
<<<<<<< HEAD
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.updatePwd} />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
=======
            <input id="password" name="password" type="password" value: {this.state.password} onChange={changePwd}/>
          </label>
        </div>
        <div>
          <button type="submit" onSubmit={this.props.handleSubmit}>Log in</button>
>>>>>>> 2109c0be24c6111c9e0ff0f335f852e478e9c131
        </div>
      </form>
    );
  }
}

export default LoginForm;
