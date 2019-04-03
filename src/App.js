import React, { Component } from "react";
import SaladCard from "./components/SaladCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import InfoHeader from "./components/InfoHeader";
// import Counter from "./components/Counter";
import saladstuff from "./saladstuff.json";

//THINGS I NEED TO DO
//Counter
//put ID in new array
//randomly sort the number/id
//state is one step behind (LATER)


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    saladstuff,
    count: 0,
    arrayCheck: [],
    score: 0,
    savescore: 0
  };


  handleClick = (id) => {
//ONFIRST CLICK SET CURRENT SCORE TO ONE

  this.setState({ 
    count: this.state.count + 1,
    score: this.state.score + 1 });

//CHECK TO SEE IF COUNT < SCORE
  //   if (this.state.count > this.state.score){
  //     this.setState({score: this.state.count});
  //   }
  // }
//CHECK TO SEE IF THE ID (from SaladCard) is in arrayCheck

  //IF NOT PUSH IT INTO ARRAYCHECK AND ADD 1 to current score
  //AND TEST IF COUNT > SCORE
      if (!this.state.arrayCheck.includes(id)){
          this.state.arrayCheck.push(id);
          console.log("AC: " + this.state.arrayCheck);
          this.setState({ count: this.state.count + 1 });
          // if (this.state.count > this.state.score){
          //   let y = this.state.count;
          //   console.log("y: " + y);
          //   this.setState({ score: y });
          // }
        } 
      



//       let x = this.state.count;
//       console.log("x: " + x);
//       this.setState({ score: x });
//     }
//CHECK TO SEE IF THE ID (from SaladCard) is in arrayCheck
        // console.log("id: " + id);
//IF NOT PUSH IT INTO ARRAYCHECK AND ADD 1 to current score
//AND TEST IF COUNT > SCORE
  //   if (!this.state.arrayCheck.includes(id)){
  //     this.state.arrayCheck.push(id);
  //     console.log("AC: " + this.state.arrayCheck);
  //     this.setState({ count: this.state.count + 1 });
  //     if (this.state.count > this.state.score){
  //       let y = this.state.count;
  //       console.log("y: " + y);
  //       this.setState({ score: y });
  //     }
  //   }
  // } 
// //IF THE ID IS IN arrayCHECK then set count=0 and empty array    
//     else{
//       //set arrayCheck to 0
//       //set count to 0
//       this.setState({ count: 0, arrayCheck: [] });
//       console.log("AC: " + this.state.arrayCheck);
//     }
//   };

  keepTrack = () => {

  }

    // handleIncrement increments this.state.count by 1
  handleLoss = () => {
      //PSEUDO if number is in array, then handle loss. Do not pass functions down
      // We always use the setState method to update a component's state
      this.setState({ count: 0 });
    };
  



  // removePoints = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   // const saladstuff = this.state.saladstuff.filter(saladstuff => saladstuff.id !== id);
  //   const saladstuff = this.state.saladstuff.filter(saladstuff => saladstuff.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ saladstuff });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar
        count={this.state.count}
        score={this.state.score}  
        ></Navbar>
        <InfoHeader></InfoHeader>
        
        {this.state.saladstuff.map(saladstuff => (
          <SaladCard
            handleClick={this.handleClick}
            key={saladstuff.id}
            id={saladstuff.id}
            image={saladstuff.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
