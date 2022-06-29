import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeService from './service.js';

function getElements(response) {
  if (response.stolen_location === location) {
    $(".showBikes").text(`stolen: ${response.stolen_location}`)
  } else {
    console.log('Can not find bikes matching your search');
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



