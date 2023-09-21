export const getAllCars = () => {
  const url = "https://mocki.io/v1/63879683-654b-456b-af7b-613d600e85f0";
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

export const getDashBoard = () => {
  const url = "https://mocki.io/v1/f059f667-d46d-49f5-8c76-0fbe14356fca";

  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
