import {useState, useEffect} from 'react';

const httpClient = (client) => {
    const [error, setError] = useState(false);

    const reqInterceptor = client.interceptors.request.use( req => {
        setError(null);
        return req;
    } );
    const resInterceptor = client.interceptors.response.use( res => res, err => {
        setError(err);
    } );

    useEffect(() => {
        return () => {
            client.interceptors.request.eject( reqInterceptor );
            client.interceptors.response.eject( resInterceptor );
        }
    }, [reqInterceptor, resInterceptor])

    const errorConfirmedHandler = () => {
        setError(null);
    };

    return [error, errorConfirmedHandler];
}

export default httpClient;