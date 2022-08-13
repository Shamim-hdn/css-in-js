import React from "react";
import styled from "@emotion/styled";

import { Component } from "react";
class Product extends Component {
  Div = styled.div`
    color: #938787;
    font-size: 15px;
  `;

  Ratings = styled.div`
    font-size: 16px;
    color: red;
  `;

  Span = styled.span`
    color: red;
    text-decoration: line-through;
  `;

  Image = styled.img`
    width: 100%;
    height: 200px;
  `;

  DotSpan = styled.span`
    height: 7px;
    width: 7px;
    margin-left: 6px;
    margin-right: 6px;
    margin-top: 3px;
    background-color: blue;
    border-radius: 50%;
    display: inline-block;
  `;

  Header = styled.h5`
    font-weight: 400;
  `;

  Paragraph = styled.p`
    font-size: 16px;
  `;

  Body = styled.div`
    background: white;
    border: 2px solid gray;
    border-radius: 20px;
  `;

  render() {
    return (
      <this.Body className="container mt-5 mb-5 ">
        <div className="d-flex justify-content-center row">
          <div className="col-md-10">
            <div className="row p-2 bg-white border rounded">
              <div className="col-md-3 mt-1">
                <this.Image
                  className="img-fluid img-responsive rounded  "
                  src={this.props.image}
                  alt="product"
                />
              </div>
              <div className="col-md-6 mt-1">
                <this.Header>{this.props.category}</this.Header>
                <div className="d-flex flex-row">
                  <this.Ratings className=" mr-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </this.Ratings>
                  <span>310</span>
                </div>
                <div className="mt-1 mb-1 ">
                  <span>100% cotton</span>
                  <this.DotSpan></this.DotSpan>
                  <span>Light weight</span>
                  <this.DotSpan></this.DotSpan>
                  <span>
                    Best finish
                    <br />
                  </span>
                </div>
                <this.Div className="mt-1 mb-1 ">
                  <span>Unique design</span>
                  <this.DotSpan></this.DotSpan>
                  <span>For men</span>
                  <this.DotSpan></this.DotSpan>
                  <span>
                    Casual
                    <br />
                  </span>
                </this.Div>
                <this.Paragraph className="text-justify text-truncate mb-0">
                  {this.props.description}
                  <br />
                  <br />
                </this.Paragraph>
              </div>
              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                <div className="d-flex flex-row align-items-center">
                  <h4 className="mr-1">$13.99</h4>
                  <this.Span>$20.99</this.Span>
                </div>
                <h6 className="text-success">{this.props.title6}</h6>
                <div className="d-flex flex-column mt-4">
                  <button className="btn btn-primary btn-sm" type="button">
                    Details
                  </button>
                  <button
                    className="btn btn-outline-primary btn-sm mt-2"
                    type="button"
                  >
                    Add to wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </this.Body>
    );
  }
}
export default Product;
