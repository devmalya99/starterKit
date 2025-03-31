

const api_url = import.meta.env.VITE_API_URL;
const api_main_route = `${api_url}/api/auth`;
export const registerRoute = `${api_main_route}/register`;
export const loginRoute = `${api_main_route}/login`;
export const setAvatarRoute = `${api_main_route}/setAvatar`;
export const allUsersRoute = `${api_main_route}/allusers`;

