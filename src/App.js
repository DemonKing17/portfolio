import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Education from "./Component/Education/Education";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
