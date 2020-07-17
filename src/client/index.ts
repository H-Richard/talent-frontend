import {
  getEncodedAccessToken,
  isLoggedIn,
} from './jwt';

class RequestError extends Error {
  response: Response;

  constructor(response: Response) {
    super(`Request failure. Status code: ${response.status}`);
    this.response = response;
  }
}

export const buildURL = (path: string): string => `http://localhost:8080/${path}`;

export const getAuthHeader = (): string => `Bearer ${getEncodedAccessToken()}`;

export const getDefaultHeaders = () => {
  const headers: { [key: string]: string } = {
    'Content-Type': 'application/json',
  };

  if (isLoggedIn()) {
    headers.Authorization = getAuthHeader();
  }
  return headers;
};

export const post = async ({
  url,
  body,
  headers,
}: {
  url: string
  body: object
  headers?: object
}): Promise<object> => {
  const response = await fetch(buildURL(url), {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      ...getDefaultHeaders(),
      ...headers,
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  if (response.ok) return data;
  return Promise.reject(new RequestError(response));
};

export const put = async ({
  url,
  body,
  headers,
}: {
  url: string
  body: object
  headers?: object
}): Promise<object> => {
  const response = await fetch(buildURL(url), {
    method: 'PUT',
    cache: 'no-cache',
    headers: {
      ...getDefaultHeaders(),
      ...headers,
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  if (response.ok) return data;
  return Promise.reject(new RequestError(response));
};

export const patch = async ({
  url,
  body,
  headers,
}: {
  url: string
  body: object
  headers?: object
}): Promise<object> => {
  const response = await fetch(buildURL(url), {
    method: 'PATCH',
    cache: 'no-cache',
    headers: {
      ...getDefaultHeaders(),
      ...headers,
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  if (response.ok) return data;
  return Promise.reject(new RequestError(response));
};

export const get = async ({
  url,
  headers,
}: {
  url: string
  headers?: object
}): Promise<object> => {
  const response = await fetch(buildURL(url), {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      ...getDefaultHeaders(),
      ...headers,
    },
  });
  const data = await response.json();
  if (response.ok) return data;
  return Promise.reject(new RequestError(response));
};
