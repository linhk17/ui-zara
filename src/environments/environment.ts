// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	TOKEN: 'admin-dev-token',
	REFRESH_TOKEN: 'admin-dev-refresh-token',
	API: 'https://dev-api.digidocsa.com/v1',
	S3_API_MEDIA: 'https://digidocs-media-dev.s3.me-south-1.amazonaws.com',
	GOOGLE_API_KEY: 'AIzaSyCKjBYFkGsMKg6zM1oygxfE6XlGGccM9w0'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
