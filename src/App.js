import React, { Component } from "react";
import SaladCard from "./components/SaladCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import InfoHeader from "./components/InfoHeader";
import saladstuff from "./saladstuff.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    saladstuff,
    count: 0,
    arrayCheck: [],
    score: 0,
  };

  shuffleArray = (saladstuff) => {
    for (let i = saladstuff.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let temp = saladstuff[i];
        saladstuff[i] = saladstuff[j];
        saladstuff[j] = temp;
    }
}


  handleClick = (id) => {
  //ONFIRST CLICK SET CURRENT SCORE TO ONE
  if(this.state.count === this.state.score){
    this.setState({ 
      count: this.state.count + 1,
      score: this.state.score + 1 });
    } else if (this.state.count < this.state.score){
      this.setState({ 
        count: this.state.count + 1,
        score: this.state.score});
      } 

 //CHECK TO SEE IF THE ID (from SaladCard) is in arrayCheck
  //IF NOT PUSH IT INTO ARRAYCHECK AND ADD 1 to current score
      if (!this.state.arrayCheck.includes(id)){
          this.state.arrayCheck.push(id);
          console.log("AC: " + this.state.arrayCheck);
          this.setState({ count: this.state.count + 1 });
          this.shuffleArray(saladstuff);
        } 

//IF THE ID IS IN arrayCHECK then set count=0 and empty array    
    else{
      //set arrayCheck to 0, set count to 0, score stays
      this.setState({ 
        count: 0, 
        arrayCheck: [],
        score: this.state.score
       });
      console.log("AC: " + this.state.arrayCheck);
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar
        count={this.state.count}
        score={this.state.score}  
        ></Navbar>
        <InfoHeader></InfoHeader>
        {/* <div className="box_wide"> */}
          {this.state.saladstuff.map(saladstuff => (
            <SaladCard
              handleClick={this.handleClick}
              shuffleArray={this.shuffleArray}
              key={saladstuff.id}
              id={saladstuff.id}
              image={saladstuff.image}
            />
          ))}
          {/* </div> */}

      </Wrapper>
    );
  }
}

export default App;
