import flattenFindModel from './flattenFind.model';
import flattenFindMock from './flattenFind.mock';

class FlattenFind {
  static retrieveValue() {
    return <flattenFindModel[]>flattenFindMock
      // map only the isuances
      .map(item => item.issuance)
      // filter out the issuances that exist
      .filter(issuance => issuance)
      // map only the documents
      .map(issuance => issuance.documents)
      // filter out the issuances that exist and have length
      .filter(documents => documents && documents.length)
      // the flatten part
      .reduce((accDocs: { documentLink?: string }[], currDoc) => accDocs.concat(currDoc), [])
      // find the first occurance of the documentLink
      .find((document: { documentLink?: string }) => document.documentLink && document.documentLink !== '');
  }
}

export default FlattenFind;
