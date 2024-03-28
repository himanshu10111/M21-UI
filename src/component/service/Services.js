const AuthServices = (logindata) => {
    const BaseURL = process.env.REACT_APP_BASE_URL;
    
    const res = fetch(`${BaseURL}/api/auth/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(logindata)
    }).then((response) => response.json())
        .then((user) => {
            console.log(user);
        });
    console.log('*******Response********', res);
}

const Services = {
    AuthServices
};

export default Services;