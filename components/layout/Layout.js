import { Fragment } from "react";
import MainHeader from "./MainHeader";

function Layout(props) {
    return (
        <Fragment>
            <MainHeader></MainHeader>
            <main>{props.children}</main>
        </Fragment>
    );
}

export default Layout;
