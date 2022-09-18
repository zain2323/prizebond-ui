const BASE_API_URL = "http://localhost:5000" 

export default class Client {
    constructor() {
        this.baseUrl = BASE_API_URL
    }
   
    async request(options) {
        let query = new URLSearchParams(options.query || {}).toString()
        if (query !== '') {
            query = '?' + query
        }
        
        let response;
        try {
          response = await fetch(this.baseUrl + options.url, {
            method: options.method,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
              ...options.headers,
            },
            body: options.body ? JSON.stringify(options.body) : null,
          });
        }
        catch (error) {
          response = {
            ok: false,
            status: 500,
            json: async () => { return {
              code: 500,
              message: 'The server is unresponsive',
              description: error.toString(),
            }; }
          };
        }

        return {
          ok: response.ok,
          status: response.status,
          body: response.status !== 204 ? await response.json() : null
        }
    }

    async get(url, query, options) {
        return this.request({method: 'GET', url, query, ...options});
    }
    
    async post(url, body, options) {
        return this.request({method: 'POST', url, body, ...options});
    }
    
    async put(url, body, options) {
        return this.request({method: 'PUT', url, body, ...options});
    }
    
    async delete(url, options) {
        return await this.request({method: 'DELETE', url, ...options});
    }

    async login(username, password) {
        const response = await this.post('/tokens', null, {
          headers: {
            Authorization:  'Basic ' + btoa(username + ":" + password)
          }
        });
        if (!response.ok) {
          return response.status === 401 ? 'fail' : 'error';
        }
        localStorage.setItem('accessToken', response.body.access_token);
        return 'ok';
      }

    async logout() {
        await this.delete("/tokens")
        localStorage.removeItem("accessToken");
    }

    async register(name, email, password) {
        const body = {
            "name": name,
            "email": email,
            "password": password
        };
        const response = await this.post("/users", body, null)
        if (!response.ok) {
            return response.status == 400 ? "fail" : "error";
        }
        return response;
    }

    isAuthenticated() {
        return localStorage.getItem('accessToken') !== null;
    }
}
