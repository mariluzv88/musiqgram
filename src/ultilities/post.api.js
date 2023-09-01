const BASE_URL = '/api/post';

export function getAll() {
    return (BASE_URL);
  }
  
export function getById(id) {
    return (`${BASE_URL}/${id}`);
  }
