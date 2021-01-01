export type Theme = "light" | "dark";

export interface MutationsObject {
  [key: string]: Function;
};

export interface TokenPair {
  token: string;
  refresh: string;
};