import axios from "axios"

// let headers = {}
// headers['Accept'] = "application/json"
// headers['Content-Type'] = "appliation/json"


let http = axios.create({ 
    timeout: 9000
})

http.interceptors.response.use(response => {
    return response;
}, error => {
   if (error.response.status === 401) {
        localStorage.setItem('_key', null);
        localStorage.setItem('_prop', null);
        window.location.href = "/";
   }
   return error;
});
export default http