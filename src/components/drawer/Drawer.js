import React, { useEffect, useState } from 'react';
import './Drawer.css'
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../static/image/logo-h.png'
import Btn from '../Btn/Btn';
import Colors from '../../static/colors/colors';
import IconBtn from '../IconBtn/IconBtn';
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QuizIcon from '@mui/icons-material/Quiz';
import InfoIcon from '@mui/icons-material/Info';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from '../../screens/auth/Home/Home';




export const Drawer = () => {
    const [deviceType, setDeviceType] = useState('');
    let [menu, setMenu] = useState(false);
    let [activeMenu, setActiveMenu] = useState('navLinks activeMenu');
    let [handleContent, setHandleContent] = useState('rightSide contractContent');
    let [activeScreen, setActiveScreen] = useState('Home');

    const navigate = useNavigate();

    const btns = [
        {
            label: 'Home',
            icon: (color) => <HomeIcon sx={{ color: color }} />,
            to: '/'
        },
        {
            label: 'Packages',
            icon: (color) => <LocalOfferIcon sx={{ color: color }} />,
            to: '/'
        },
        {
            label: 'Affliate',
            icon: (color) => <PeopleAltIcon sx={{ color: color }} />,
            to: '/'
        },
        {
            label: 'FAQ',
            icon: (color) => <QuizIcon sx={{ color: color }} />,
            to: '/'
        },
        {
            label: 'About Us',
            icon: (color) => <InfoIcon sx={{ color: color }} />,
            to: '/'
        },
    ]

    useEffect(() => {
        menu ? setActiveMenu('navLinks') : setActiveMenu("navLinks activeMenu");
        menu ? setHandleContent('rightSide') : setHandleContent('rightSide contractContent')
    }, [menu])


    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setDeviceType('Mobile');
                setMenu(true)
            } else if (width >= 768 && width < 1024) {
                setDeviceType('Tablet');
            } else {
                setDeviceType('Laptop/Desktop');
            }
        };

        // Initial check on component mount
        handleResize();

        // Add event listener to check on window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        navigate('/Home')
    }, [])

    return (
        <div>
            <div className="top">
                <div className="leftBox">
                    <div className="menuIcon" onClick={() => {
                        setMenu(!menu)
                    }}>
                        <MenuIcon sx={{ fontSize: '22px' }} />
                    </div>
                    <img src={Logo} className='logo' />
                </div>
                <div className='btnsBox'>
                    <Btn
                        label='Sign In'
                        onClick={() => navigate('/Home')}
                        bgColor={Colors.secondary_bg}
                    />
                    {deviceType !== "Mobile" && <Btn
                        label='Sign Up'
                        onClick={() => navigate('/Home')}
                        bgColor="#ffc10769"
                        className='signUpBtn'
                    />}
                </div>

            </div>
            <div className='main'>
                <div className={activeMenu}>
                    {
                        btns.map((e, i) => {
                            return (
                                <IconBtn
                                    key={i}
                                    label={e.label}
                                    fullWidth={true}
                                    bgColor={activeScreen === e.label ? Colors.secondary_bg : Colors.primary_bg}
                                    color={activeScreen === e.label ? Colors.accent_text : Colors.primary_text}
                                    icon={e.icon}
                                    onClick={() => setActiveScreen(e.label)}
                                />
                            )
                        })
                    }

                </div>
                <div className={handleContent} >
                    <Routes>
                        <Route path='Home' element={<Home />}></Route>
                    </Routes>
                </div>

            </div>
        </div>
    )
}
