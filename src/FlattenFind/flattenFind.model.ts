export default interface FlattenFindModel {
  id?: number;
  issuance?: {
    documents?: [
      {
        documentLink?: string;
      }
    ];
  };
}
