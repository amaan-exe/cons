import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Clients from '../components/Clients';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <SEO
                title="Home"
                description="Smart Construction & Developers - Leading construction company in Patna, Bihar. Expert in design, construction, maintenance & engineering. Trusted by AIIMS Patna, Bihar State Disaster Management Authority & more."
                keywords="construction company patna, builders patna, interior design patna, architecture patna, smart construction, turnkey projects patna, civil work bihar"
            />
            <Hero />
            <Services />
            <About />
            <Clients />
            <Contact />
        </>
    );
};

export default Home;
