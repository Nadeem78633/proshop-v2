import { Container } from "react-bootstrap";
import { Header, Footer } from "./Components";
import { HomeScreen } from "./Pages";
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen/>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
