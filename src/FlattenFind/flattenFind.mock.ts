export default [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
    issuance: {
      documents: null,
    },
  },
  {
    id: 4,
    issuance: {
      documents: [],
    },
  },
  {
    id: 5,
    issuance: {
      documents: [{}],
    },
  },
  {
    id: 6,
    issuance: {
      documents: [
        {
          documentLink: null,
        },
      ],
    },
  },
  {
    id: 6,
    issuance: {
      documents: [
        {
          documentLink: '',
        },
      ],
    },
  },
  {
    id: 6,
    issuance: {
      documents: [
        {
          documentLink: '',
        },
        {
          documentLink: null,
        },
        {
          documentLink: 'http://testbladiebla.com',
        },
      ],
    },
  },
  {
    id: 7,
    issuance: {
      documents: [
        {
          documentLink: 'http://no.com',
        },
      ],
    },
  },
];
