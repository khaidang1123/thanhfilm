import instance from './Config';

export function login(data) {
    return instance.post('login', data)
}
export function signinWithGoogle() {
    let header = new Headers()
    header.append('Content-Type', 'application/json');
    header.append('Accept', 'application/json');
    header.append('Origin', 'http://localhost:8080');
    header.append('Access-Control-Allow-Origin', '*')
    return instance.get('google-signin', {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Origin': 'http://localhost:8080'
        },
        xhrFields: {
            withCredentials: true
        },
    })
}

export function register(data) {
    return instance.post('register', data);
}

export function getUser(token) {
    return instance.get('user', {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}