import React, { Component } from "react";
import SaladCard from "./components/SaladCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import saladstuff from "./saladstuff.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    saladstuff
  };

  removePoints = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const saladstuff = this.state.saladstuff.filter(saladstuff => saladstuff.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ saladstuff });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Salad Ingredient List</Title>
        {this.state.saladstuff.map(saladstuff => (
          <SaladCard
            removePoints={this.removePoints}
            id={saladstuff.id}
            image={saladstuff.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
