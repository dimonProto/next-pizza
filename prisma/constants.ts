export const categories = [
  {
    name: 'Піци',
  },
  {
    name: 'Сніданок',
  },
  {
    name: 'Закуски',
  },
  {
    name: 'Коктейлі',
  },
  {
    name: 'Напої',
  },
];


export const _ingredients = [
  {
    name: 'Сирний бортик',
    price: 179,
    imageUrl:
      '/indigr_img/99f5cb91225b4875bd06a26d2e842106.png',
  },
  {
    name: 'Вершкова моцарела',
    price: 79,
    imageUrl:
      '/indigr_img/cdea869ef287426386ed634e6099a5ba.png',
  },
  {
    name: 'Сири чеддер та пармезан',
    price: 79,
    imageUrl: '/indigr_img/000D3A22FA54A81411E9AFA69C1FE796.png',
  },
  {
    name: 'Гострий перець халапеньйо',
    price: 59,
    imageUrl:
      '/indigr_img/11ee95b6bfdf98fb88a113db92d7b3df.png',
  },
  {
    name: 'Ніжне курча',
    price: 79,
    imageUrl: '/indigr_img/chiekn.png',
  },
  {
    name: 'Печериці',
    price: 59,
    imageUrl: '/indigr_img/mashroom.png',
  },
  {
    name: 'Шинка',
    price: 79,
    imageUrl: '/indigr_img/shunka.png',
  },
  {
    name: 'Пікантна пепероні',
    price: 79,
    imageUrl: '/indigr_img/peperoni.png',
  },
  {
    name: 'Гостра чорізо',
    price: 79,
    imageUrl: '/indigr_img/chorizo.png',
  },
  {
    name: 'Мариновані огірочки',
    price: 59,
    imageUrl: '/indigr_img/cucumber.png',
  },
  {
    name: 'Свіжі томати',
    price: 59,
    imageUrl: '/indigr_img/tomato.png',
  },
  {
    name: 'Червона цибуля',
    price: 59,
    imageUrl: '/indigr_img/onion.png',
  },
  {
    name: 'Соковиті ананаси',
    price: 59,
    imageUrl: '/indigr_img/pineapple.png',
  },
  {
    name: 'Італійські трави',
    price: 39,
    imageUrl:
      '/indigr_img/travu.png',
  },
  {
    name: 'Солодкий перець',
    price: 59,
    imageUrl: '/indigr_img/greenpeper.png',
  },
  {
    name: 'Кубики бринзи',
    price: 79,
    imageUrl: '/indigr_img/brunza.png',
  },
  {
    name: 'Мітболи',
    price: 79,
    imageUrl:
      '/indigr_img/meatboll.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));


export const products = [
  {
    name: 'Омлет із шинкою та грибами',
    imageUrl: '/products_img/omlet_shinka.webp',
    categoryId: 2,
  },
  {
    name: 'Омлет із пепероні',
    imageUrl: '/products_img/omlet_peperoni.webp',
    categoryId: 2,
  },
  {
    name: 'Кава Лате',
    imageUrl: '/products_img/late.webp',
    categoryId: 2,
  },
  {
    name: 'Денвіч шинка та сир',
    imageUrl: '/products_img/senwitsh_shunka.webp',
    categoryId: 3,
  },
  {
    name: 'Курячі нагетси',
    imageUrl: '/products_img/nagets.webp',
    categoryId: 3,
  },
  {
    name: 'Картопля з печі із соусом 🌱',
    imageUrl: '/products_img/freewithChees.webp',
    categoryId: 3,
  },
  {
    name: 'Додстер',
    imageUrl: '/products_img/dodster.webp',
    categoryId: 3,
  },
  {
    name: 'Гострий Додстер 🌶️🌶️',
    imageUrl: '/products_img/hotDogster.webp',
    categoryId: 3,
  },
  {
    name: 'Банановий молочний коктейль',
    imageUrl: '/products_img/bananaCoctel.webp',
    categoryId: 4,
  },
  {
    name: 'Молочний коктейль Карамельне яблуко',
    imageUrl: '/products_img/caramelCoctel.webp',
    categoryId: 4,
  },
  {
    name: 'Молочний коктейль із печивом Орео',
    imageUrl: '/products_img/coclelOreo.webp',
    categoryId: 4,
  },
  {
    name: 'Ірландське Капучино',
    imageUrl: '/products_img/irlandCapusino.webp',
    categoryId: 5,
  },
  {
    name: 'Кава Карамельне капучино',
    imageUrl: '/products_img/caramelCapusino.webp',
    categoryId: 5,
  },
  {
    name: 'Кава Кокосове лате',
    imageUrl: '/products_img/cocoCapusino.webp',
    categoryId: 5,
  },
  {
    name: 'Кава Американо',
    imageUrl: '/products_img/americano.webp',
    categoryId: 5,
  },
  {
    name: 'Кава Лате',
    imageUrl: '/products_img/latee.webp',
    categoryId: 5,
  },
];