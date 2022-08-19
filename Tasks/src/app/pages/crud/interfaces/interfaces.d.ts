export interface CountryName {
    name: Name;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

export interface NativeName {
    ara: Ara;
}

export interface Ara {
    official: string;
    common:   string;
}


export interface formControls {
    username    : string;
    email       : string;
    password1   : string;
    subscribed  : boolean;
    country     : string;
    countryCity : string;
    id?         : number;
}

