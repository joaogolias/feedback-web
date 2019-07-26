import * as React from 'react'
import FirebaseInstance from '../../Firebase/Firebase'
import { SignUpView } from '../SignUp/SignUpView'

export interface LoginProps {}



export class LoginView extends React.Component<LoginProps, {name: string}>{
  constructor(props: LoginProps) {
    super(props);

    this.state = { 
      name: "João"
     };
     this.setListener()
  }

  redirectToTarget = () => {
  }


  public setListener() {
    FirebaseInstance.test((a) => {
      console.log(a)
      this.setState({
        name: a
      })
    })
  }

  public openSignUp(){
  }
  render() {
    const name = this.state.name

    return (

     
      <h1 onClick={this.redirectToTarget}>{name}
        {/* <Link to="/dashboard">Dashboard</Link>
        <Route path="/about/" component={SignUpView} /> */}
      </h1>);
  }
}