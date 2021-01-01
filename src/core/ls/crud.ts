let log = false;
if (process.env.NODE_ENV === "development") log = false;

export default {
  write<T>(key: string, value: T) {
    const start = Date.now()
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      if (log) console.log("Could not write to localStorage")
    }
    const end = Date.now()
    if (log) console.log(`Took ${end-start} milliseconds to store`)
  },
  read(key: string, fallback = ""): string {
    let result
    try {
      result = JSON.parse(localStorage.getItem(key) || fallback)
    } catch (err) {
      result = fallback
      if (log) console.log(err)
    }
    return result
  },
}