import * as React from 'react'
import FirebaseInstance from '../Firebase/Firebase'

export interface LoginProps {}

export class LoginView extends React.Component<LoginProps, {name: string}>{
  constructor(props: LoginProps) {
    super(props);

    this.state = { 
      name: "João"
     };
     this.setListener()
  }

  public setListener() {
    FirebaseInstance.test((a) => {
      this.setState({
        name: a
      })
    })
  }
  render() {
    const name = this.state.name

    return <h1>{name}</h1>;
  }
}