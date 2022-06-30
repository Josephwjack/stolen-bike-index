export default class BikeService {
  static async getBike(zipcode, color,brand) {
    try {
      let url = (`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${zipcode}&distance=10&stolenness=proximity&colors=${color}&manufacturer=${brand}`);
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
      

    } catch(error) {
      return error.message;
    }
  }
}

// export default class BikeService {
//   static async getBike(zipcode) {
//     try {
//       const response = await fetch(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${zipcode}&distance=10&stolenness=stolen`);
//       if (!response.ok) {
//         throw Error(response.statusText);
//       }
//       return response.json();
//     } catch(error) {
//       return error.message;
//     }
//   }
