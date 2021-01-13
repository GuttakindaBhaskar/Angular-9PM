export interface Currencies{
    code:string;
    name:string;
    symbol:string;
};
export interface CountriesModel{
    name : string;
    capital : string;
    region:string;
    population:number;
    nativeName:string;
    currencies:Currencies[];
    flag:string;
};