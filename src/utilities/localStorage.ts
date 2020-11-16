export default {
  get: function (key: string) {
    return JSON.parse(localStorage.getItem(key) as any);
  },
  set: function (key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
