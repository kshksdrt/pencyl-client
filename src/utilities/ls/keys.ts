interface KeyDict {
  [key: string]: string;
}

const LS_KEYS = {
  theme: "pencyl.theme",
  token: "pencyl.token",
  refresh: "pencyl.refresh",
} as KeyDict;

export function getKey(key: string): string {
  if (!LS_KEYS[key]) {
    throw new Error("LS key provided is invalid");
  }    
  return LS_KEYS[key]
}