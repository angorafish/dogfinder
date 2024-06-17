import React from "react";
import { useParams, Link, Redirect } from "react-router-dom";

function DogDetails({ dogs }) {
    const { name } = useParams();
    const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());

    if (!dog) return <Redirect to="/dogs" />;

    return (
        <div>
            <h1>{dog.name}</h1>
            <img src={dog.src} alt={dog.name} />
            <h3>Age: {dog.age}</h3>
            <ul>
                {dog.facts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                ))}
            </ul>
            <Link to="/dogs">Go Back</Link>
        </div>
    );
}

export default DogDetails;