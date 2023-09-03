import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    LoginPage,
    SignupPage,
    FeedPage,
    AddPostPage
} from '../Pages'
import { Header } from '../components'
import { useState } from 'react';


export const Router = () => {
    const [isLoggedIn, setIsLoggedIn] =useState(false);
    return (
        <BrowserRouter>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <Routes>
                <Route path='/login' element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>} />
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/posts' element={<FeedPage />} />
                <Route path='/add-post' element={<AddPostPage />} />
                <Route path='/post/:id' element={<AddPostPage />} />

            </Routes>
        </BrowserRouter>
    )
}
