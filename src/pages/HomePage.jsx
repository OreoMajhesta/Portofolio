import NavBar from '../components/Navbar'
import ContactMe from '../components/home/ContactMe'
import Hero from '../components/home/Hero'
import Skills from '../components/home/Skills'
import Project from '../components/home/Projects'
import Footer from '../components/Footer'

export default function HomePage() {
    return (
        <>
            <NavBar />
            <Hero/>
            <Skills/>
            <Project/>
            <ContactMe/>
            <Footer />
        </>
    );
}