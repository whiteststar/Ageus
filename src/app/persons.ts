export interface Persons {
  id: Number,
  name: string,
  lastName: string,
  minor: true,
  resident: true,
  email: string,
  nationalNumber: string,
  address: {
    id: 0,
    street: string,
    postcode: string,
    city: string,
    country: string
  },
  birthPlace: string,
  dateOfBirth: string,
  maritalStatus: string,
  partnerName: string
}
