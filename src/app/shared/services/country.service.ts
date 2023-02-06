import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  COUNTRIES_META_DATA = [
    {
      "Country": "Afghanistan",
      "Currency": "Afghan Afghani",
      "ISO-4217 Codes": "AFN"
    },
    {
      "Country": "Aland",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Albania",
      "Currency": "Albanian Lek",
      "ISO-4217 Codes": "ALL"
    },
    {
      "Country": "Algeria",
      "Currency": "Algerian Dinar",
      "ISO-4217 Codes": "DZD"
    },
    {
      "Country": "American Samoa",
      "Currency": "United States Dollar",
      "ISO-4217 Codes": "USD"
    },
    {
      "Country": "Andorra",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Angola",
      "Currency": "Angolan Kwanza",
      "ISO-4217 Codes": "AOA"
    },
    {
      "Country": "Anguilla",
      "Currency": "East Caribbean Dollar",
      "ISO-4217 Codes": "XCD"
    },
    {
      "Country": "Antigua and Barbuda",
      "Currency": "East Caribbean Dollar",
      "ISO-4217 Codes": "XCD"
    },
    {
      "Country": "Argentina",
      "Currency": "Argentine Peso",
      "ISO-4217 Codes": "ARS"
    },
    {
      "Country": "Armenia",
      "Currency": "Armenian Dram",
      "ISO-4217 Codes": "AMD"
    },
    {
      "Country": "Aruba",
      "Currency": "Aruban Florin",
      "ISO-4217 Codes": "AWG"
    },
    {
      "Country": "Australia",
      "Currency": "Australian Dollar",
      "ISO-4217 Codes": "AUD"
    },
    {
      "Country": "Austria",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Azerbaijan",
      "Currency": "Azerbaijani Manat",
      "ISO-4217 Codes": "AZN"
    },
    {
      "Country": "Bahamas",
      "Currency": "Bahamian Dollar",
      "ISO-4217 Codes": "BSD"
    },
    {
      "Country": "Bahrain",
      "Currency": "Bahraini Dinar",
      "ISO-4217 Codes": "BHD"
    },
    {
      "Country": "Bangladesh",
      "Currency": "Bangladeshi Taka",
      "ISO-4217 Codes": "BDT"
    },
    {
      "Country": "Barbados",
      "Currency": "Barbadian Dollar",
      "ISO-4217 Codes": "BBD"
    },
    {
      "Country": "Belarus",
      "Currency": "Belarusian Ruble",
      "ISO-4217 Codes": "BYR"
    },
    {
      "Country": "Belgium",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Belize",
      "Currency": "Belize Dollar",
      "ISO-4217 Codes": "BZD"
    },
    {
      "Country": "Benin",
      "Currency": "West African Cfa Franc",
      "ISO-4217 Codes": "XOF"
    },
    {
      "Country": "Bermuda",
      "Currency": "Bermudian Dollar",
      "ISO-4217 Codes": "BMD"
    },
    {
      "Country": "Bhutan",
      "Currency": "Bhutanese Ngultrum",
      "ISO-4217 Codes": "BTN"
    },
    {
      "Country": "Bolivia",
      "Currency": "Bolivian Boliviano",
      "ISO-4217 Codes": "BOB"
    },
    {
      "Country": "Bonaire",
      "Currency": "United States Dollar",
      "ISO-4217 Codes": "USD"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Currency": "Bosnia and Herzegovina Convertible Mark",
      "ISO-4217 Codes": "BAM"
    },
    {
      "Country": "Botswana",
      "Currency": "Botswana Pula",
      "ISO-4217 Codes": "BWP"
    },
    {
      "Country": "Bouvet Island",
      "Currency": "Norwegian Krone",
      "ISO-4217 Codes": "NOK"
    },
    {
      "Country": "Brazil",
      "Currency": "Brazilian Real",
      "ISO-4217 Codes": "BRL"
    },
    {
      "Country": "British Indian Ocean Territory",
      "Currency": "United States Dollar",
      "ISO-4217 Codes": "USD"
    },
    {
      "Country": "British Virgin Islands",
      "Currency": "United States Dollar",
      "ISO-4217 Codes": "USD"
    },
    {
      "Country": "Brunei",
      "Currency": "Brunei Dollar",
      "ISO-4217 Codes": "BND"
    },
    {
      "Country": "Bulgaria",
      "Currency": "Bulgarian Lev",
      "ISO-4217 Codes": "BGN"
    },
    {
      "Country": "Burkina Faso",
      "Currency": "West African Cfa Franc",
      "ISO-4217 Codes": "XOF"
    },
    {
      "Country": "Burundi",
      "Currency": "Burundian Franc",
      "ISO-4217 Codes": "BIF"
    },
    {
      "Country": "Cambodia",
      "Currency": "Cambodian Riel",
      "ISO-4217 Codes": "KHR"
    },
    {
      "Country": "Cameroon",
      "Currency": "Central African Cfa Franc",
      "ISO-4217 Codes": "XAF"
    },
    {
      "Country": "Canada",
      "Currency": "Canadian Dollar",
      "ISO-4217 Codes": "CAD"
    },
    {
      "Country": "Cape Verde",
      "Currency": "Cape Verdean Escudo",
      "ISO-4217 Codes": "CVE"
    },
    {
      "Country": "Cayman Islands",
      "Currency": "Cayman Islands Dollar",
      "ISO-4217 Codes": "KYD"
    },
    {
      "Country": "Central African Republic",
      "Currency": "Central African Cfa Franc",
      "ISO-4217 Codes": "XAF"
    },
    {
      "Country": "Chad",
      "Currency": "Central African Cfa Franc",
      "ISO-4217 Codes": "XAF"
    },
    {
      "Country": "Chile",
      "Currency": "Chilean Peso",
      "ISO-4217 Codes": "CLP"
    },
    {
      "Country": "China",
      "Currency": "Chinese Renminbi Yuan",
      "ISO-4217 Codes": "CNY"
    },
    {
      "Country": "Christmas Island",
      "Currency": "Australian Dollar",
      "ISO-4217 Codes": "AUD"
    },
    {
      "Country": "Cocos (Keeling) Islands",
      "Currency": "Australian Dollar",
      "ISO-4217 Codes": "AUD"
    },
    {
      "Country": "Colombia",
      "Currency": "Colombian Peso",
      "ISO-4217 Codes": "COP"
    },
    {
      "Country": "Comoros",
      "Currency": "Comorian Franc",
      "ISO-4217 Codes": "KMF"
    },
    {
      "Country": "Cook Islands",
      "Currency": "New Zealand Dollar",
      "ISO-4217 Codes": "NZD"
    },
    {
      "Country": "Costa Rica",
      "Currency": "Costa Rican Colón",
      "ISO-4217 Codes": "CRC"
    },
    {
      "Country": "Croatia",
      "Currency": "Croatian Kuna",
      "ISO-4217 Codes": "HRK"
    },
    {
      "Country": "Cuba",
      "Currency": "Cuban Peso",
      "ISO-4217 Codes": "CUP"
    },
    {
      "Country": "Curacao",
      "Currency": "Netherlands Antillean Gulden",
      "ISO-4217 Codes": "ANG"
    },
    {
      "Country": "Cyprus",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Czech Republic",
      "Currency": "Czech Koruna",
      "ISO-4217 Codes": "CZK"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Currency": "Congolese Franc",
      "ISO-4217 Codes": "CDF"
    },
    {
      "Country": "Denmark",
      "Currency": "Danish Krone",
      "ISO-4217 Codes": "DKK"
    },
    {
      "Country": "Djibouti",
      "Currency": "Djiboutian Franc",
      "ISO-4217 Codes": "DJF"
    },
    {
      "Country": "Dominica",
      "Currency": "East Caribbean Dollar",
      "ISO-4217 Codes": "XCD"
    },
    {
      "Country": "Dominican Republic",
      "Currency": "Dominican Peso",
      "ISO-4217 Codes": "DOP"
    },
    {
      "Country": "East Timor",
      "Currency": "United States Dollar",
      "ISO-4217 Codes": "USD"
    },
    {
      "Country": "Ecuador",
      "Currency": "United States Dollar",
      "ISO-4217 Codes": "USD"
    },
    {
      "Country": "Egypt",
      "Currency": "Egyptian Pound",
      "ISO-4217 Codes": "EGP"
    },
    {
      "Country": "El Salvador",
      "Currency": "Salvadoran Colón",
      "ISO-4217 Codes": "SVC"
    },
    {
      "Country": "Equatorial Guinea",
      "Currency": "Central African Cfa Franc",
      "ISO-4217 Codes": "XAF"
    },
    {
      "Country": "Eritrea",
      "Currency": "Eritrean Nakfa",
      "ISO-4217 Codes": "ERN"
    },
    {
      "Country": "Estonia",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Ethiopia",
      "Currency": "Ethiopian Birr",
      "ISO-4217 Codes": "ETB"
    },
    {
      "Country": "Falkland Islands",
      "Currency": "Falkland Pound",
      "ISO-4217 Codes": "FKP"
    },
    {
      "Country": "Faroe Islands",
      "Currency": "Danish Krone",
      "ISO-4217 Codes": "DKK"
    },
    {
      "Country": "Fiji",
      "Currency": "Fijian Dollar",
      "ISO-4217 Codes": "FJD"
    },
    {
      "Country": "Finland",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "France",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "French Guiana",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "French Polynesia",
      "Currency": "Cfp Franc",
      "ISO-4217 Codes": "XPF"
    },
    {
      "Country": "French Southern Territories",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Gabon",
      "Currency": "Central African Cfa Franc",
      "ISO-4217 Codes": "XAF"
    },
    {
      "Country": "Gambia",
      "Currency": "Gambian Dalasi",
      "ISO-4217 Codes": "GMD"
    },
    {
      "Country": "Georgia",
      "Currency": "Georgian Lari",
      "ISO-4217 Codes": "GEL"
    },
    {
      "Country": "Germany",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Ghana",
      "Currency": "Ghanaian Cedi",
      "ISO-4217 Codes": "GHS"
    },
    {
      "Country": "Gibraltar",
      "Currency": "Gibraltar Pound",
      "ISO-4217 Codes": "GIP"
    },
    {
      "Country": "Greece",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Greenland",
      "Currency": "Danish Krone",
      "ISO-4217 Codes": "DKK"
    },
    {
      "Country": "Grenada",
      "Currency": "East Caribbean Dollar",
      "ISO-4217 Codes": "XCD"
    },
    {
      "Country": "Guadeloupe",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Guam",
      "Currency": "United States Dollar",
      "ISO-4217 Codes": "USD"
    },
    {
      "Country": "Guatemala",
      "Currency": "Guatemalan Quetzal",
      "ISO-4217 Codes": "GTQ"
    },
    {
      "Country": "Guernsey",
      "Currency": "British Pound",
      "ISO-4217 Codes": "GBP"
    },
    {
      "Country": "Guinea",
      "Currency": "Guinean Franc",
      "ISO-4217 Codes": "GNF"
    },
    {
      "Country": "Guinea-Bissau",
      "Currency": "West African Cfa Franc",
      "ISO-4217 Codes": "XOF"
    },
    {
      "Country": "Guyana",
      "Currency": "Guyanese Dollar",
      "ISO-4217 Codes": "GYD"
    },
    {
      "Country": "Haiti",
      "Currency": "Haitian Gourde",
      "ISO-4217 Codes": "HTG"
    },
    {
      "Country": "Heard Island and McDonald Islands",
      "Currency": "Australian Dollar",
      "ISO-4217 Codes": "AUD"
    },
    {
      "Country": "Honduras",
      "Currency": "Honduran Lempira",
      "ISO-4217 Codes": "HNL"
    },
    {
      "Country": "Hong Kong",
      "Currency": "Hong Kong Dollar",
      "ISO-4217 Codes": "HKD"
    },
    {
      "Country": "Hungary",
      "Currency": "Hungarian Forint",
      "ISO-4217 Codes": "HUF"
    },
    {
      "Country": "Iceland",
      "Currency": "Icelandic Króna",
      "ISO-4217 Codes": "ISK"
    },
    {
      "Country": "India",
      "Currency": "Indian Rupee",
      "ISO-4217 Codes": "INR"
    },
    {
      "Country": "Indonesia",
      "Currency": "Indonesian Rupiah",
      "ISO-4217 Codes": "IDR"
    },
    {
      "Country": "Iran",
      "Currency": "Iranian Rial",
      "ISO-4217 Codes": "IRR"
    },
    {
      "Country": "Iraq",
      "Currency": "Iraqi Dinar",
      "ISO-4217 Codes": "IQD"
    },
    {
      "Country": "Ireland",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Isle of Man",
      "Currency": "British Pound",
      "ISO-4217 Codes": "GBP"
    },
    {
      "Country": "Israel",
      "Currency": "Israeli New Sheqel",
      "ISO-4217 Codes": "ILS"
    },
    {
      "Country": "Italy",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Ivory Coast",
      "Currency": "West African Cfa Franc",
      "ISO-4217 Codes": "XOF"
    },
    {
      "Country": "Jamaica",
      "Currency": "Jamaican Dollar",
      "ISO-4217 Codes": "JMD"
    },
    {
      "Country": "Japan",
      "Currency": "Japanese Yen",
      "ISO-4217 Codes": "JPY"
    },
    {
      "Country": "Jersey",
      "Currency": "British Pound",
      "ISO-4217 Codes": "GBP"
    },
    {
      "Country": "Jordan",
      "Currency": "Jordanian Dinar",
      "ISO-4217 Codes": "JOD"
    },
    {
      "Country": "Kazakhstan",
      "Currency": "Kazakhstani Tenge",
      "ISO-4217 Codes": "KZT"
    },
    {
      "Country": "Kenya",
      "Currency": "Kenyan Shilling",
      "ISO-4217 Codes": "KES"
    },
    {
      "Country": "Kiribati",
      "Currency": "Australian Dollar",
      "ISO-4217 Codes": "AUD"
    },
    {
      "Country": "Kosovo",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Kuwait",
      "Currency": "Kuwaiti Dinar",
      "ISO-4217 Codes": "KWD"
    },
    {
      "Country": "Kyrgyzstan",
      "Currency": "Kyrgyzstani Som",
      "ISO-4217 Codes": "KGS"
    },
    {
      "Country": "Laos",
      "Currency": "Lao Kip",
      "ISO-4217 Codes": "LAK"
    },
    {
      "Country": "Latvia",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Lebanon",
      "Currency": "Lebanese Pound",
      "ISO-4217 Codes": "LBP"
    },
    {
      "Country": "Lesotho",
      "Currency": "Lesotho Loti",
      "ISO-4217 Codes": "LSL"
    },
    {
      "Country": "Liberia",
      "Currency": "Liberian Dollar",
      "ISO-4217 Codes": "LRD"
    },
    {
      "Country": "Libya",
      "Currency": "Libyan Dinar",
      "ISO-4217 Codes": "LYD"
    },
    {
      "Country": "Liechtenstein",
      "Currency": "Swiss Franc",
      "ISO-4217 Codes": "CHF"
    },
    {
      "Country": "Lithuania",
      "Currency": "Lithuanian Litas",
      "ISO-4217 Codes": "LTL"
    },
    {
      "Country": "Luxembourg",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Macao",
      "Currency": "Macanese Pataca",
      "ISO-4217 Codes": "MOP"
    },
    {
      "Country": "Macedonia",
      "Currency": "Macedonian Denar",
      "ISO-4217 Codes": "MKD"
    },
    {
      "Country": "Madagascar",
      "Currency": "Malagasy Ariary",
      "ISO-4217 Codes": "MGA"
    },
    {
      "Country": "Malawi",
      "Currency": "Malawian Kwacha",
      "ISO-4217 Codes": "MWK"
    },
    {
      "Country": "Malaysia",
      "Currency": "Malaysian Ringgit",
      "ISO-4217 Codes": "MYR"
    },
    {
      "Country": "Maldives",
      "Currency": "Maldivian Rufiyaa",
      "ISO-4217 Codes": "MVR"
    },
    {
      "Country": "Mali",
      "Currency": "West African Cfa Franc",
      "ISO-4217 Codes": "XOF"
    },
    {
      "Country": "Malta",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Marshall Islands",
      "Currency": "United States Dollar",
      "ISO-4217 Codes": "USD"
    },
    {
      "Country": "Martinique",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Mauritania",
      "Currency": "Mauritanian Ouguiya",
      "ISO-4217 Codes": "MRO"
    },
    {
      "Country": "Mauritius",
      "Currency": "Mauritian Rupee",
      "ISO-4217 Codes": "MUR"
    },
    {
      "Country": "Mayotte",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Mexico",
      "Currency": "Mexican Peso",
      "ISO-4217 Codes": "MXN"
    },
    {
      "Country": "Micronesia",
      "Currency": "United States Dollar",
      "ISO-4217 Codes": "USD"
    },
    {
      "Country": "Moldova",
      "Currency": "Moldovan Leu",
      "ISO-4217 Codes": "MDL"
    },
    {
      "Country": "Monaco",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Mongolia",
      "Currency": "Mongolian Tögrög",
      "ISO-4217 Codes": "MNT"
    },
    {
      "Country": "Montenegro",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Montserrat",
      "Currency": "East Caribbean Dollar",
      "ISO-4217 Codes": "XCD"
    },
    {
      "Country": "Morocco",
      "Currency": "Moroccan Dirham",
      "ISO-4217 Codes": "MAD"
    },
    {
      "Country": "Mozambique",
      "Currency": "Mozambican Metical",
      "ISO-4217 Codes": "MZN"
    },
    {
      "Country": "Myanmar (Burma)",
      "Currency": "Myanmar Kyat",
      "ISO-4217 Codes": "MMK"
    },
    {
      "Country": "Namibia",
      "Currency": "Namibian Dollar",
      "ISO-4217 Codes": "NAD"
    },
    {
      "Country": "Nauru",
      "Currency": "Australian Dollar",
      "ISO-4217 Codes": "AUD"
    },
    {
      "Country": "Nepal",
      "Currency": "Nepalese Rupee",
      "ISO-4217 Codes": "NPR"
    },
    {
      "Country": "Netherlands",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "New Caledonia",
      "Currency": "Cfp Franc",
      "ISO-4217 Codes": "XPF"
    },
    {
      "Country": "New Zealand",
      "Currency": "New Zealand Dollar",
      "ISO-4217 Codes": "NZD"
    },
    {
      "Country": "Nicaragua",
      "Currency": "Nicaraguan Córdoba",
      "ISO-4217 Codes": "NIO"
    },
    {
      "Country": "Niger",
      "Currency": "West African Cfa Franc",
      "ISO-4217 Codes": "XOF"
    },
    {
      "Country": "Nigeria",
      "Currency": "Nigerian Naira",
      "ISO-4217 Codes": "NGN"
    },
    {
      "Country": "Niue",
      "Currency": "New Zealand Dollar",
      "ISO-4217 Codes": "NZD"
    },
    {
      "Country": "Norfolk Island",
      "Currency": "Australian Dollar",
      "ISO-4217 Codes": "AUD"
    },
    {
      "Country": "North Korea",
      "Currency": "North Korean Won",
      "ISO-4217 Codes": "KPW"
    },
    {
      "Country": "Northern Mariana Islands",
      "Currency": "United States Dollar",
      "ISO-4217 Codes": "USD"
    },
    {
      "Country": "Norway",
      "Currency": "Norwegian Krone",
      "ISO-4217 Codes": "NOK"
    },
    {
      "Country": "Oman",
      "Currency": "Omani Rial",
      "ISO-4217 Codes": "OMR"
    },
    {
      "Country": "Pakistan",
      "Currency": "Pakistani Rupee",
      "ISO-4217 Codes": "PKR"
    },
    {
      "Country": "Palau",
      "Currency": "United States Dollar",
      "ISO-4217 Codes": "USD"
    },
    {
      "Country": "Palestine",
      "Currency": "Israeli New Sheqel",
      "ISO-4217 Codes": "ILS"
    },
    {
      "Country": "Panama",
      "Currency": "Panamanian Balboa",
      "ISO-4217 Codes": "PAB"
    },
    {
      "Country": "Papua New Guinea",
      "Currency": "Papua New Guinean Kina",
      "ISO-4217 Codes": "PGK"
    },
    {
      "Country": "Paraguay",
      "Currency": "Paraguayan Guaraní",
      "ISO-4217 Codes": "PYG"
    },
    {
      "Country": "Peru",
      "Currency": "Peruvian Sol",
      "ISO-4217 Codes": "PEN"
    },
    {
      "Country": "Philippines",
      "Currency": "Philippine Peso",
      "ISO-4217 Codes": "PHP"
    },
    {
      "Country": "Pitcairn Islands",
      "Currency": "New Zealand Dollar",
      "ISO-4217 Codes": "NZD"
    },
    {
      "Country": "Poland",
      "Currency": "Polish Złoty",
      "ISO-4217 Codes": "PLN"
    },
    {
      "Country": "Portugal",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Puerto Rico",
      "Currency": "United States Dollar",
      "ISO-4217 Codes": "USD"
    },
    {
      "Country": "Qatar",
      "Currency": "Qatari Riyal",
      "ISO-4217 Codes": "QAR"
    },
    {
      "Country": "Republic of the Congo",
      "Currency": "Central African Cfa Franc",
      "ISO-4217 Codes": "XAF"
    },
    {
      "Country": "Réunion",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Romania",
      "Currency": "Romanian Leu",
      "ISO-4217 Codes": "RON"
    },
    {
      "Country": "Russia",
      "Currency": "Russian Ruble",
      "ISO-4217 Codes": "RUB"
    },
    {
      "Country": "Rwanda",
      "Currency": "Rwandan Franc",
      "ISO-4217 Codes": "RWF"
    },
    {
      "Country": "Saint Barthélemy",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Saint Helena",
      "Currency": "Saint Helenian Pound",
      "ISO-4217 Codes": "SHP"
    },
    {
      "Country": "Saint Kitts and Nevis",
      "Currency": "East Caribbean Dollar",
      "ISO-4217 Codes": "XCD"
    },
    {
      "Country": "Saint Lucia",
      "Currency": "East Caribbean Dollar",
      "ISO-4217 Codes": "XCD"
    },
    {
      "Country": "Saint Martin",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Saint Pierre and Miquelon",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Currency": "East Caribbean Dollar",
      "ISO-4217 Codes": "XCD"
    },
    {
      "Country": "Samoa",
      "Currency": "Samoan Tala",
      "ISO-4217 Codes": "WST"
    },
    {
      "Country": "San Marino",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "São Tomé and Príncipe",
      "Currency": "São Tomé and Príncipe Dobra",
      "ISO-4217 Codes": "STD"
    },
    {
      "Country": "Saudi Arabia",
      "Currency": "Saudi Riyal",
      "ISO-4217 Codes": "SAR"
    },
    {
      "Country": "Senegal",
      "Currency": "West African Cfa Franc",
      "ISO-4217 Codes": "XOF"
    },
    {
      "Country": "Serbia",
      "Currency": "Serbian Dinar",
      "ISO-4217 Codes": "RSD"
    },
    {
      "Country": "Seychelles",
      "Currency": "Seychellois Rupee",
      "ISO-4217 Codes": "SCR"
    },
    {
      "Country": "Sierra Leone",
      "Currency": "Sierra Leonean Leone",
      "ISO-4217 Codes": "SLL"
    },
    {
      "Country": "Singapore",
      "Currency": "Singapore Dollar",
      "ISO-4217 Codes": "SGD"
    },
    {
      "Country": "Sint Maarten",
      "Currency": "Netherlands Antillean Gulden",
      "ISO-4217 Codes": "ANG"
    },
    {
      "Country": "Slovakia",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Slovenia",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Solomon Islands",
      "Currency": "Solomon Islands Dollar",
      "ISO-4217 Codes": "SBD"
    },
    {
      "Country": "Somalia",
      "Currency": "Somali Shilling",
      "ISO-4217 Codes": "SOS"
    },
    {
      "Country": "South Africa",
      "Currency": "South African Rand",
      "ISO-4217 Codes": "ZAR"
    },
    {
      "Country": "South Georgia and the South Sandwich Islands",
      "Currency": "British Pound",
      "ISO-4217 Codes": "GBP"
    },
    {
      "Country": "South Korea",
      "Currency": "South Korean Won",
      "ISO-4217 Codes": "KRW"
    },
    {
      "Country": "South Sudan",
      "Currency": "South Sudanese Pound",
      "ISO-4217 Codes": "SSP"
    },
    {
      "Country": "Spain",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Sri Lanka",
      "Currency": "Sri Lankan Rupee",
      "ISO-4217 Codes": "LKR"
    },
    {
      "Country": "Sudan",
      "Currency": "Sudanese Pound",
      "ISO-4217 Codes": "SDG"
    },
    {
      "Country": "Suriname",
      "Currency": "Surinamese Dollar",
      "ISO-4217 Codes": "SRD"
    },
    {
      "Country": "Svalbard and Jan Mayen",
      "Currency": "Norwegian Krone",
      "ISO-4217 Codes": "NOK"
    },
    {
      "Country": "Swaziland",
      "Currency": "Swazi Lilangeni",
      "ISO-4217 Codes": "SZL"
    },
    {
      "Country": "Sweden",
      "Currency": "Swedish Krona",
      "ISO-4217 Codes": "SEK"
    },
    {
      "Country": "Switzerland",
      "Currency": "Swiss Franc",
      "ISO-4217 Codes": "CHF"
    },
    {
      "Country": "Syria",
      "Currency": "Syrian Pound",
      "ISO-4217 Codes": "SYP"
    },
    {
      "Country": "Taiwan",
      "Currency": "New Taiwan Dollar",
      "ISO-4217 Codes": "TWD"
    },
    {
      "Country": "Tajikistan",
      "Currency": "Tajikistani Somoni",
      "ISO-4217 Codes": "TJS"
    },
    {
      "Country": "Tanzania",
      "Currency": "Tanzanian Shilling",
      "ISO-4217 Codes": "TZS"
    },
    {
      "Country": "Thailand",
      "Currency": "Thai Baht",
      "ISO-4217 Codes": "THB"
    },
    {
      "Country": "Togo",
      "Currency": "West African Cfa Franc",
      "ISO-4217 Codes": "XOF"
    },
    {
      "Country": "Tokelau",
      "Currency": "New Zealand Dollar",
      "ISO-4217 Codes": "NZD"
    },
    {
      "Country": "Tonga",
      "Currency": "Tongan Paʻanga",
      "ISO-4217 Codes": "TOP"
    },
    {
      "Country": "Trinidad and Tobago",
      "Currency": "Trinidad and Tobago Dollar",
      "ISO-4217 Codes": "TTD"
    },
    {
      "Country": "Tunisia",
      "Currency": "Tunisian Dinar",
      "ISO-4217 Codes": "TND"
    },
    {
      "Country": "Turkey",
      "Currency": "Turkish Lira",
      "ISO-4217 Codes": "TRY"
    },
    {
      "Country": "Turkmenistan",
      "Currency": "Turkmenistani Manat",
      "ISO-4217 Codes": "TMT"
    },
    {
      "Country": "Turks and Caicos Islands",
      "Currency": "United States Dollar",
      "ISO-4217 Codes": "USD"
    },
    {
      "Country": "Tuvalu",
      "Currency": "Australian Dollar",
      "ISO-4217 Codes": "AUD"
    },
    {
      "Country": "U.S. Minor Outlying Islands",
      "Currency": "United States Dollar",
      "ISO-4217 Codes": "USD"
    },
    {
      "Country": "U.S. Virgin Islands",
      "Currency": "United States Dollar",
      "ISO-4217 Codes": "USD"
    },
    {
      "Country": "Uganda",
      "Currency": "Ugandan Shilling",
      "ISO-4217 Codes": "UGX"
    },
    {
      "Country": "Ukraine",
      "Currency": "Ukrainian Hryvnia",
      "ISO-4217 Codes": "UAH"
    },
    {
      "Country": "United Arab Emirates",
      "Currency": "United Arab Emirates Dirham",
      "ISO-4217 Codes": "AED"
    },
    {
      "Country": "United Kingdom",
      "Currency": "British Pound",
      "ISO-4217 Codes": "GBP"
    },
    {
      "Country": "United States",
      "Currency": "United States Dollar",
      "ISO-4217 Codes": "USD"
    },
    {
      "Country": "Uruguay",
      "Currency": "Uruguayan Peso",
      "ISO-4217 Codes": "UYU"
    },
    {
      "Country": "Uzbekistan",
      "Currency": "Uzbekistan Som",
      "ISO-4217 Codes": "UZS"
    },
    {
      "Country": "Vanuatu",
      "Currency": "Vanuatu Vatu",
      "ISO-4217 Codes": "VUV"
    },
    {
      "Country": "Vatican City",
      "Currency": "Euro",
      "ISO-4217 Codes": "EUR"
    },
    {
      "Country": "Venezuela",
      "Currency": "Venezuelan Bolívar",
      "ISO-4217 Codes": "VEF"
    },
    {
      "Country": "Vietnam",
      "Currency": "Vietnamese Đồng",
      "ISO-4217 Codes": "VND"
    },
    {
      "Country": "Wallis and Futuna",
      "Currency": "Cfp Franc",
      "ISO-4217 Codes": "XPF"
    },
    {
      "Country": "Western Sahara",
      "Currency": "Moroccan Dirham",
      "ISO-4217 Codes": "MAD"
    },
    {
      "Country": "Yemen",
      "Currency": "Yemeni Rial",
      "ISO-4217 Codes": "YER"
    },
    {
      "Country": "Zambia",
      "Currency": "Zambian Kwacha",
      "ISO-4217 Codes": "ZMK"
    },
    {
      "Country": "Zimbabwe",
      "Currency": "Zimbabwean Dollar",
      "ISO-4217 Codes": "ZWL"
    }
  ]
  constructor() { }
  getCountryNames() {
    return this.COUNTRIES_META_DATA.map(country => country.Country)
  }
}
