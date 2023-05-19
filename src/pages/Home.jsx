const tours = [
  {
    date: "2023-06-10",
    city: "Los Angeles",
    place: "Hollywood Bowl",
  },
  {
    date: "2023-06-15",
    city: "New York City",
    place: "Madison Square Garden",
  },
  {
    date: "2023-06-20",
    city: "London",
    place: "Wembley Stadium",
  },
  {
    date: "2023-07-05",
    city: "Tokyo",
    place: "Tokyo Dome",
  },
  {
    date: "2023-07-12",
    city: "Berlin",
    place: "Mercedes-Benz Arena",
  },
  {
    date: "2023-07-20",
    city: "Sydney",
    place: "Sydney Opera House",
  },
  // Add more tour objects as needed
];

function Home() {
  return (
    <div className="my-5">
      <h1 className="text-center text-2xl font-bold tracking-wide font-serif">
        Tours
      </h1>
      {tours.map((tour, index) => {
        return (
          <div
            className="w-1/2 border-b shadow p-2  w-6/12 mx-auto   m-2 flex justify-evenly"
            key={index}
          >
            <div className="font-semibold text-lg ">{tour.date}</div>
            <div className=" font-semibold tracking-wider">{tour.city}</div>
            <div className=" font-semibold">{tour.place}</div>
            <button className="bg-blue-400 text-white font-semibold rounded-md p-2">
              Buy Tickets
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
