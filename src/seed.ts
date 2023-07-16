import { faker } from '@faker-js/faker';

export function createHotel() {
  const price = Number(faker.commerce.price());
  return {
    name: faker.company.name(),
    content: faker.lorem.paragraph(),
    price,
    location: faker.address.cityName(),
    image: {
      url: faker.image.city(),
    },
    rating: faker.commerce.price(),
    reviews: faker.commerce.price(),
    state: "Exceptional"
  };
}
