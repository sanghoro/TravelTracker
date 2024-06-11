import chai from 'chai';
const expect = chai.expect;
import { userDataMock } from './allUser-mock';
import { tripDataMock } from './allDataTrip-mock';
import { destinationDataMock } from './allDestination-mock';
import { pastTrips, pendingTrips, upcomingTrips, calculateEstimate } from '../src/functions';

describe('See if the tests are running', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
});

// describe('Past Trip function', function() {
//   it('Should return past trips for a specific user', function(){
//     const userId = 1,
//     const answer = pastTrips(userId, tripDataMock);

//     expect(answer).to.be.an('array').that.has.lengthOf(3);
//     answer.forEach(trip => expect(trip.userID).to.equal(userId) )
//   })
// })
