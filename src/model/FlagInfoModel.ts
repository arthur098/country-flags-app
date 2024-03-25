import { CurrencyModel } from './CurrencyModel';
import { LanguageModel } from './LanguageModel';
import { TranslationModel } from './TranslationModel';
import { RegionalBlocModel } from './RegionalBlocModel';

export class FlagInfoModel {
  constructor(public name: string,
              public topLevelDomain: string[],
              public alpha2Code: string,
              public alpha3Code: string,
              public callingCodes: string[],
              public capital: string,
              public altSpellings: string[],
              public subregion: string,
              public region: string,
              public population: number,
              public latlng: number[],
              public demonym: string,
              public area: number,
              public timezones: string[],
              public borders: string[],
              public nativeName: string[],
              public numericCode: number,
              public flags: FlagInfoModel,
              public currencies: CurrencyModel[],
              public languages: LanguageModel[],
              public translations: TranslationModel,
              public flag: string,
              regionalBlocs: RegionalBlocModel[],
              cioc: string,
              independent: boolean) { }
}
