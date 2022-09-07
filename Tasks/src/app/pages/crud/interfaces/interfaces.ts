import { FormGroup, FormControl } from '@angular/forms';

export interface CountryName {
  name: Name;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  ara: Ara;
}

export interface Ara {
  official: string;
  common: string;
}

export interface formControls {
  username: string;
  email: string;
  password1: string;
  subscribed: boolean;
  country: string;
  countryCity: string;
  id?: number;
}

export interface PersonalForm {
  username: FormControl<string | null| undefined>;
  email: FormControl<string | null| undefined>;
  password1: FormControl<string | null| undefined>;
  password2: FormControl<string | null| undefined>;
  subscribed: FormControl<boolean | null| undefined>;
  country: FormControl<string | null| undefined>;
  countryCity: FormControl<string | null| undefined>;
}
