import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    LoginPage,
    SignupPage,
    FeedPage,
    AddPostPage
} from '../Pages'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/feed' element={<FeedPage />} />
                <Route path='/add-post' element={<AddPostPage />} />
            </Routes>
        </BrowserRouter>
    )
}