import React from 'react';

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <img src={pet.image} alt={pet.name} />
      <h3>{pet.name}</h3>
      <p>{pet.type}</p>
      <p>{pet.breed}</p>
    </div>
  );
};

export default PetCard;
