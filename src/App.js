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
        appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
        autoLoad={true}
        fields="name,firstName,lastName,location,email,picture"
        callback={responseFacebook} />

      <GoogleLogin 
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        scope="https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/user.gender.read https://www.googleapis.com/auth/user.addresses.read https://www.googleapis.com/auth/user.birthday.read"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;
