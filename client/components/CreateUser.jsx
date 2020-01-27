/***************************\
*                           *
*  Create User: Page to     *
*  create a new account     *
*                           *
\***************************/

import React from 'react';
import { Component } from 'react';
import styled  from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions.js';

//The main body styling 
const MainDiv = styled.div`
    width: 100%;
    height: 500px;
    border: solid;
    margin-top: 10px;

`;

//The sign up form styling
const CreateForm = styled.form`
    border: solid;
    width: 50%;
    height: 300px;
    margin-left: 400px;
`;

//Submit button styling
const SubmitBitton = styled.button`
    margin-left: 350px;
    text-decoration: none;
    border-radius: 20px;
    color: black;
    font-size: 20px;
    &:focus{
        outline: none;
    }
`;

const mapStateToProps = (reduxState) => {
    //used to bring in the pieces of state that the components on this page will use
    return {
      username: reduxState.username, 
      password: reduxState.password, 
      userList: reduxState.userList
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    //used to bring in actions that will be dispatched within the components on this page.
    //   syncMarkets: () => dispatch(actions.syncMarkets())
    return {
      setUsername: (userN) => {
        dispatch(actions.setUsername(userN));
      },
      setPassword: (password) => {
        dispatch(actions.setPassword(password));
      }, 
      addUser: () => {
        dispatch(actions.addUser());
      }
    };
  };

class CreateUser extends Component{
    constructor(props){
        super(props);

        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onFormClick = this.onFormClick.bind(this);

    }

    onUserNameChange(){
        const value = document.getElementById('username').value;
        this.props.setUsername(value);
    }

    onPasswordChange(){
        const value = document.getElementById('password').value;
        this.props.setPassword(value);
    }

    onFormClick(e){
        e.preventDefault();
        this.props.addUser();
        const user ={
            username: this.props.username,
            password: this.props.password
        }
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })

    }

    render(){
        return(
            <MainDiv>
                <h1 style = {{textAlign: 'center'}}>Sign Up</h1>
                <CreateForm>
                    <div style = {{marginLeft: '310px', marginTop: '70px'}}>
                        <label for = "username">Username: </label> 
                        <input id = "username" type = "text" onChange = {this.onUserNameChange}></input>
                        <br></br>
                        <br></br>
                        <label for = "password">Password: </label> 
                        <input id = "password" type = "text" onChange = {this.onPasswordChange}></input>
                        <br></br>
                        <br></br>
                    </div>
                    <SubmitBitton onClick = {this.onFormClick}>Create Account</SubmitBitton>
                    <hr></hr>
                    <h1>OAuth goes here</h1>
                </CreateForm>
            </MainDiv>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);;