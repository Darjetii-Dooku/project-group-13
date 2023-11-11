import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/';

function handleResponse(response) {
  if (!response.data) {
    throw new Error('Invalid response format');
  }
  return response.data;
}

function handleError(error) {
  if (error.response) {
    throw new Error(`Request failed with status ${error.response.status}`);
  } else if (error.request) {
    throw new Error('No response received from the server');
  } else {
    throw new Error(`Error setting up the request: ${error.message}`);
  }
}

async function getCategoryList() {
  try {
    const response = await axios.get(`${BASE_URL}books/category-list`);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
}

async function getTopBooks() {
  try {
    const response = await axios.get(`${BASE_URL}books/top-books`);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
}

async function getCategory(listname) {
  try {
    const response = await axios.get(`${BASE_URL}books/category?category=${listname}`);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
}

async function getBooksById(id) {
  try {
    const response = await axios.get(`${BASE_URL}books/${id}`);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
}

export {
  getCategoryList,
  getTopBooks,
  getCategory,
  getBooksById
};