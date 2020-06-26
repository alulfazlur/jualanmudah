import React, { Component } from "react";

import { MDBBox, MDBRow, MDBCol, MDBBtn } from "mdbreact";

import Navbar from "../components/Navbar";
import Table from "../components/Table";

import "../css/style.css";
import PictName from "../components/PictName";

class DashboardStaff extends Component {
  render() {
    return (
      <MDBBox style={{ fontFamily: "Source Sans Pro" }}>
        <Navbar />

        <MDBBox className="py-4" style={{ backgroundColor: "#f7f7f7" }}>
          <h3
            className="text-left ml-5"
            style={{ fontWeight: "600", color: "#192e35" }}
          >
            Dashboard
          </h3>
          <MDBRow
            style={{
              margin: "25px 25px",
            }}
          >
            <MDBCol size="3">
              <MDBBox
                style={{
                  borderRadius: "20px",
                  padding: "30px 20px",
                  boxShadow: "0 0 10px #e1e1e1",
                  backgroundColor: "white",
                }}
                className="text-left pt-4"
              >
                <PictName />
                <MDBBox className="text-center">
                  <MDBBtn
                    color="transparent"
                    style={{
                      backgroundColor: "#f14c59",
                      color: "white",
                      boxShadow: "none",
                      borderRadius: "40px",
                      fontSize: "16px",
                    }}
                    className="text-capitalize"
                  >
                    <i class="fas fa-plus mr-1"></i> New broadcast
                  </MDBBtn>
                </MDBBox>
                <hr />
                <MDBBox className="pl-3">
                  <p
                    className="mb-1"
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#192e35",
                    }}
                  >
                    All segments
                  </p>
                  <a href="#!" style={{ color: "#192e35" }}>
                    <p className="py-0 my-0" style={{ fontSize: "16px" }}>
                      Woman
                    </p>
                  </a>
                  <a href="#!" style={{ color: "#192e35" }}>
                    <p className="py-0 my-0" style={{ fontSize: "16px" }}>
                      Man
                    </p>
                  </a>
                </MDBBox>
              </MDBBox>
            </MDBCol>
            <MDBCol size="9">
              <MDBRow className="text-uppercase" style={{ fontWeight: "500" }}>
                <MDBCol size="4">
                  <p className="text-center">Name</p>
                </MDBCol>
                <MDBCol size="2">
                  <p className="text-center">Broadcast</p>
                </MDBCol>
                <MDBCol size="2">
                  <p className="text-center">Delete</p>
                </MDBCol>
                <MDBCol size="4">
                  <p className="text-center">Created at</p>
                </MDBCol>
              </MDBRow>
              <Table />
            </MDBCol>
          </MDBRow>
        </MDBBox>
      </MDBBox>
    );
  }
}
export default DashboardStaff;