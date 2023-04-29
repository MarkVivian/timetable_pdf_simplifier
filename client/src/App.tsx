import Body from "./Body/Body";
import Footer from "./MainLayout/Footer";
import Navbar from "./MainLayout/Navbar";
import Money from "./Money/Money";

const App: React.FC = () => {
  return (
    <>
        <Navbar />
         <Body />
         <Money />
        <Footer />
    </>
  );
};

export default App;