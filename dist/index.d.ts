import { countriesArraySortedByName, Country, CountryCode, countryCodeToCountryDataMap, CountryMap, CallingCodeToCountryCodeMap, callingCodeToCountryCodeMap } from "helpers";
export declare const getCountryCallingCode: (code: CountryCode) => string;
export declare const getCountryFlag: (code: CountryCode) => string;
export declare const getCountries: () => Country[];
export { countryCodeToCountryDataMap, countriesArraySortedByName, callingCodeToCountryCodeMap };
export type { Country, CountryCode, CountryMap, CallingCodeToCountryCodeMap };
