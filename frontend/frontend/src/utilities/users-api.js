
import { sendRequest } from './send-request';
const BASE_URL = "http://localhost:3000/api/users";

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}
export async function login(credentials) {
  return sendRequest(`${BASE_URL}/login`,'POST',credentials)
}

export async function signUp(userData) {
 return sendRequest(BASE_URL, "POST", userData)
}
