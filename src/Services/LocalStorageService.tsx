const setItem = (key: string, value: any) => {
  if (!value) {
    console.log("Attempting to store an undefined or null value");
  } else {
    console.log("Storing to localStorage", key, value);
  }
  localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key: string) => {
  const item = localStorage.getItem(key);
  if (item === null || item === "undefined") {
    return null;
  } else {
    return JSON.parse(item);
  }
};

const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

export { setItem, getItem, removeItem };
