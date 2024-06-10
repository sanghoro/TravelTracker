import chai from 'chai';
const expect = chai.expect;
import { allDataMock } from './allUser-mock';
import { tripDataMock } from './allDataTrip-mock';
import { destinationDataMock } from './allDestination-mock';
import { handleLogin, pastTrips, upcomingTrips, pendingTrips, calculateEstimate, addAllExpense } from '../src/userFunctions';

describe('See if the tests are running', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
});