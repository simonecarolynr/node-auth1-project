import React, { useState } from 'react';
import { Form, Input, PrimaryButton, SecondaryButton } from './StyledComponents';
import axios from 'axios';

export const Login = (props) => {

    const [ user, setUser ] = useState({ 
        email: '', 
        password: '' 
    });

    const hanldeSubmit = e => {
        e.preventDefault();
        console.log(user)
        axios
            .post('https://localhost:4444/api/login', user)
            .then(res => {
                // console.log("callout", res.data.token);
                localStorage.setItem('token', res.data.token);
                props.history.push('/');
            })
            .catch(err => console.log(err))
    }


    const handleChange = e => {
        setUser({...user,
            [e.target.name] : e.target.value
        })
    }

    return (

        <Form style={{marginTop: '200px'}} onSubmit={hanldeSubmit}>
            <h1>Login</ h1>
            <Input name='email' placeholder='Email' onChange={handleChange} />
            <Input name='password' type='password' placeholder='Password' onChange={handleChange}/>
            <div className='buttonsLogin'>
                <PrimaryButton>Login</PrimaryButton>
                <SecondaryButton>Sign Up</SecondaryButton>
            </div>
        </Form>
    )
} 

export default Login