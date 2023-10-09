import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Education from "./Component/Education/Education";
import Project from "./Component/Project/Project";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Education />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
