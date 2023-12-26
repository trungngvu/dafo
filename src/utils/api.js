var BASE_URL = process.env.BASE_URL;
export const getShowingProduct = async () => {
  const response = await fetch(`${BASE_URL}/product/`);
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

export const getAllProducts = async (searchQuery = "") => {
  let url = `${BASE_URL}/product/`;
  if (searchQuery) {
    url += `?name=${encodeURIComponent(searchQuery)}`;
  }
  const response = await fetch(url);
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

export const getProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/product/${id}`);
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

export const login = async ({ email, password }) => {
  const response = await fetch(`http://localhost:8000/api/login/`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

export const signup = async (email, password) => {
  const response = await fetch(`http://localhost:8000/api/register/`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to signup");
  }
  const data = await response.json();
  return data;
};

export const resetPassword = async (
  email,
  password,
  confirmPassword,
  handler
) => {
  fetch(`http://localhost:8000/api/reset_password/`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      new_password: password,
      confirm_password: confirmPassword,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      handler(data);
    });
};

export const placeOrderRequest = (data, handler) => {
  console.log(
    JSON.stringify({
      orders: [data],
    })
  );
  fetch(`http://localhost:8000/api/order/user/${data.user}`, {
    method: "POST",
    body: JSON.stringify({
      orders: [data],
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      handler(data);
    });
};
