import axios from 'axios';
const axiosInstance = axios.create({
    timeout: 5000
})

const apiKey = "041f58c0f6894df5799308d6eedc7b25";

axiosInstance.defaults.params = {
    'api_key': apiKey
}

axiosInstance.defaults.baseURL = 'https://api.themoviedb.org/3';

// Add a response interceptor
axiosInstance.interceptors.response.use((response) => {
    // based on response display the error message
    const result = response.data;
    console.log(response.data);
    const error = {message: ''};
    if (result.status_message) {
      error.message = result.status_message;
      return Promise.reject(error);
    } else {
      return response.data;
    }
}, (error) => {
    // Do something with response error
    return Promise.reject(error);
});
export default axiosInstance;