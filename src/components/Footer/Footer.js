import React from 'react'
import './Footer.css'
import LogoLight from '../../static/image/logo-f.png'
import { Grid } from '@mui/material'
import Btn from '../Btn/Btn'

export const Footer = () => {
    return (
        <>
            <div className='footer'>
                <Grid container spacing={1}>
                    <Grid item lg={3} md={3} sm={3} xs={12}>
                        <img style={{ width: '100px', cursor: 'pointer' }} src={LogoLight} ></img>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <p>
                            <i className="uil uil-copyright"></i> 2018-2023 <strong>HappyMiner</strong>.
                            All Rights Reserved.
                        </p>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={12}>
                        <div className="rightSideFooter">
                            <div>Privacy Policy</div>
                            <div>Terms</div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
