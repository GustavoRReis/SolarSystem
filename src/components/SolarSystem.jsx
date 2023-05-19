import React from 'react';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className='m-20' data-testid="solar-system">

        <div className="flex flex-row flex-wrap justify-center ">
          {planets.map((planet) => (
            <PlanetCard
              planetName={planet.name}
              planetImage={planet.image}
              key={planet.name}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
