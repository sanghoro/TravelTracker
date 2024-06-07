import { fetchAllUserData, fetchSingleUserData } from "./apiCalls.js";

export const fetchAllData = () => {
  Promise.all([fetchAllUserData(), fetchSingleUserData(id)])
    .then(([allUserDataResult, singleUserDataResult]) => {
      console.log('All Users data fetched successfully:', allUserDataResult);
      console.log('Data fetched successfully:', singleUserDataResult)
      return allUserDataResult
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
};


fetchAllData();
