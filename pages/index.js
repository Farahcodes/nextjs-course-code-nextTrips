import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first trip",
    image:
      "https://images.unsplash.com/photo-1576141405481-58f5ed9cf94e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    address: "Some address 5, 12345 Granada",
    description: "This is a first trip",
  },
  {
    id: "m2",
    title: "A second trip",
    image:
      "https://images.unsplash.com/photo-1559564477-6e8582270002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    address: "Some address 10, 12345 Sevilla",
    description: "This is a second trip",
  },
];
function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  //fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
