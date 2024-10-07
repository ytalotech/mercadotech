import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Localization from "../../components/Localization";
import Menu from "../../components/Menu";
import ModalPartners from "../../components/ModalPartners";
import Partners from "../../components/Partners";
import Services from "../../components/Services";

import '../../styles/main.css';

const Home: React.FC = () => {
    return (
        <div className="App">
          <Menu />
          {/* <Services /> */}
    
          <section id="contact">
            <Contact />
          </section>
    
          <section id="localization">
            <Localization />
          </section>
    
          {/* <section id="partners">
            <Partners />
          </section> */}
    
          <ModalPartners />
    
          <Footer />
        </div>
      )
  };

  export default Home;