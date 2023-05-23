export const getLocalStorageItem = (name) => {
  const item = JSON.parse(localStorage.getItem(name));
  if (!item) {
    return false;
  }
  if (typeof item === "object") {
    return JSON.parse(item);
  }
  return item;
};

export const setLocalStorageItem = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const removeLocalStorageItem = (name) => {
  localStorage.removeItem(name);
};
