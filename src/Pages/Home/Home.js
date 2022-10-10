import React from "react";
import "./Home.css";
import Card1 from "../../Components/Card Input/Card1";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />

      <Card1 />
      <Footer />
    </div>
  );
};

export default Home;
