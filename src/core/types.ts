export type Theme = "light" | "dark";

export interface MutationsObject {
  [key: string]: Function;
};

export type Payload = string | object | any[];

export interface TokenPair {
  token: string;
  refresh: string;
};

export interface List extends ListConfig {
  _id: string;
  items: [];
}

export interface ListConfig {
  name: string;
  hasCheckbox: boolean;
  itemsHaveDesc: boolean;
  hasCounts: boolean;
  hasIcons: boolean;
}

export interface User {
  name: string;
  email: string;
  settings: UserSettings;
  _id: string;
  data: UserData;
}

export interface UserSettings {
  [key: string]: any;
}

export interface UserData {
  lists: List[];
}

export interface Action {
  type: string;
  payload: any;
}

export interface Metadata {
  [key: string]: string;
}

export interface ActionMeta extends Action {
  md: {
    [key: string]: string;
  };
}