// Baseurl
const Base_url = import.meta.env.VITE_BASE_URL;
// Authentication APIs

export const USER_AUTH_API = Base_url + import.meta.env.VITE_USER_AUTH;
export const USER_LOGOUT_API = Base_url + import.meta.env.VITE_USER_LOGOUT;
export const USER_LOGIN_API= Base_url + import.meta.env.VITE_USER_LOGIN;