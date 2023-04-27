import Index from "./Body/Index";
import Footer from "./MainLayout/Footer";
import Navbar from "./MainLayout/Navbar";

const App: React.FC = () => {
  return (
    <>
        <Navbar />
         <Index />
        <Footer />
    </>
  );
};

export default App;