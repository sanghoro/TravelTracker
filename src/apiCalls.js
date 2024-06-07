export function fetchAllUserData() {
    return fetch("http://localhost:3001/api/v1/travelers")
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data.travelers
      })
      .catch(error => {
        console.error('Warning! Problem with fetching all users datas:', error);
      });
  }

  export function fetchSingleUserData(id){
    return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(response => {
        return response.json();
    })
    .then(data=> data)
    .catch(error => {
        console.error('Warning! Problem with fetching single user datas:', error);
      });
  }

  export function fetchAllTripsData(){
    return fetch('http://localhost:3001/api/v1/trips')
    .then(response => {
      return response.json();
    })
    .then(data=>data.trips)
    .catch(error => {
      console.error('Warning! Problem with fetching all trips datas:', error);
    });
  }

  export function fetchAllDestinationData(){
    return fetch('http://localhost:3001/api/v1/destinations')
    .then(response => {
      return response.json();
    })
    .then(data=>data.destinations)
    .catch(error => {
      console.error('Warning! Problem with fetching all trips datas:', error);
    });
  }