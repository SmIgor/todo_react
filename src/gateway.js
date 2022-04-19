const baseUrl = 'https://62447c1b39aae3e3b750a7bc.mockapi.io/tasks';

export const getData = async () => {
  const resp = await fetch(baseUrl);
  if (resp.ok) return await resp.json();
  else throw new Error('Failed to get data');
};

export const postData = async data => {
  const resp = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });
  if (!resp.ok) throw new Error('Failed to post data');
};

export const putData = async data => {
  const resp = await fetch(`${baseUrl}/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });
  if (!resp.ok) throw new Error('Failed to put data');
};

export const deleteData = async id => {
  const resp = await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });
  if (!resp.ok) throw new Error('Failed to delete data');
};
