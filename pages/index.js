import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";
import { Fragment } from "react";

function HomePage() {
    return (
        <Fragment>
            <EventList items={getFeaturedEvents()} />
        </Fragment>
    );
}

export default HomePage;
