import React from 'react'
import './SignUp.css'
import { Checkbox, FormControlLabel, Grid } from '@mui/material'
import SignBg from '../../../static/image/sign_bg.png'
import Capachu from '../../../static/image/code.jpg'
import InputField from '../../../components/InputField/InputField'
import Btn from '../../../components/Btn/Btn'
import { useNavigate } from 'react-router-dom'

export const SignUp = () => {
    const navigate = useNavigate();
    return (
        <div className='mainBox' >
            <div className='contentBox boxS borderR'>
                <Grid container>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <div className="imgBox">
                            <img src={SignBg} alt="SignIn" width='100%' style={{ minHeight: '650px' }} />
                        </div>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <div className="mainContent">
                            <h2 >Sign Up</h2>
                            <InputField label='Email' margin='normal' />
                            <InputField label='Password' margin='normal' />
                            <InputField label='Password confirmation' margin='normal' />
                            <InputField label='Referral code (Optional)' margin='normal' />
                            <div className="capachu">
                                <InputField label='Verification Code' />
                                <img src={Capachu} className='capachuImg' />
                            </div>
                            <div className="agreeBox">
                                <Checkbox onChange={(e) => console.log(e.target.checked)} />
                                <p id='p1'>I agree to the<span id='p2' onClick={() => navigate('/Terms')} >Privacy Policy and Terms</span></p>

                            </div>


                            <Btn label='Submit' fullWidth={true} style={{ margin: '10px 0px' }} />
                            <p className='or'>OR</p>
                            <div className="alreadyhave agreeBox">
                                <p id='p1'>Already have an account?</p>
                                <p id='p2' onClick={() => navigate('/SignIn')}  >Login</p>
                            </div>

                        </div>
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}
