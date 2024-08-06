// @/src/index.ts

import { 
    countriesArraySortedByName,
    Country, 
    CountryCode, 
    countryCodeToCountryDataMap, 
    CountryMap, 
    CallingCodeToCountryCodeMap, 
    callingCodeToCountryCodeMap 
} from "helpers";

export const getCountry = (code: CountryCode): Country => {
    return countryCodeToCountryDataMap[code];
}

export const getCountryCallingCode = (code: CountryCode): string => {
    return countryCodeToCountryDataMap[code].callingCode;
}

export const getCountryByCallingAndAreaCode = (callingCode: string): CountryCode => {
    return callingCodeToCountryCodeMap[callingCode];
}

export const getCountryFlag = (code: CountryCode): string => {
    return countryCodeToCountryDataMap[code].flag;
}

export const getCountries = (): Country[] => {
    return countriesArraySortedByName;
}

export { countryCodeToCountryDataMap, countriesArraySortedByName, callingCodeToCountryCodeMap };

export type { Country, CountryCode, CountryMap, CallingCodeToCountryCodeMap };
