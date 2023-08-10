import React from 'react'
import './SignIn.css'
import { Grid } from '@mui/material'
import SignBg from '../../../static/image/sign_bg.png'
import Capachu from '../../../static/image/code.jpg'
import InputField from '../../../components/InputField/InputField'
import Btn from '../../../components/Btn/Btn'
import { useNavigate } from 'react-router-dom'

export const SignIn = () => {
    const navigate = useNavigate()
    return (
        <div className='mainBox' >
            <div className='contentBox boxS borderR'>
                <Grid container>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <div className="imgBox">
                            <img src={SignBg} alt="SignIn" width='100%' />
                        </div>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <div className="mainContent">
                            <h2 >Sign In</h2>
                            <InputField label='Email' margin='normal' />
                            <InputField label='Password' margin='normal' />
                            <div className="capachu">
                                <InputField label='Verification Code' />
                                <img src={Capachu} className='capachuImg' />
                            </div>
                            <Btn label='Submit' fullWidth={true} style={{ margin: '10px 0px' }} />
                            <p className='or'>OR</p>
                            <div className="forgotBox">
                                <p className='dontHaveAccount' onClick={() => navigate('/SignUp')} >Don't Have an Account?</p>
                                <p className='forgotPassword' onClick={() => navigate('/ResetPassword')}>Forget Password?</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}
