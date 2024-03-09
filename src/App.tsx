import React from 'react';
import logo from './logo.svg';
import './App.css';
import blah from './CollegeBasketballTeams.json';

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return <h1>College Basketball Teams!</h1>;
}

class BBall extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h2>{oneTeam.school}</h2>
        <h3>Mascot Name: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

function BasketballTeamList() {
  return (
    <div>
      {blah.teams.map((oneTeam) => (
        <BBall {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <BasketballTeamList />
    </div>
  );
}

export default App;
