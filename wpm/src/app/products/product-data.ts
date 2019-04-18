import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {

  createDb() {
    const products: Product[] = [
      {
        'id': 1,
        'productName': 'Bat Mobile',
        'productCode': 'GDN-0011',
        'releaseDate': 'March 19, 2018',
        'description': 'Car driven by  Batman. ',
        'price': 19.95,
        'starRating': 3.2,
        'imageUrl': './assets/images/batmobile.jpg',
        'tags': ['vehicle', 'car']
      },
      {
        'id': 2,
        'productName': 'Bat Pod',
        'productCode': 'GDN-0023',
        'releaseDate': 'March 18, 2018',
        'description': 'Bike driven by  Batman',
        'price': 32.99,
        'starRating': 4.2,
        'imageUrl': './assets/images/batpod.jpg'
      },
      {
        'id': 5,
        'productName': 'Bat Wing',
        'productCode': 'TBX-0048',
        'releaseDate': 'May 21, 2018',
        'description': 'Fighter plane flown by Batman',
        'price': 8.9,
        'starRating': 4.8,
        'imageUrl': './assets/images/batwing.png',
        'tags': ['plane', 'batman', 'wings']
      },
      {
        'id': 8,
        'productName': 'Batarang',
        'productCode': 'TBX-0022',
        'releaseDate': 'May 15, 2018',
        'description': 'Custom Batman weaponized boomerangs',
        'price': 11.55,
        'starRating': 3.7,
        'imageUrl': './assets/images/batarang.jpg'
      }
    ];
    return { products };
  }
}
