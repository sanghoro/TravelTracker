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