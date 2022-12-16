// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL_AUCTION: "http://localhost:8080/api/v1/auction",
  api_url_list_price_step: 'http://localhost:8080/api/v1/pricestep',
  api_url_list_category: 'http://localhost:8080/api/v1/category',
  api_url_list_user: 'http://localhost:8080/api/v1/users',
  api_url_list_img_url: 'http://localhost:8080/api/v1/users/{id}',
  API_URL_AUCTION: "http://localhost:8080/auction/api",
  api_url_order_status: 'http://localhost:8080/api/v1/payments',
  categoryUrl: "http://localhost:8080/api/v1/products/category",
  priceStepUrl:  "http://localhost:8080/api/v1/products/priceStep",
  transactionUrl: "http://localhost:8080/auction/api/transaction",
  productSearchUrl: "http://localhost:8080/api/v1/products/search",
  userUrl: "http://localhost:8080/api/user/v1/"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
