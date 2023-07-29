import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Drawer } from '../components/drawer/Drawer';
import { Home } from '../screens/auth/Home/Home';


export default function AppRouter() {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<Drawer />}></Route>
                </Routes>
            </BrowserRouter>
        </>

    )
}