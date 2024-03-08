import React from "react";

function TopButton({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Mumbai",
    },
    {
      id: 2,
      title: "Azamgarh",
    },
    {
      id: 3,
      title: "Navi Mumbai",
    },
    {
      id: 4,
      title: "Varanasi",
    },
    {
      id: 5,
      title: "Odisha",
    },
  ];
  return (
    <>
      <div className="flex items-center space-x-5 justify-center">
        {/* <p className="text-white underline">Favourite Places</p> */}
        <input
          placeholder="add your favourite city..."
          type="text"
          className="w-100 text-l font-light p-1 shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          add
        </button>
      </div>
      <div className="flex items-center justify-around my-2">
        {cities.map((city) => (
          <button
            key={city.id}
            onClick={() => setQuery({ q: city.title })}
            className="text-white text-lg font-medium hover:scale-125 active:underline"
          >
            {city.title}
          </button>
        ))}
      </div>
      <hr className="my-2 " />
    </>
  );
}

export default TopButton;
