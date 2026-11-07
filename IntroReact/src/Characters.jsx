export const xters = [
  {
    id: 1,
    name: "Pavi",
    role: "Avatar",
    element: "All Four Elements",
    image: "/images/pavi.jpg",
    description:
      "A young girl from the Earth Kingdom who discovers she is the new Avatar.",
  },
  {
    id: 2,
    name: "Nisha",
    role: "Avatar",
    element: "All Four Elements",
    image: "/images/nisha.jpg",
    description:
      "Pavi's long-lost twin sister who shares the Avatar's extraordinary abilities.",
  },
  {
    id: 3,
    name: "Jae",
    role: "Mentor",
    element: "Airbending",
    image: "/images/jae.jpg",
    description: "An important companion who helps guide Pavi on her journey.",
  },
  {
    id: 4,
    name: "Karthik",
    role: "Commander",
    element: "Earthbending",
    image: "/images/karthik.jpg",
    description:
      "A commander connected to the events surrounding Pavi and Nisha.",
  },
  {
    id: 5,
    name: "Agam",
    role: "Supporting Character",
    element: "Unknown",
    image: "/images/agam.jpg",
    description: "One of the characters in the world of Seven Havens.",
  },
];

function Characters() {
  return (
    <>
      {xters.map((xter) => {
        return (
          <div key={xter.id}>
            <img src={xter.image} alt={xter.name} />
            <h2>{xter.name}</h2>
            <h3>{xter.role}</h3>
            <p>{xter.description}</p>
          </div>
        );
      })}
    </>
  );
}

export default Characters;
