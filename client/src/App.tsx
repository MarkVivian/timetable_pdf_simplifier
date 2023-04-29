import Body from "./Body/Body";
import Footer from "./MainLayout/Footer";
import Navbar from "./MainLayout/Navbar";

const App: React.FC = () => {
  return (
    <>
        <Navbar />
         <Body />
        <Footer />
    </>
  );
};

export default App;