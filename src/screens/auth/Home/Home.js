import React from 'react';
import './Home.css';
import BannerImg from '../../../static/image/picture/banner.png'
import LineImg from '../../../static/image/line.svg'
import { Grid } from '@mui/material';
import Btn from '../../../components/Btn/Btn';


export const Home = () => {
    return (<>
        {/* News */}
        <marquee className="news boxS borderR">
            <font color="red" size="3">
                <i className="uil uil-volume" style={{ fontSize: '22px', marginTop: '8px' }}></i>Notice: HappyMiner has not created any Telegram groups or channels, please identify carefully to avoid being deceived.
            </font>
        </marquee>
        {/* Hero Section */}
        <section className='heroSection boxS borderR'>
            <Grid container spacing={5} >
                <Grid item lg={6} md={6} sm={12} xm={12} xs={12}>
                    <div className='bannerImg' onClick={() => alert('Img Clicked')} >
                        <img src={BannerImg} width='100%' style={{ borderRadius: '10px' }} />
                    </div>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <div className='heroTextSection'>
                        <h2>World's Top Cloud Mining Service</h2>
                        <p>Mining has never been this easy. The rigs are all fired up and ready to go. You can start by creating an account and picking a HappyMiner investment package. Earn your first cryptocurrency with the best cloud mining service!</p>
                        <Btn label='Start Now' style={{ alignSelf: window.innerWidth > 768 ? 'flex-start' : 'auto' }} />
                    </div>
                </Grid>
            </Grid>
        </section>
        {/* Instruction Section */}
        <section className='InstructionSection boxS borderR'>
            <h3>How To Start Earning</h3>
            <img src={LineImg} className='lineImg' />
            <div style={{ height: '25px' }} ></div>
            <Grid container spacing={3} >
                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <div className="itemInstruction">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-1-circle" viewBox="0 0 18 18">
                                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"></path>
                            </svg>
                            <h4>Sign Up</h4>
                        </div>
                        <div className="article-description">Create your account and register yourself at HappyMiner to start your mining journey.</div>
                    </div>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <div className="itemInstruction">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-2-circle" viewBox="0 0 18 18">
                                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z"></path>
                            </svg>
                            <h4>Choose your Packages</h4>
                        </div>
                        <div className="article-description">We offer lucrative and risk-free cloud mining contracts for each user.</div>
                    </div>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <div className="itemInstruction">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-3-circle" viewBox="0 0 18 18">
                                <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z"></path>
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z"></path>
                            </svg>
                            <h4>Start Earning</h4>
                        </div>
                        <div className="article-description">Your daily profits will start credited to your account per your mining contract.</div>
                    </div>
                </Grid>

            </Grid>
        </section>



    </>
    )
}
