import instance from './Config';

export function login(data) {
    return instance.post('login', data)
}
export function signinWithGoogle() {
    return instance.post('google-signin')
}

export function register(data) {
    return instance.post('register', data);
}

export function getUser(token) {
    return instance.get('user', {
        headers: {
            "Authorization": "Bearer "+token
        }
    })
}