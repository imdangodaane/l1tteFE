// export const BASE_URL = `https://api.lattero.xyz`;
export const BASE_URL = `http://127.0.0.1:8000`;
export const PREFIX = `api`;
export const DOWNLOAD = `download`

export const API = {
  API_ACCOUNT: {
    API_ACCOUNT_REGISTER: `${BASE_URL}/${PREFIX}/register`,
  },
  API_GAME: {
    API_DOWNLOAD_LINK_FULL: `${BASE_URL}/${PREFIX}/${DOWNLOAD}/full`,
    API_DOWNLOAD_LINK_PATCHER: `${BASE_URL}/${PREFIX}/${DOWNLOAD}/patcher`,
    API_GET_SERVER_INFORMATION: `${BASE_URL}/${PREFIX}/server-information`
  }
}