//Fetch
export function fetchAllUserData() {
    return fetch("http://localhost:3001/api/v1/travelers")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log('allData', data.travelers)
        return data.travelers
      })
      .catch(error => {
        console.error('Warning! Problem with fetching all users datas from apiCalls:', error);
      });
  }

  export function fetchSingleUserData(id) {
    return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => {
        console.error('Warning! Problem with fetching single user data from apiCalls:', error);
      });
  }

  export function fetchAllTripsData(){
    return fetch('http://localhost:3001/api/v1/trips')
    .then(response => {
      return response.json();
    })
    .then(data=> {
      console.log('data trips >>>', data.trips)
      return data.trips
    })
    .catch(error => {
      console.error('Warning! Problem with fetching all trips datas from apiCalls:', error);
    });
  }

  export function fetchAllDestinationData(){
    return fetch('http://localhost:3001/api/v1/destinations')
    .then(response => {
      return response.json();
    })
    .then(data=>{
      console.log('destination datas>>', data.destinations)
      return data.destinations})
    .catch(error => {
      console.error('Warning! Problem with fetching all trips datas from apiCalls:', error);
    });
  }


  //Post
  export function addNewTrip(trip) {
    return fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trip)
    })
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error('Warning! Problem posting new trip from apiCalls:', error);
    });
  }
