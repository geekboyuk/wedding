import qs from 'qs';

const baseUrl = process.env.REACT_APP_API_ENDPOINT

const defaultHeaders = {
  'Accept': 'application/json',
};

const handleResponse = url => (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error: ${url} ${response.status} ${response.statusText}`);
  }

  return response;
};

const jsonify = response => response.json().then((res) => {
  console.log({ res });
  return res;
});

const fetcher = (url, { token, headers, body, queryString }) => {
  const options = {
    headers: { ...defaultHeaders }
  };

  if (headers) {
    options.headers = {...options.headers, ...headers};
  }

  if (token) {
    options.headers = {
      ...options.headers,
      'Authorization': `Bearer ${token}`,
    }
  }

  if (body) {
    options.body = JSON.stringify(body);
  }

  const actualUrl = queryString ?
    `${baseUrl}${url}?${qs.stringify(queryString)}` :
    `${baseUrl}${url}`;

  console.log('fetch', {actualUrl, options});

  return fetch(actualUrl, options)
    .then(handleResponse(url))
    .then(jsonify);
}

export default fetcher;