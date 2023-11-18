import Navbar from "./component/Navbar/navbar";
import Intro from './component/Personal/intro'
import Skills from "./component/Skills/skills";
import Works from "./component/Portfolio/works";
import Contact from "./component/Contact/contact";
import Footer from "./component/footer/footer";
function App() {
  return (
    <div className="App">
        <Navbar />
        <Intro />
        <Skills />
        <Works />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
