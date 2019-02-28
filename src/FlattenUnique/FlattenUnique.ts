import flattenUniqueModel from './flattenUnique.model';
import flattenUniqueMock from './flattenUnique.mock';

class FlattenUnique {
  static retrieveValue() {
    return (
      flattenUniqueMock
        // gets all admissions for the complete group
        .map(orderItem => orderItem.admissions)
        // flatten all admissions
        .reduce((accAdmissions, currAdmissions) => accAdmissions.concat(currAdmissions), [])
        // gets all travelerIds for the complete group
        .map(admission => admission.travelerIds)
        // flatten all travelerIds
        .reduce((accTravelerIds, currTravelerId) => accTravelerIds.concat(currTravelerId), [])
        // remove duplicates
        .filter((value, index, self) => self.indexOf(value) === index)
    );
  }
}

export default FlattenUnique;
