import { useEffect, useState } from "react";

const banners = [
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&w=800&q=80",
];

function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 2500); // change every 2.5 sec

    return () => clearInterval(id);
  }, []);

  return (
    <div className="banner">
      <img
        src={banners[index]}
        alt="offer"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}

export default Slider;
