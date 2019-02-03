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

const jsonify = response => {
  if (response.status === 200) {
    return response.json();
  }
}

const fetcher = (url, { token, method='get', headers, body, queryString }) => {
  const options = {
    method,
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

  return fetch(actualUrl, options)
    .then(handleResponse(url))
    .then(jsonify)
}

export default fetcher;