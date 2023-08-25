import EventsList from "../components/EventsList";
import { useLoaderData, json } from "react-router-dom";

const Events = () => {
  const data = useLoaderData();
  const events = data.events;

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  return (
    <>
      <EventsList events={events} />
    </>
  );
};

export default Events;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch Events." };
    // throw new Response(JSON.stringify({ message: "Could not fetch Events." }), {
    //   status: 500,
    // });
    throw json(
      { message: "Could not fetch Events." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
