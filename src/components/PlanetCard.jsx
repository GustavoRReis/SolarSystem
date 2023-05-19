import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="flex flex-col items-center" data-testid="planet-card">
        <p className='text-lg' data-testid="planet-name">{planetName}</p>
        <img
          className="w-80 animate-spin-slow"
          src={planetImage}
          alt={`Planeta ${planetName}`}
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
