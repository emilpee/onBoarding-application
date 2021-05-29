import React, { FunctionComponent } from "react";
import { Button, Row } from "react-bootstrap";
import "./styles.scss";

interface LoginProps {
  handleLogin: (e: React.MouseEvent) => void;
}

const Login: FunctionComponent<LoginProps> = (props) => {
  const { handleLogin } = props;
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  const handleConnectClick = (e): void => {
    function generateUrlWithState() {
      handleLogin(e);
      const state = Math.random()
        .toString(36)
        .substring(7);
      return `https://api.boardgameatlas.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&state=${state}&redirect_uri=${REDIRECT_URI}`;
    }
    window.location.href = generateUrlWithState();
  };

  return (
    <div className="login">
      <Row>
        <h1>onBoarding</h1>
      </Row>
      <Row noGutters>
        <p className="text-center">
          Welcome! In order to use this application, you must authenticate with
          Board Game Atlas. Click the button to connect.
        </p>
      </Row>
      <Row>
        <Button variant="info" type="button" onClick={handleConnectClick}>
          Connect to BGA
        </Button>
      </Row>
    </div>
  );
};

export default Login;
