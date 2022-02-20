import React, { useEffect, useState } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import axios from 'axios';

export default function App() {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    useEffect(() => {

        const getData = async () => {
    
          const response = await axios.get('http://localhost:3000/register')
    
          console.log('1. response is: ', response.data)
        }
    
        getData()
    
      }, [])

      const handleAdd = async () => {

      /*   const data = {
          firstName: firstName,
         lastName: lastName,
         mail: email,
         pass: password
        } */

        console.log('HELLO FROM HANDLE ADD')
        const myData = {
            firstName: 'Ismail',
           lastName: 'Duzel',
           mail: 'mail@mail.com',
           pass: '123456'
          }           
          
    
         const response = await axios.post('http://localhost:3000/register', myData)
    
        console.log('2. response is', response)
      }
  return (
    <form className='container m-5'>
       <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput onChange={(e) => setFirstName(e.target.value)} id='form3Example1' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput onChange={(e) => setLastName(e.target.value)} id='form3Example2' label='Last name' />
        </MDBCol>
      </MDBRow>
      <MDBInput className='mb-4' type='email' id='form3Example3' label='Email address' />

      <MDBInput onChange={(e) => setEmail(e.target.value)} className='mb-4' type='password' id='form3Example4' label='Password' />
     

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form3Example5'
        label='Subscribe to our newsletter'
        defaultChecked
      />

      <MDBBtn  onClick={handleAdd} type='submit' className='mb-4' block>
        Sign Up
      </MDBBtn>

      <div className='text-center'>
        <p>
          Not a member? <a href='#!'>Register</a>
        </p>
        <p>or sign up with:</p>

        <MDBBtn floating className='mx-1'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn floating className='mx-1'>
          <MDBIcon fab icon='google' />
        </MDBBtn>

        <MDBBtn floating className='mx-1'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn floating className='mx-1'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </div>


      <div>
          <h1>firstName: {firstName}</h1>
          <h1>lastName: {lastName}</h1>
          <h1>email: {email}</h1>
          <h1>password: {password}</h1>
      </div>
    </form>
  );
}