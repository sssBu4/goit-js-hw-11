'use strict';

const API_KEY = '43829515-4b6c46a8dcc04df5ffee337c5';
const BASE_URL = `https://pixabay.com/api/`;

export function fetchImg(q) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}