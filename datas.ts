export const campaigns = [
  {
    id: 1,
    title: '50% Off',
    code: 'FSCREATION',
    image: require('./assets/campaign1.png'),
  },
  {
    id: 2,
    title: '70% Off',
    code: 'FSCREATION',
    image: require('./assets/campaign2.png'),
  },
];

// Assuming SQL table is like this(JUST EXAMPLE,NOT GOOD PERFORMANCE):

// CATEGORIES
// +----+--------------+
// | id |   category   |
// +----+--------------+
// | 1  | New Arrivals |
// | 2  | For Men      |
// | 3  | For Women    |
// +----+--------------+

// KINDS
// +----+--------+
// | id |  kind  |
// +----+--------+
// | 1  | Dresses|
// | 2  | Jackets|
// | 3  | Jeans  |
// +----+--------+

//PRODUCTS
// +----+--------+---------+-------+
// | id | kind_id|category_id| name  |
// +----+--------+-----------+-------+
// | 1  | 1      | 1         | Dress1|
// | 2  | 2      | 2         | Jacket1|
// | 3  | 3      | 3         | Jeans1|
// | 4  | 1      | 2         | Dress2|
// +----+--------+-----------+-------+

// SELECT
// id,
//   name,
//   (
//     SELECT kind
// FROM kinds
// WHERE id = products.kind_id
// ) AS kind,
//   (
//     SELECT category
// FROM categories
// WHERE id = products.category_id
// ) AS category
// FROM products;

export const products = [
  {
    id: 1,
    category: 'New Arrivals',
    kind: 'Bags',
    name: 'The Marc Jacobs',
    image: require('./assets/product1.png'),
    desc: 'Traveler Tote',
    price: '195.00',
    reviews: 124,
    longDesc:
      'The Marc Jacobs Traveler Tote is a ' +
      'luxurious and spacious tote that is perfect ' +
      'for everyday use. It features a large main ' +
      'compartment with a zippered pocket and two ' +
      'slip pockets. ',
    availableColors: ['#FFF', '#000', '#CADCA7', '#F79F1F'],
  },
  {
    id: 2,
    category: 'New Arrivals',
    kind: 'Shoes',
    name: 'Axel Arigato',
    image: require('./assets/product2.png'),
    desc: 'Clean 90 Triple Sneakers',
    price: '245.00',
    reviews: 47,
    longDesc:
      'The Axel Arigato Clean 90 Triple Sneakers are a ' +
      'luxurious and stylish pair of sneakers that are perfect for ' +
      'everyday wear. ',
    availableColors: ['#FFF', '#000', '#CADCA7', '#F79F1F'],
  },
];
