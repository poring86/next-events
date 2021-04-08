import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "../components/events/EventList";
import { Fragment } from "react";

function HomePage(props) {
    return (
        <Fragment>
            <EventList items={props.events} />
        </Fragment>
    );
}

export async function getStaticProps(context) {
    const featuredEvents = await getFeaturedEvents();

    return {
        props: {
            events: featuredEvents,
        },
    };
}

export default HomePage;
