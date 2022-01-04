import logo from './logo.svg';
import './App.css';
import Amplify, { API, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react-v1'
import awsconfig from './aws-exports';
import Webpages from './webpages';

Amplify.configure(awsconfig);

const myInit = { // OPTIONAL
  /*headers: {}, // OPTIONAL
  response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
  queryStringParameters: {  // OPTIONAL
      name: 'param',
  },*/
};

console.log('PRUEBA DE CONSUMO');

console.log(API.get('simplereactapi', '/helloworld', myInit));

function App() {
  return (
    <div className="App">
      <Webpages />
    </div>
  );
}

export default withAuthenticator(App)
