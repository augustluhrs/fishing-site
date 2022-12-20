/**
 * 
 * Fish Creator Page
 * 
 */

import React, { useEffect, useState, useRef } from 'react';
import firebase, { auth, provider } from './firebase.js';
import NavBar from './NavBar';
import {ContentContainer, ActionButton} from './App';
import styled from 'styled-components'

import { ReactP5Wrapper } from "react-p5-wrapper";
import P5 from "p5";
import Fish from "./Fish";
import FishAssets from './FishParts.js';

function sketch(p5: P5) {
  
  // //UI variables
  // let nameInput;
  // let currentPart = "head";
  // let leftButton, sizeSlider, rightButton;
  // let color1, color2, color3;
  // let submitButton;
  // let w, h;
  
  // //asset stuff
  // let numAssetTypes = 3;
  
  // //fish data
  // let fish = {
  //   color1: randomHex(),
  //   color2: randomHex(),
  //   color3: randomHex(),
  //   body: {
  //     "head": [p5.floor(p5.random(0,numAssetTypes)), p5.random()], //normalized size so can adjust in game to whatever
  //     "dorsal": [p5.floor(p5.random(0,numAssetTypes)), p5.random()],
  //     "ventral": [p5.floor(p5.random(0,numAssetTypes)), p5.random()],
  //     "tail": [p5.floor(p5.random(0,numAssetTypes)), p5.random()],
  //     "body": [p5.floor(p5.random(0,numAssetTypes)), p5.random()],
  //   }
  // }
  
  // p5.setup = () => {
  //   p5.createCanvas(400, 660, p5.WEBGL);
  //   w = p5.width;
  //   h = p5.height;
    
  //   //settings
  //   p5.ellipseMode(p5.CENTER);
  //   p5.rectMode(p5.CENTER);
  //   p5.imageMode(p5.CENTER);
  //   p5.angleMode(p5.RADIANS);
  //   p5.textAlign(p5.CENTER, p5.CENTER);
  //   p5.noStroke();
    
  //   //UI
  //   // nameInput = p5.createInput("FISH NAME").class("inputs").position(0, 0).size(w - 50, h/10);
  //   // nameInput.center("horizontal");
  //   nameInput = p5.createInput("FISH NAME").class("inputs").position(40, 30).size(w - 50, h/10);
    
  //   sizeSlider = p5.createSlider(0, 1, fish.body.body[1], 0.01).position(3 * w/9, 6 * h/10);
  //   sizeSlider.input(()=>{
  //     fish.body[currentPart][1] = sizeSlider.value();
  //   });
    
  //   color1 = p5.createColorPicker(fish.color1).position(w/9, 7 * h/10).size(w/5, h/14);
  //   color1.input(()=>{
  //     fish.color1 = color1.value();
  //   });
  //   color2 = p5.createColorPicker(fish.color2).position(4 * w/9, 7 * h/10).size(w/5, h/14);
  //   color2.input(()=>{
  //     fish.color2 = color2.value();
  //   });
  //   color3 = p5.createColorPicker(fish.color3).position(7 * w/9, 7 * h/10).size(w/5, h/14);
  //   color3.input(()=>{
  //     fish.color3 = color3.value();
  //   });
    
  //   submitButton = p5.createButton("SUBMIT FISH").class("buttons").position(2*w/3, 9 * h/10).size(w/3, h/10);
    
  // }

  // p5.draw = () => {
  //   p5.background(82,135,39);
    
  //   // p5.ellipse(w/2, 3 * h/10, w/4, h/6);
  //   p5.push();
  //   p5.fill(fish.color1);
  //   p5.ellipse(0, -100, 200, 50);
  //   p5.fill(fish.color2);
  //   p5.rect(100, -100, 100, 100);
  //   p5.fill(fish.color3);
  //   p5.rect(0, -140, 40, 40);
  //   p5.rect(-40, -70, 40, 40);
  //   p5.rect(-100, -100, 40, 40);
  //   p5.pop();
    
  //   //highlight current part --TODO make this reference the object instead
  //   p5.push();
  //   if (currentPart == "head"){
  //     p5.fill(0, 0);
  //     p5.stroke(255,243,0);
  //     p5.strokeWeight(4);
  //     p5.rect(100, -100, 120, 120)
  //   }
  //   p5.pop();
    
  //   //part select buttons
  //   p5.push();
  //   p5.stroke(255);
  //   p5.fill(0);
  //   p5.triangle(-140, 60, -90, 40, -90, 80); //left
  //   p5.triangle(140, 60, 90, 40, 90, 80); //right
  //   p5.pop();
    
    
  // };
  
  // function randomHex(){
  //   var randomColor = Math.floor(Math.random()*16777215).toString(16);
  //   return "#" + randomColor;
  // }
}

// export default function FishCreator() {
//   return <ReactP5Wrapper sketch={sketch} />;
// }

type Props = {
    prevPage?: string
}

const CreateFishPage = ({prevPage}:Props) => {


    return (
        <>
        <NavBar />
            <ContentContainer>
                <ReactP5Wrapper sketch={sketch} />
            </ContentContainer>
        </>
    )

}

export default CreateFishPage
