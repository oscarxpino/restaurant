import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$800',
    tags: 'AU | Botella',
  },
  {
    title: 'Catena Malbec',
    price: '$600',
    tags: 'AU | Botella',
  },
  {
    title: 'La Vieille Rose',
    price: '$150',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$75',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$60',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Spritz',
    price: '$275',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$250',
    tags: 'Dark rum | Cerveza de jengibre | Rebanada de limón',
  },
  {
    title: 'Daiquiri',
    price: '$200',
    tags: 'Rum | Zumo de cítricos | Azúcar',
  },
  {
    title: 'Old Fashioned',
    price: '$250',
    tags: 'Bourbon | Azúcar Café | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$500',
    tags: 'Gin | Vermut Dulce | Campari | Guarnición de naranja',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
