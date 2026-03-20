import React from "react";
import Section1 from "./components/Section1/Section1";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1635766854982-fc151c6e9278?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661582704052-d6b0fe069b72?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "UnderServed",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661610771229-2fc225e093aa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "UnderBanked",
    },
    {
      img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Undeserved",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
    </div>
  );
};

export default App;
