import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <h1 className="text-5xl text-yellow-300 text-center font-bold underline p-8">
          Missões
        </h1>
        <div className="flex flex-wrap justify-center">
          {missions.map((mission) => (
            <MissionCard
              name={mission.name}
              year={mission.year}
              country={mission.country}
              destination={mission.destination}
              key={mission.name}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
