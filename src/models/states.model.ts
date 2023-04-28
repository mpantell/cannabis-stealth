export interface state {
    state: string;
    abbreviation: string;
    recreational: string;
    recYear: number | null;
    medical: string;
    medYear: number | null;    
}

export class states {
    stateList:state[] = [
        {
            "state": "California",
            "abbreviation": "CA",
            "recreational": "Y",
            "recYear": 2016,
            "medical": "Y",
            "medYear": 1996
        },
        {
            "state": "Alaska",
            "abbreviation": "AK",
            "recreational": "Y",
            "recYear": 2014,
            "medical": "Y",
            "medYear": 1998
        },
        {
            "state": "Nevada",
            "abbreviation": "NV",
            "recreational": "Y",
            "recYear": 2016,
            "medical": "Y",
            "medYear": 1998
        },
        {
            "state": "Oregon",
            "abbreviation": "OR",
            "recreational": "Y",
            "recYear": 2014,
            "medical": "Y",
            "medYear": 1998
        },
        {
            "state": "Washington",
            "abbreviation": "WA",
            "recreational": "Y",
            "recYear": 2012,
            "medical": "Y",
            "medYear": 1998
        },
        {
            "state": "Maine",
            "abbreviation": "ME",
            "recreational": "Y",
            "recYear": 2016,
            "medical": "Y",
            "medYear": 1999
        },
        {
            "state": "Colorado",
            "abbreviation": "CO",
            "recreational": "Y",
            "recYear": 2012,
            "medical": "Y",
            "medYear": 2000
        },
        {
            "state": "Hawaii",
            "abbreviation": "HI",
            "recreational": "No",
            "recYear": null,
            "medical": "Y",
            "medYear": 2000
        },
        {
            "state": "Montana",
            "abbreviation": "MT",
            "recreational": "Y",
            "recYear": 2020,
            "medical": "Y",
            "medYear": 2004
        },
        {
            "state": "Vermont",
            "abbreviation": "VT",
            "recreational": "Y",
            "recYear": 2020,
            "medical": "Y",
            "medYear": 2004
        },
        {
            "state": "Rhode Island",
            "abbreviation": "RI",
            "recreational": "Y",
            "recYear": 2022,
            "medical": "Y",
            "medYear": 2006
        },
        {
            "state": "New Mexico",
            "abbreviation": "NM",
            "recreational": "Y",
            "recYear": 2021,
            "medical": "Y",
            "medYear": 2007
        },
        {
            "state": "Michigan",
            "abbreviation": "MI",
            "recreational": "Y",
            "recYear": 2018,
            "medical": "Y",
            "medYear": 2008
        },
        {
            "state": "Arizona",
            "abbreviation": "AZ",
            "recreational": "Y",
            "recYear": 2020,
            "medical": "Y",
            "medYear": 2010
        },
        {
            "state": "New Jersey",
            "abbreviation": "NJ",
            "recreational": "Y",
            "recYear": 2020,
            "medical": "Y",
            "medYear": 2010
        },
        {
            "state": "Delaware",
            "abbreviation": "DE",
            "recreational": "Y",
            "recYear": 2023,
            "medical": "Y",
            "medYear": 2011
        },
        {
            "state": "Connecticut",
            "abbreviation": "CT",
            "recreational": "Y",
            "recYear": 2021,
            "medical": "Y",
            "medYear": 2012
        },
        {
            "state": "Massachusetts",
            "abbreviation": "MA",
            "recreational": "Y",
            "recYear": 2016,
            "medical": "Y",
            "medYear": 2012
        },
        {
            "state": "Illinois",
            "abbreviation": "IL",
            "recreational": "Y",
            "recYear": 2019,
            "medical": "Y",
            "medYear": 2013
        },
        {
            "state": "Maryland",
            "abbreviation": "MD",
            "recreational": "Y",
            "recYear": 2022,
            "medical": "Y",
            "medYear": 2013
        },
        {
            "state": "New Hampshire",
            "abbreviation": "NH",
            "recreational": "No",
            "recYear": null,
            "medical": "Y",
            "medYear": 2013
        },
        {
            "state": "Minnesota",
            "abbreviation": "MN",
            "recreational": "No",
            "recYear": null,
            "medical": "Y",
            "medYear": 2014
        },
        {
            "state": "New York",
            "abbreviation": "NY",
            "recreational": "Y",
            "recYear": 2021,
            "medical": "Y",
            "medYear": 2014
        },
        {
            "state": "Georgia",
            "abbreviation": "GA",
            "recreational": "No",
            "recYear": null,
            "medical": "Y",
            "medYear": 2015
        },
        {
            "state": "Louisiana",
            "abbreviation": "LA",
            "recreational": "No",
            "recYear": null,
            "medical": "Y",
            "medYear": 2015
        },
        {
            "state": "Arkansas",
            "abbreviation": "AR",
            "recreational": "No",
            "recYear": null,
            "medical": "Y",
            "medYear": 2016
        },
        {
            "state": "Florida",
            "abbreviation": "FL",
            "recreational": "No",
            "recYear": null,
            "medical": "Y",
            "medYear": 2016
        },
        {
            "state": "North Dakota",
            "abbreviation": "ND",
            "recreational": "No",
            "recYear": null,
            "medical": "Y",
            "medYear": 2016
        },
        {
            "state": "Ohio",
            "abbreviation": "OH",
            "recreational": "No",
            "recYear": null,
            "medical": "Y",
            "medYear": 2016
        },
        {
            "state": "Pennsylvania",
            "abbreviation": "PA",
            "recreational": "No",
            "recYear": null,
            "medical": "Y",
            "medYear": 2016
        },
        {
            "state": "Iowa",
            "abbreviation": "IA",
            "recreational": "No",
            "recYear": null,
            "medical": "Y",
            "medYear": 2017
        },
        {
            "state": "West Virginia",
            "abbreviation": "WV",
            "recreational": "No",
            "recYear": null,
            "medical": "Y",
            "medYear": 2017
        },
        {
            "state": "Missouri",
            "abbreviation": "MO",
            "recreational": "Y",
            "recYear": 2022,
            "medical": "Y",
            "medYear": 2018
        },
        {
            "state": "Oklahoma",
            "abbreviation": "OK",
            "recreational": "No",
            "recYear": null,
            "medical": "Y",
            "medYear": 2018
        },
        {
            "state": "Utah",
            "abbreviation": "UT",
            "recreational": "No",
            "recYear": null,
            "medical": "Y",
            "medYear": 2018
        },
        {
            "state": "Mississippi",
            "abbreviation": "MS",
            "recreational": "No",
            "recYear": null,
            "medical": "Y",
            "medYear": 2022
        },
        {
            "state": "South Dakota",
            "abbreviation": "SD",
            "recreational": "No",
            "recYear": null,
            "medical": "Y",
            "medYear": 2020
        },
        {
            "state": "Virginia",
            "abbreviation": "VA",
            "recreational": "Y",
            "recYear": 2021,
            "medical": "Y",
            "medYear": 2020
        },
        {
            "state": "Alabama",
            "abbreviation": "AL",
            "recreational": "No",
            "recYear": null,
            "medical": "Y",
            "medYear": 2021
        },
        {
            "state": "Idaho",
            "abbreviation": "ID",
            "recreational": "No",
            "recYear": null,
            "medical": "No",
            "medYear": null
        },
        {
            "state": "Indiana",
            "abbreviation": "IN",
            "recreational": "No",
            "recYear": null,
            "medical": "No",
            "medYear": null
        },
        {
            "state": "Kansas",
            "abbreviation": "KS",
            "recreational": "No",
            "recYear": null,
            "medical": "No",
            "medYear": null
        },
        {
            "state": "Kentucky",
            "abbreviation": "KY",
            "recreational": "No",
            "recYear": null,
            "medical": "Y",
            "medYear": 2023
        },
        {
            "state": "Nebraska",
            "abbreviation": "NE",
            "recreational": "No",
            "recYear": null,
            "medical": "No",
            "medYear": null
        },
        {
            "state": "North Carolina",
            "abbreviation": "NC",
            "recreational": "No",
            "recYear": null,
            "medical": "No",
            "medYear": null
        },
        {
            "state": "South Carolina",
            "abbreviation": "SC",
            "recreational": "No",
            "recYear": null,
            "medical": "No",
            "medYear": null
        },
        {
            "state": "Tennessee",
            "abbreviation": "TN",
            "recreational": "No",
            "recYear": null,
            "medical": "No",
            "medYear": null
        },
        {
            "state": "Texas",
            "abbreviation": "TX",
            "recreational": "No",
            "recYear": null,
            "medical": "No",
            "medYear": null
        },
        {
            "state": "Wisconsin",
            "abbreviation": "WI",
            "recreational": "No",
            "recYear": null,
            "medical": "No",
            "medYear": null
        },
        {
            "state": "Wyoming",
            "abbreviation": "WY",
            "recreational": "No",
            "recYear": null,
            "medical": "No",
            "medYear": null
        },
        {
            "state": "District of Columbia",
            "abbreviation": "DC",
            "recreational": "Y",
            "recYear": 2015,
            "medical": "Y",
            "medYear": 2011
        }
    ]
}
