export function useLocalStorage(key, initialValue) {
  const setItem = (key, value) =>
    key && value && localStorage.setItem(key, JSON.stringify(value));

  const getItem = (key) => JSON.parse(localStorage.getItem(key));

  if (!key && initialValue) throw Error("key is required !");
  if (key && !initialValue) throw Error("value is required !");

  if (key && initialValue) {
    setItem(key, initialValue);
  }

  return [getItem, setItem];
}
