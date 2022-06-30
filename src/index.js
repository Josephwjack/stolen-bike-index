import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeService from './service.js';
import bikeJpg from '../assets/images/bike.jpg'


function getElements(response) {
  let newBike = [];
  for (let i=0; i < response.bikes.length; i++) {
    if (response.bikes[i].thumb != null) {
      newBike.push(`<div class="card" style="width: 25rem;">
      <img src=${response.bikes[i].thumb} class="card-img-top">
      <div class="card-body"><h5 class="card-title"> ${response.bikes[i].manufacturer_name}</h5>
      <p class="card-text">Stolen location: ${response.bikes[i].stolen_location}</p>
  <p class="card-text">Colors: ${response.bikes[i].frame_colors}</p>
  </div></div>`);
 }
 else {
   newBike.push(`<div class="card" style="width: 25rem;">
   <img src=${bikeJpg} class="card-img-top">
   <div class="card-body"><h5 class="card-title"> ${response.bikes[i].manufacturer_name}</h5>
   <p class="card-text">Stolen location: ${response.bikes[i].stolen_location}</p>
   <p class="card-text">Colors: ${response.bikes[i].frame_colors}</p>
   </div></div>`)};
   $('.bikesFound').html(newBike);
  }}
  



  async function makeApiCall(zipcode,color,brand) {
    const response = await BikeService.getBike(zipcode,color,brand);
  getElements(response);
}

$(document).ready(function() {
  $('#searchBikes').click(function() {
    let zipcode = $('#location').val();
    let color = $('#color-search').val();
    let brand = $('#brand').val(); 
    makeApiCall(zipcode, color, brand);
  });
});


// Code before adding divs to introduce card layout---------------
// function getElements(response) {
//   let newBike = [];
//   console.log(response);
//   for (let i=0; i < response.bikes.length; i++) {
//     newBike.push(`<p>Stolen location: ${response.bikes[i].stolen_location}</p>``);`
//     newBike.push(`<p>Colors: ${response.bikes[i].frame_colors}</p>`);
//     newBike.push(`<p>Manufacturer: ${response.bikes[i].manufacturer_name}</p>`);
//     if (response.bikes[i].thumb != null) {
//     newBike.push(`<img src=${response.bikes[i].thumb}>`);
//     } else {
//       newBike.push(`<img src=${bikeJpg} width="250" >`);
//       // assets/images/bike.jpg
//     }
//     $('.bikesFound').html(newBike);
//   console.log(newBike);
//   }
// }
