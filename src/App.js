import './App.css';
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login';

const responseFacebook = (response) => {
  console.log(response)
}

const responseGoogle = (response) => {
  console.log(response);
}

function App() {
  return (
    <div className="App">
      <FacebookLogin
        appId={process.env.FACEBOOK_CLIENT_ID}
        autoLoad={true}
        fields="name,firstName,lastName,location,email,picture"
        callback={responseFacebook} />

      <GoogleLogin 
        clientId={process.env.GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;
