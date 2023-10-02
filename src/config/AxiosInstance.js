import axios from 'axios';
// import cookies from "js-cookies/src/cookies";

function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
        return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return localStorage.removeItem(key);
    }
    return item.value;
}

export const axiosInstance = (additionalConfig = {}) => {
    // const value = cookies.getItem("token");
    return axios.create({
        baseURL: 'http://localhost:8080/', //LOCAL
        // baseURL: 'http://ip_address:port/ldcidev', //DEV
        // baseURL: "https://backend-ldci.lottemart.co.id/backend/", //PRD
        headers: {
            // authorization: value?`Bearer ${value}`:null,
            authorization: null,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            // 'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        ...additionalConfig,
    });
};
export const axiosInstanceApply = (additionalConfig = {}) => {
    // const value = cookies.getItem("token");
    return axios.create({
        baseURL: 'http://localhost:8080/', //LOCAL
        // baseURL: 'http://ip_address:port/ldcidev', //DEV
        // baseURL: "https://backend-ldci.lottemart.co.id/backend/", //PRD
        headers: {
            // authorization: value?`Bearer ${value}`:null,
            authorization: null,
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            // 'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        ...additionalConfig,
    });
};

// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:8080/',
//   timeout: 5000,
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${localStorage.getItem('access_token')}`,
//   },
// });

// export default axiosInstance;
