import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first trip",
    image: "https://alhambragrenade.fr/images/alhambra-grenade-fr.jpg",
    address: "Some address 5, 12345 Granada",
    description: "This is a first trip",
  },
  {
    id: "m2",
    title: "A second trip",
    image: "https://visiterseville.fr/images/top_10_attractions_seville.jpg",
    address: "Some address 10, 12345 Sevilla",
    description: "This is a second trip",
  },
];
function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
