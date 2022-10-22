export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
  price: number;
  badgeType: number
  badge: boolean;
  productOfTheWeek: boolean;
  originalPrice: number;
//   "method": {
//     "mash_temp": [
//       {
//         "temp": {
//           "value": number,
//           "unit": string,
//         },
//         "duration": number,
//       }
//     ],
//     "fermentation": {
//       "temp": {
//         "value": number,
//         "unit": string,
//       }
//     },
//   },
//   "ingredients": {
//     "malt": any
//     "hops": any
//     "yeast": any
// }
}
