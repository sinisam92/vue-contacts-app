import http from 'http'

    class AuthService {
        login(email, password) {
            return http.post('auth/login', {
                emial,
                password
            });
        }
    }

    const authService = new AuthService();

    export default authService;

