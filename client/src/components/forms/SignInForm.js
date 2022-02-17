import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <form className=' mt-5 container'>
      <MDBInput className='mb-4' type='email' id='form2Example1' label='Email address' />
      <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' />

      <MDBRow className='mb-4'>
        <MDBCol className='d-flex justify-content-center'>
          <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
        </MDBCol>
        <MDBCol>
          <a href='#!'>Forgot password?</a>
        </MDBCol>
      </MDBRow>

      <MDBBtn type='submit' className='mb-4' block>
        Sign in
      </MDBBtn>

      <div className='mb-5 text-center'>
        <p>
          Not a member? <Link to='/register'>Register</Link>
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
    </form>
  );
}