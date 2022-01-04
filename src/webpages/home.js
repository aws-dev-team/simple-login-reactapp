import React, { useState, useEffect }  from 'react';
import Amplify, { API, Auth } from 'aws-amplify';


const myInit = { // OPTIONAL
    /*headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: {  // OPTIONAL
        name: 'param',
    },*/
  };

const Home = () => {
const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState('');
    useEffect(() => {
        API.get('simplereactapi', '/helloworld', myInit)
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <p>
                {users}
            </p>
        );
    }
}
export default Home;