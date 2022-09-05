export interface Filter {
    name        : string;
    alpha2Code  : string;
}

export interface Universities {
    web_pages       : string[];
    name            : string;
    alpha_two_code  : string;
    "state-province": null | string;
    domains         : string[];
    country         : string;
}
