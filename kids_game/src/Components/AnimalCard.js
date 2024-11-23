import React from "react";

export default function AnimalCard({ animals, onClick }) {
  return (
    <div style={styles.grid}>
      {animals.map((animal) => (
        <div
        key={animal.id}
        onClick={() => onClick(animal)}>
            <img
            src={require(`../assets/img/${animal.img}`)}
            alt={animal.name}/>
        </div>
        ))}
        </div>
      );
    }