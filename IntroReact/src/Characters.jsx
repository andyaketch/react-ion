import CharacterCard from "./CharacterCard";
import paviImage from "./assets/Pavi.webp";
import nishaImage from "./assets/Nisha.webp";
import agamImage from "./assets/Agam.webp";
import jaeImage from "./assets/Jae.webp";
import karthikImage from "./assets/Karthik.webp";
import { useState } from "react";

export const xters = [
  {
    id: 1,
    name: "Pavi",
    role: "Avatar",
    element: "All Four Elements",
    image: paviImage ,
    description:
      "A young girl from the Earth Kingdom who discovers she is the new Avatar.",
  },
  {
    id: 2,
    name: "Nisha",
    role: "Avatar",
    element: "All Four Elements",
    image: nishaImage,
    description:
      "Pavi's long-lost twin sister who shares the Avatar's extraordinary abilities.",
  },
  {
    id: 3,
    name: "Jae",
    role: "Mentor",
    element: "Airbending",
    image: jaeImage,
    description: "An important companion who helps guide Pavi on her journey.",
  },
  {
    id: 4,
    name: "Karthik",
    role: "Commander",
    element: "Earthbending",
    image: karthikImage,
    description:
      "A commander connected to the events surrounding Pavi and Nisha.",
  },
  {
    id: 5,
    name: "Agam",
    role: "Supporting Character",
    element: "Unknown",
    image: agamImage,
    description: "One of the characters in the world of Seven Havens.",
  },
];


function Characters() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="characters-container">

            <input
                type="text"
                placeholder="Search characters..."
                onChange={(event) => setSearchTerm(event.target.value)}
            />

            {xters.map((xter) => {
                return (
                    <CharacterCard
                        key={xter.id}
                        name={xter.name}
                        role={xter.role}
                        image={xter.image}
                        description={xter.description}
                    />
                );
            })}

        </div>
    );
}

export default Characters;
