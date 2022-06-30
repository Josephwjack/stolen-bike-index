import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeService from './service.js';

function getElements(response) {
  let showBikes = [];
  console.log(response);
  for (let i=0; i < response.bikes.length; i++) {
    showBikes.push(`<p>Stolen location: ${response.bikes[i].stolen_location}</p>`);
    showBikes.push(`<p>Colors: ${response.bikes[i].frame_colors}</p>`);
    $('.bikesFound').html(showBikes);
  }
}
  
async function makeApiCall(location) {
  const response = await BikeService.getBike(location);
  getElements(response);


}

$(document).ready(function() {
  $('#searchBikes').click(function() {
    let location = $('#location').val();
    makeApiCall(location);
    
  });
});



