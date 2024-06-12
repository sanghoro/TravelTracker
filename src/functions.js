//functions
export const pastTrips = (userId, tripsDataset) => {
    const cutoffDate = new Date('2022/07/07');
    return tripsDataset.filter(trip => {
        const tripDate = new Date(trip.date);
        return trip.userID === userId && trip.status === 'approved' && tripDate < cutoffDate;
    });
};

export const pendingTrips = (userId, tripsDataset) => {
    return tripsDataset.filter(trip => trip.userID === userId && trip.status === 'pending');
    };

export const upcomingTrips = (userId, tripsDataset) => {
    const today = new Date("2022/07/07");
    return tripsDataset.filter(trip => trip.userID === userId && new Date(trip.date) > today);
  };
  
export const calculateEstimate = (duration, travelers, destinationName, allDestinationData) => {
    const getDestinationInfo = allDestinationData.find(destin => destin.destination === destinationName);

    const totalFlight = getDestinationInfo.estimatedFlightCostPerPerson * travelers;
    const totalLodging = getDestinationInfo.estimatedLodgingCostPerDay * duration;
    const totalEstimate = totalFlight + totalLodging;
    const agentFee = totalEstimate * 0.10;
    const totalPrice = totalEstimate + agentFee;

        return {
            totalEstimate: totalEstimate,
            agentFee: agentFee,
            totalPrice: totalPrice
        };

}