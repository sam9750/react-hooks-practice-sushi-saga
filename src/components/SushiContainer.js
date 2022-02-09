import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis}) {

  const [startingIndex, setStartingIndex] = useState(0)



  console.log(startingIndex)
  // we need a way to change button also pass addFourToIndex down to MoreButton

    const addFourToIndex = () => {
      // console.log('I will add 4')



      if (!sushis[newIndex + 4]) {
        setStartingIndex(0)
       } else {
      setStartingIndex(startingIndex + 4)
    }
  }

const fourToShow = sushis.slice(startingIndex,startingIndex + 4)

    
  return (
    <div className="belt"> 
      {sushis.map(sushi => <Sushi key={sushi.id}  sushi ={sushi} />)}
      {fourToShow.map(sushi => <Sushi key={sushi.id}  sushi ={sushi} />)}
      <MoreButton addFourToIndex = {addFourToIndex} />
    </div>
  );
}

export default SushiContainer;

//do sushis.map 