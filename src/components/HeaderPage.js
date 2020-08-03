import React, { Component } from "react";
import "../App.css";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
          className="hero is-medium is-bold"
          style={{ height: "100%" }}
          id="home"
        >
          <Toolbar drawerClickHandle={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}

          <Carousel>
            <div>
              <img src="https://climatecommunication.yale.edu/wp-content/uploads/2017/04/001-stone-circle-jpeg-768x350.jpg" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
              <p className="legend">Legend 1</p>
            </div>

            <div>
              <img src="https://wallpapercave.com/wp/wp2599603.jpg" />
              <p className="legend">Legend 1</p>
            </div>
            
            
          </Carousel>
          {/* <div className="hero-body columns" style={{ paddingBottom: "10px" }}>
            <div className="column is-6" style={{ marginLeft: "100px" }}>
              <div className="container">
                <h1 className="title">
                  <br />
                  <br />
                  <br />
                  Hola Amigo! &nbsp; 👋
                </h1>
                <h2 className="subtitle has-text-weight-semibold">
                  <p>
                    {" "}
                    If you are looking for a place where you can get information
                    about{" "}
                  </p>

                  <p> &nbsp; &nbsp; - Campus Ambessador Programs</p>
                  <p>&nbsp; &nbsp; - Active Scholarships</p>
                  <p>&nbsp; &nbsp; - Full Time Opportunties</p>
                  <p>&nbsp; &nbsp; - Intern Openings</p>
                  <p>This place is one stop soution for all the listings.</p>
                </h2>
              </div>
            </div>
            <div className="coulmn is-6">
              <center>
                <a href="https://scodein.tech/"></a>
                <img
                  src="https://i.ibb.co/2qK1ZSc/intro.png"
                  alt="student mantra"
                  width="100%"
                />
              </center>
            </div>
          </div> */}
          {/* <div className="box">
            <p className="has-text-centered ">
              <b>
                Whichever listing you looking for, we have a dedicated section
                for it!{" "}
              </b>
            </p>
          </div> */}
        </section>
      </>
    );
  }
}
