import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Hero />
      <Stack />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
