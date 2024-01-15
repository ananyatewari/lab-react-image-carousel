import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(){
    super();
    this.state = {
        clickRate : 0
    }
  }

  render(){
    return (
        <>
        <div id="home">
            <div id="left" onClick={() => { 
                if (this.state.clickRate > 0)
                    this.setState({clickRate : this.state.clickRate - 1}) 
                else if (this.state.clickRate <= 0) 
                this.setState({clickRate : 2})
        }}>
                <ArrowBackIosIcon/>
            </div>

            <div id="carouselImage" style={{backgroundImage: `url('${images[this.state.clickRate].img}')`, backgroundRepeat: 'no-repeat'}}>
                <div id="content">
                    <h1>{images[this.state.clickRate].title}</h1>
                    <div>{images[this.state.clickRate].subtitle}</div>
                </div>
            </div>

            <div id="right" onClick={() => { 
                if (this.state.clickRate < images.length - 1)
                this.setState({clickRate : this.state.clickRate + 1}) 
            else if (this.state.clickRate >= images.length - 1) 
            this.setState({clickRate : 0})
    }}>
                <ArrowForwardIosIcon/>
            </div>
        </div>
        <span>Made by Ananya :) </span>
        </>
    )
  }

}

export default Carousel;