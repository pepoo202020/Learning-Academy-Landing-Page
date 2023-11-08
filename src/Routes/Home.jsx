import Achievements from "../Components/Home/Achievements.home";
import Calender from "../Components/Home/Calender.home";
import Community from "../Components/Home/Community.home";
import CommunityUpdates from "../Components/Home/CommunityUpates.home";
import Customers from "../Components/Home/Customers.home";
import Demo from "../Components/Home/Demo.home";
import HeroSection from "../Components/Home/Hero.home";
import OurClients from "../Components/Home/OurClients.home";
import Unlock from "../Components/Home/Unlock.home";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <OurClients />
      <Community />
      <Unlock />
      <Achievements />
      <Calender />
      <Customers />
      <CommunityUpdates />
      <Demo />
    </div>
  );
};

export default Home;
