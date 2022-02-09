import React from "react";
import MoreButton from "./MoreButton";

function SushiContainer({sushis}) {
  return (
    <div className="belt"> 
      {sushis.map(sushi => <Sushi sushi ={sushi} />)}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;

//do sushis.map 