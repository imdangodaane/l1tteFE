export const BASE_URL = `https://api.lattero.xyz`;
export const PREFIX = `api`;
export const DOWNLOAD = `download`

export const API = {
  API_ACCOUNT: {
    API_ACCOUNT_REGISTER: `${BASE_URL}/${PREFIX}/register`,
  },
  API_GAME: {
    API_DOWNLOAD_LINK_FULL: `${BASE_URL}/${PREFIX}/${DOWNLOAD}/full`,
    API_DOWNLOAD_LINK_PATCHER: `${BASE_URL}/${PREFIX}/${DOWNLOAD}/patcher`,
  }
}