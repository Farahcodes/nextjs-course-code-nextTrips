import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://images.unsplash.com/photo-1576141405481-58f5ed9cf94e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      title="First Trip"
      address="Some Street 5, Some City"
      description="This is a first trip"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetching data for a single meetup

  const meetupId = context.params.meetupId; //meetupId because that's the name we have in [meetupId] folder

  return {
    props: {
      meetupData: {
        image:
          "https://images.unsplash.com/photo-1576141405481-58f5ed9cf94e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        id: meetupId,
        title: "First Trip",
        address: "Some Street 5, Some City",
        description: "This is a first trip",
      },
    },
  };
}

export default MeetupDetails;
