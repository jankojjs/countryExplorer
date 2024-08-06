# Country Explorer

A TypeScript package for retrieving country data including country names, codes, flags, and calling codes. This package is designed to make it easy to work with country information in your JavaScript and TypeScript projects.

## Features

- **Retrieve Country Calling Codes:** Get the calling code for any country.
- **Get Country Flags:** Access the emoji flag for any country.
- **Get Sorted List of Countries:** Obtain a sorted list of countries by name.
- **Access Country Data Map:** Directly access detailed country information.

## Usage
### Importing Functions
You can import and use the functions and types from the package as follows:

```typescript
import { 
    getCountryCallingCode, 
    getCountryFlag, 
    getCountries, 
    getCountryByCallingAndAreaCode, 
    getCountry 
} from 'country-explorer';
import type { CountryCode, Country } from 'country-explorer';
```


#### Get Country Calling Code
```typescript
const code: CountryCode = 'US';
const callingCode = getCountryCallingCode(code);
console.log(callingCode); // Output: "1"
```


#### Get Country By Country Code
```typescript
const code: CountryCode = 'US';
const country = getCountry(code);
console.log(country); // Output: { countryCode: 'US', flag: '🇺🇸', callingCode: '1', name: 'United States' }
```


#### Get Country By Calling Code And Area Code
```typescript
const callingCode = "381";
const countryCode = getCountryByCallingAndAreaCode(callingCode);
console.log(countryCode); // Output: "RS"
```

#### Get Country Flag
```typescript
const flag = getCountryFlag(code);
console.log(flag); // Output: 🇺🇸
```

## Contributing

If you want to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

Please ensure that your code adheres to the existing style and includes tests where applicable. 

## License

This project is licensed under the MIT License.

## Contact

For any questions or issues, please contact [Janko Stanic](mailto:jjsolutions034@gmail.com).
