import { useContext } from 'react';
import { CartContext } from '../../App';
import Cart from '../../Components/Cart';

// const testData = [
//   {
//     product: {
//       name: 'Shiny Hammered Cutlery Set',
//       sku: '1041018298',
//       category: {
//         id: 'YWHxkhIAAC4Ayj0J',
//         type: 'category',
//         tags: [],
//         lang: 'en-us',
//         slug: 'kitchen',
//         first_publication_date: '2021-10-09T23:33:27+0000',
//         last_publication_date: '2021-10-12T23:35:55+0000',
//         link_type: 'Document',
//         isBroken: false,
//       },
//       mainimage: {
//         dimensions: {
//           width: 696,
//           height: 900,
//         },
//         alt: 'Shiny Hammered Cutlery Set',
//         copyright: null,
//         url: 'https://images.prismic.io/wizeline-academy/91d8e0a6-70e6-48fe-8258-6476ab2f3627_1.webp?auto=compress,format',
//       },
//       short_description:
//         'The meticulous finish gives this cutlery collection an original and elegant look, perfect for your table. Includes salad fork, carving fork, knife, soup spoon, and coffee spoon. Crafted from 18/10 stainless steel that will stay sharp and shiny for years to come.',
//       description: [
//         {
//           type: 'paragraph',
//           text: 'The meticulous finish gives this cutlery collection an original and elegant look, perfect for your table. Includes salad fork, carving fork, knife, soup spoon, and coffee spoon. Crafted from 18/10 stainless steel that will stay sharp and shiny for years to come.',
//           spans: [],
//         },
//       ],
//       specs: [
//         {
//           spec_name: 'Material',
//           spec_value: 'Stainless steel',
//         },
//         {
//           spec_name: 'Color',
//           spec_value: 'Silver',
//         },
//         {
//           spec_name: 'Dimensions',
//           spec_value:
//             'Carving Fork: 8.5 "long x 3.81 cm wide Soup Spoon: 8.5" long x 5.08 cm wide Knife: 22.86 cm long x 2.54 cm wide Dessert Fork: 19.05 cm long x 2.54 cm wide width. Dessert Spoon: 16.51 cm long x 3.81 cm wide.',
//         },
//       ],
//       images: [
//         {
//           image: {
//             dimensions: {
//               width: 696,
//               height: 900,
//             },
//             alt: null,
//             copyright: null,
//             url: 'https://images.prismic.io/wizeline-academy/91d8e0a6-70e6-48fe-8258-6476ab2f3627_1.webp?auto=compress,format',
//           },
//         },
//         {
//           image: {
//             dimensions: {
//               width: 696,
//               height: 900,
//             },
//             alt: null,
//             copyright: null,
//             url: 'https://images.prismic.io/wizeline-academy/e48abba1-98f8-4e77-980b-4032a555d495_3.jpeg?auto=compress,format',
//           },
//         },
//         {
//           image: {
//             dimensions: {
//               width: 696,
//               height: 900,
//             },
//             alt: null,
//             copyright: null,
//             url: 'https://images.prismic.io/wizeline-academy/9176c338-2121-4335-90f3-62c13716c44b_2.webp?auto=compress,format',
//           },
//         },
//       ],
//       stock: 46,
//       price: 73,
//     },
//     q: 1,
//   },
//   {
//     product: {
//       name: 'Cojín Faye Azul',
//       sku: '1091816888',
//       category: {
//         id: 'YWHyYRIAACgAykCq',
//         type: 'category',
//         tags: [],
//         lang: 'en-us',
//         slug: 'decorate',
//         first_publication_date: '2021-10-09T23:32:29+0000',
//         last_publication_date: '2021-11-18T14:27:09+0000',
//         link_type: 'Document',
//         isBroken: false,
//       },
//       mainimage: {
//         dimensions: {
//           width: 696,
//           height: 900,
//         },
//         alt: 'Faye Blue Throw Pillow',
//         copyright: null,
//         url: 'https://images.prismic.io/wizeline-academy/39db837a-8a39-48fc-9937-5d496027bc79_1.jpeg?auto=compress,format',
//       },
//       short_description:
//         'The soft texture makes a room cozier. This cushion features a beautiful variation of ups and downs and features a subtle diamond pattern that works with all styles. Oeko-Tex Certified: This product is free of harmful and irritating toxins; the production is ecological and does not generate water, air or noise pollution.',
//       description: [
//         {
//           type: 'paragraph',
//           text: 'The soft texture makes a room cozier. This cushion features a beautiful variation of ups and downs and features a subtle diamond pattern that works with all styles. Oeko-Tex Certified: This product is free of harmful and irritating toxins; the production is ecological and does not generate water, air or noise pollution.',
//           spans: [],
//         },
//       ],
//       specs: [
//         {
//           spec_name: 'Care and cleaning instructions',
//           spec_value:
//             'Machine wash cold; smooth cycle. Use only non-chlorine bleach when necessary. Dry low',
//         },
//         {
//           spec_name: 'Color',
//           spec_value: 'Blue',
//         },
//         {
//           spec_name: 'Dimensions',
//           spec_value: '50.80 cm x 50.80 cm',
//         },
//       ],
//       images: [
//         {
//           image: {
//             dimensions: {
//               width: 696,
//               height: 900,
//             },
//             alt: null,
//             copyright: null,
//             url: 'https://images.prismic.io/wizeline-academy/39db837a-8a39-48fc-9937-5d496027bc79_1.jpeg?auto=compress,format',
//           },
//         },
//         {
//           image: {
//             dimensions: {
//               width: 696,
//               height: 900,
//             },
//             alt: null,
//             copyright: null,
//             url: 'https://images.prismic.io/wizeline-academy/56f55c28-e085-403b-b7f1-dcb704c842d0_2.jpeg?auto=compress,format',
//           },
//         },
//       ],
//       stock: 49,
//       price: 41,
//     },
//     q: 1,
//   },
//   {
//     product: {
//       name: 'Set of 4 Trinche Forest Gnome Plates',
//       sku: '1107975256',
//       category: {
//         id: 'YWHxkhIAAC4Ayj0J',
//         type: 'category',
//         tags: [],
//         lang: 'en-us',
//         slug: 'kitchen',
//         first_publication_date: '2021-10-09T23:33:27+0000',
//         last_publication_date: '2021-10-12T23:35:55+0000',
//         link_type: 'Document',
//         isBroken: false,
//       },
//       mainimage: {
//         dimensions: {
//           width: 696,
//           height: 900,
//         },
//         alt: 'Set of 4 Trinche Forest Gnome Plates',
//         copyright: null,
//         url: 'https://images.prismic.io/wizeline-academy/922ca6ac-249a-48aa-8d0e-821da1841cdb_1.jpeg?auto=compress,format',
//       },
//       short_description:
//         'There is no gnome place home. Illustrating a fairytale forest scene, the art in this collection was originally painted by our in-house design team to add a touch of Christmas magic to your meals. This set includes four carving plates, which can be combined with other pieces in the collection to achieve a completely coordinated table design.',
//       description: [
//         {
//           type: 'paragraph',
//           text: 'There is no gnome place home. Illustrating a fairytale forest scene, the art in this collection was originally painted by our in-house design team to add a touch of Christmas magic to your meals. This set includes four carving plates, which can be combined with other pieces in the collection to achieve a completely coordinated table design.',
//           spans: [],
//         },
//       ],
//       specs: [
//         {
//           spec_name: 'Color',
//           spec_value: 'Multicolor',
//         },
//         {
//           spec_name: 'Other Information',
//           spec_value:
//             'Made of stoneware. It is finished with a glossy enamel decoration. Free of phthalates, BPA, lead and latex',
//         },
//         {
//           spec_name: 'Collection',
//           spec_value: 'Forest Gnome',
//         },
//         {
//           spec_name: 'Product diameter',
//           spec_value: '27.3 cm',
//         },
//         {
//           spec_name: 'Care and cleaning instructions',
//           spec_value:
//             'Dishwasher and microwave safe. Although the dishes are safe for microwave use, they can get hot.',
//         },
//       ],
//       images: [
//         {
//           image: {
//             dimensions: {
//               width: 696,
//               height: 900,
//             },
//             alt: null,
//             copyright: null,
//             url: 'https://images.prismic.io/wizeline-academy/922ca6ac-249a-48aa-8d0e-821da1841cdb_1.jpeg?auto=compress,format',
//           },
//         },
//         {
//           image: {
//             dimensions: {
//               width: 696,
//               height: 900,
//             },
//             alt: null,
//             copyright: null,
//             url: 'https://images.prismic.io/wizeline-academy/583cb1b3-711f-4e3b-a382-57b2352d445e_2.jpeg?auto=compress,format',
//           },
//         },
//         {
//           image: {
//             dimensions: {
//               width: 696,
//               height: 900,
//             },
//             alt: null,
//             copyright: null,
//             url: 'https://images.prismic.io/wizeline-academy/cdf6b68f-cbae-4f6b-9d00-8ec3b6c2942a_3.jpeg?auto=compress,format',
//           },
//         },
//         {
//           image: {
//             dimensions: {
//               width: 696,
//               height: 900,
//             },
//             alt: null,
//             copyright: null,
//             url: 'https://images.prismic.io/wizeline-academy/00812db4-06c1-4b89-8f67-8a7cfdf23b82_4.jpeg?auto=compress,format',
//           },
//         },
//         {
//           image: {
//             dimensions: {
//               width: 696,
//               height: 900,
//             },
//             alt: null,
//             copyright: null,
//             url: 'https://images.prismic.io/wizeline-academy/8c62f060-274e-4418-a1ce-07a60485f2d5_5.jpeg?auto=compress,format',
//           },
//         },
//         {
//           image: {
//             dimensions: {
//               width: 696,
//               height: 900,
//             },
//             alt: null,
//             copyright: null,
//             url: 'https://images.prismic.io/wizeline-academy/723fb04b-d5be-4e43-aeb5-3080c5da8b1e_6.jpeg?auto=compress,format',
//           },
//         },
//       ],
//       stock: 76,
//       price: 66,
//     },
//     q: 3,
//   },
// ];
const CartPage = () => {
  // eslint-disable-next-line no-unused-vars
  const { cartState, setCartState } = useContext(CartContext) || '';

  //setCartState(testData); //DELETE THIS alogn with line 4-301

  if (!cartState || cartState.length == 0) {
    return (
      <div className="ProductsPage content">
        <div>No products in cart</div>
      </div>
    );
  }
  return (
    <div className="ProductsPage content">
      <Cart content={cartState} />
    </div>
  );
};

export default CartPage;
