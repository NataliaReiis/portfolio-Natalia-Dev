import Pagination from '../components/project/Projects';
import Gallery from '../components/project/Gallery';
import Navbar from '../components/Navbar';

import LogoDark from '../assets/image/LogoDark.png'

export default function Prokects(){
    return(
        <>
        <Navbar logo={LogoDark} color='var(--text-dark)'/>
        <Pagination />
        <Gallery/>
        </>
    )
}