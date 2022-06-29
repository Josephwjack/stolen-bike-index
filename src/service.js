export default class BikeService {
  static async getBike() {
    try {
      let url = `https://bikeindex.org/api/v3/search?page=1&per_page=25&location=IP&distance=10&stolenness=proximity`;
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      let newResponse = response.json();
      return newResponse;

    } catch(error) {
      return error.message;
    }
  }
}