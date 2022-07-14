const baseUrl = "http://localhost:3005/api/users";

export const getAll = async () => {
  const res = await fetch(baseUrl);
  const result = await res.json();

  return result.users;
};

export const getOne = async (userId) => {
  const res = await fetch(`${baseUrl}/${userId}`);
  const result = await res.json();

  return result.user;
};

export const create = async (userData) => {
  const res = await fetch(baseUrl, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const result = await res.json();
  return result.user;
};

export const edit = async (userData, userId) => {
  const res = await fetch(`${baseUrl}/${userId}`, {
    method: 'put',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(userData)
  });
  const result = await res.json();
  return result.user;
}