export { fakeBackend }

const validCredentials = [
    'enzonav@yahoo.it:test',
    'test:test'
    // aggiungi altre coppie utente:password qui
]

function fakeBackend() {
    let users = [
        { 
            id: 1, username: 'test', 
            password: 'test', 
            firstName: 'Test', 
            lastName: 'User' 
        },
        {
            id: 2, 
            username: 'enzonav@yahoo.it', 
            password: 'test', 
            firstName: 'Enzo', 
            lastName: 'Nav'
        }
    ]
    let realFetch = window.fetch
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(handleRoute, 500);

            function handleRoute() {
                switch (true) {
                    case url.endsWith('/users/authenticate') && opts.method === 'POST':
                        return authenticate();
                    case url.endsWith('/users') && opts.method === 'GET':
                        return getUsers();
                    default:
                        // pass through any requests not handled above
                        return realFetch(url, opts)
                            .then(response => resolve(response))
                            .catch(error => reject(error));
                }
            }

            // route functions

            function authenticate() {
                const { username, password } = body();
                const user = users.find(x => x.username === username && x.password === password);

                if (!user) return error('Username or password is incorrect');

                // return basic user details on success
                return ok({
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName
                });
            }

            function getUsers() {
                if (!isAuthenticated()) return unauthorized();
                return ok(users);
            }

            // helper functions

            function ok(body) {
                resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
            }

            function unauthorized() {
                resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' })) })
            }

            function error(message) {
                resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
            }

            function isAuthenticated() {
                //return opts.headers['Authorization'] === `Basic ${window.btoa('test:test')}`;
                //return opts.headers['Authorization'] === `Basic ${window.btoa('enzonav@yahoo.it:test')}`
                return validCredentials.some(credentials => opts.headers['Authorization'] === `Basic ${window.btoa(credentials)}`)
            }

            function body() {
                return opts.body && JSON.parse(opts.body);
            }
        });
    }
}


  
  
