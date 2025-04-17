import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="bg-red-50 m-4 min-h-screen">
      <h1 className="text-3xl text-black text-center font-bold p-8">
        Hot and Cold Coffee
      </h1>
      <div className="grid md:grid-cols-2 gap-6 p-4 ">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
