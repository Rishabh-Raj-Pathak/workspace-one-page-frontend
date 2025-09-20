import "./App.css";
import Hero from "./components/Hero";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import { HoverProvider } from "./context/HoverContext";

function App() {
  return (
    <HoverProvider>
      <Container>
        <Navbar />
        <Hero />
      </Container>
    </HoverProvider>
  );
}

export default App;
