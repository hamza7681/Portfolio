import React, { useState } from "react";
import Introduction from "../Components/Introduction/Introduction";
import ProgressMain from "../Components/Progress/ProgressMain";
import Work from "../Components/Work/Work";
import AwardsData from "../Components/Awards/AwardsData";
import Github from "../Components/Github/Github";
import Comments from "../Components/Comments/Comments";

function HomePage() {

  return (
    <>
      <Introduction/>
      <ProgressMain />
      <Work />
      <AwardsData />
      <Github/>
    
    </>
  );
}

export default HomePage;
