import React, { FunctionComponent, useEffect, useState } from "react";
import { User } from "../../interfaces";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
  Spinner,
} from "react-bootstrap";

interface HeaderProps {
  user: User;
}

const Header: FunctionComponent<HeaderProps> = (props) => {
  const { user } = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (user !== null) {
      setIsLoading(false);
    }
  }, [user]);

  return (
    <Navbar expand="md" sticky="top" bg="light">
      <Navbar.Brand href="#">onBoarding</Navbar.Brand>
      <Navbar.Collapse className="justify-content-between">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Link</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Another link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          {isLoading ? (
            <Spinner animation="border" variant="primary" />
          ) : (
            <span>{user.username}</span>
          )}
        </Nav>
        <Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="primary">Search</Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
