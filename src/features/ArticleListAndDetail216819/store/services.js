import axios from 'axios';

const articlesAPI = axios.create({
  baseURL: 'https://mobile-0104-dev-17890.botics.co/modules',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export function article_list(action) {
  return articlesAPI.get(`/articles/`);
}

export function article_read(action) {
  return articlesAPI.get(`/articles/${action.id}/`);
}
