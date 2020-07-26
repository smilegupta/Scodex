import React, { Component } from "react";
import "../App.css";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";

export default class HeaderPage extends Component {
  state = {
    sideDrawerOpen: false,
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <>
        <section
          className="hero is-medium is-bold backgroundImage1"
          style={{ height: "100%" }}
        >
          <Toolbar drawerClickHandle={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <div className="hero-body columns" style={{ marginTop: "64px" }}>
            <div className="column is-6 is-offset-1"></div>
            <div className="coulmn is-4 ">
              <center>
                <a href=""></a>
              </center>
            </div>
          </div>
          <div className="box">
            <p className="has-text-centered ">
              <b>
                Whichever listing you looking for its already listed below!{" "}
              </b>
            </p>
          </div>
        </section>
      </>
    );
  }
}
