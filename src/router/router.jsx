import {Routes, Route} from 'react-router-dom';

import App from '../App';
import Profile from '../pages/Profile';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectDetail from '../components/project/ProjectDetail';

export default function MainRoutes(){
    return(
        <>
        <Navbar />
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/project/:id' element={<ProjectDetail/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
        </>
    )
}