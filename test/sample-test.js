import chai from 'chai';
const expect = chai.expect;
import { tripDataMock } from './allDataTrip-mock';
import { destinationDataMock } from './allDestination-mock';
import { pastTrips, pendingTrips, upcomingTrips, calculateEstimate } from '../src/functions';

describe('See if the tests are running', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
});

describe('Past Trips', () => {
  it('should return only approved trips for the user', () => {
    const result = pastTrips(1, tripDataMock);
    expect(result).to.deep.equal([
      {
        id: 1,
        userID: 1,
        destinationID: 49,
        travelers: 1,
        date: "2022/09/16",
        duration: 8,
        status: "approved",
        suggestedActivities: []
      },
      {
        id: 2,
        userID: 1,
        destinationID: 25,
        travelers: 5,
        date: "2022/10/04",
        duration: 7,
        status: "approved",
        suggestedActivities: []
      }
    ])
  });


  it('should return an empty array if there is no approved trips', () => {
    const result = pastTrips(2, tripDataMock);
    expect(result).to.deep.equal([]);
  })

  it('should return empty array if no trips for the unknown user are found', () => {
    const result = pastTrips(7, tripDataMock);
    expect(result).to.deep.equal([]);
  })

  it('should return emtpy array for invalid user ID', () => {
    const result = pastTrips('invalidID', tripDataMock);
    expect(result).to.deep.equal([]);
  })

});

describe('Pending Trips', () => {
  it('should return approved trips for the logged in user', () => {
    const result = pendingTrips(1, tripDataMock);
    expect(result).to.deep.equal([
  {
    id: 3,
    userID: 1,
    destinationID: 22,
    travelers: 4,
    date: "2022/05/22",
    duration: 6,
    status: "pending",
    suggestedActivities: []
  },
  {
    id: 4,
    userID: 1,
    destinationID: 14,
    travelers: 2,
    date: "2022/02/25",
    duration: 4,
    status: "pending",
    suggestedActivities: []
  },
  {
    id: 5,
    userID: 1,
    destinationID: 29,
    travelers: 3,
    date: "2022/04/30",
    duration: 5,
    status: "pending",
    suggestedActivities: []
  }
    ]);
  })
  it('should return an empty array if no pending trips are found', () => {
    const result = pendingTrips(2, tripDataMock);
    expect(result).to.deep.equal([]);
  })

  it('should return an empty array if no pending trips for unknown user', () => {
    const result = pendingTrips(7, tripDataMock);
    expect(result).to.deep.equal([]);
  })

  it('should return empty array for an invalid userID', () => {
    const result = pendingTrips('invalidID', tripDataMock);
    expect(result).to.deep.equal([]);
  })
});

describe('Upcoming Trips Function', () => {
  it('only return upcoming trips for the logged in user after todays date', () => {
    const result = upcomingTrips(1, tripDataMock);
    expect(result).to.deep.equal([
      {
        id: 1,
        userID: 1,
        destinationID: 49,
        travelers: 1,
        date: "2022/09/16",
        duration: 8,
        status: "approved",
        suggestedActivities: []
      },
      {
        id: 2,
        userID: 1,
        destinationID: 25,
        travelers: 5,
        date: "2022/10/04",
        duration: 7,
        status: "approved",
        suggestedActivities: []
      }
    ]);
  });

  it('should return an empty array if there is no upcoming trips', () => {
    const result = upcomingTrips(2, tripDataMock);
    expect(result).to.deep.equal([]);
  })

  it('should return an empty array if there is no trips for unknown users', () => {
    const result = upcomingTrips(7, tripDataMock);
    expect(result).to.deep.equal([]);
  })

  it('should return an empty array for an invalid userID', () => {
    const result = upcomingTrips('invalidID', tripDataMock);
    expect(result).to.deep.equal([]);
  })
});


describe('Calculate Estimate Function', () => {
  it('should correctly calculate the estimate', () => {
    const result = calculateEstimate(1, 1, "Lima, Peru", destinationDataMock);
    expect(result).to.deep.equal({
      totalEstimate: 110,
      agentFee: 11,
      totalPrice: 121
    })
  });

  it('should correctly calculate the estimate for another destination, duration, and travelers', () => {
    const result = calculateEstimate(2, 2, "Stockholm, Sweden", destinationDataMock);
    expect(result).to.deep.equal({
      totalEstimate: 2200,
      agentFee: 220,
      totalPrice: 2420
    })
  });
  it('should handle zero duration correctly', () => {
    const result = calculateEstimate(0, 3, "Lima, Peru", destinationDataMock);
    expect(result).to.deep.equal({
      totalEstimate: 300,
      agentFee: 30,
      totalPrice: 330
    })
  });

})