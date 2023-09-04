import sendRequest from "./send-request";
const BASE_URL = '/api/posts';

export function getAll(posts) {
    return sendRequest(`${BASE_URL}/feed`,'GET',posts);
  }
  
// export function getById(id) {
//     return sendRequest(`${BASE_URL}/feed/users?userId=${post.userId}`,'GET',id);
//   }
// export function getById(id) {
//     return sendRequest(`${BASE_URL}/${id}`);
//   }
