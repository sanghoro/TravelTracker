import { fetchAllDestinationData, fetchAllTripsData, fetchAllUserData, fetchSingleUserData } from "./apiCalls.js";

export const fetchAllData = () => {
  Promise.all([fetchAllUserData(), fetchSingleUserData(), fetchAllTripsData(), fetchAllDestinationData()])
    .then(([allUserDataResult, singleUserDataResult, allTripsDataResult, allDestinationDataResult]) => {
      console.log('All Users data fetched successfully:', allUserDataResult);
      console.log('Single Users data fetched successfully:', singleUserDataResult)
      console.log('All Trips Data fetched successfully:', allTripsDataResult)
      console.log('All Destination Data fetched successfully:', allDestinationDataResult)
      return allUserDataResult
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
};


//functions invokation
fetchAllData();