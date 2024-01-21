import { Auth0Provider } from '@auth0/auth0-react';

const AuthProvider = ({ children }) => {
    const domain = 'dev-xdx10w8664v1a2yz.us.auth0.com';
    const clientId = 'OVs6wasqgkibgaaY58XxY5bSlktODzhQ';
    const redirectUri = 'http://localhost:3000/SMART-FrontEnd'

    return (
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{ redirect_uri: redirectUri }}
      >
        {children}
      </Auth0Provider>
    );
  };
  
export default AuthProvider;