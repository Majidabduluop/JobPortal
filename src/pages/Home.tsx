import Header from "../Header/Header";
import Dreamjob from "../Landingpage/Dreamjob";
import Companies from "../Landingpage/Companies";
import Catogary from "../Landingpage/Catogary";
import Working from "../Landingpage/Working";
import Testimonials from "../Landingpage/Testimonials";
import Subscribe from "../Landingpage/Subcribe";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <Dreamjob />
      <Companies />
      <Catogary />
      <Working />
      <Testimonials />
      <Subscribe />
    </div>
  );
};
export default Home;
