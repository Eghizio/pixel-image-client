import { NavLink, useNavigate } from "react-router-dom";
import { Button, Logo, Navigation, StyledHeader } from "./styled";
import { useAuth } from "../context/AuthContext";
import { Path } from "../routing/Router";

interface Props {}

export const Header = ({}: Props) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();
    navigate(Path.AuthLogin);
  };

  return (
    <StyledHeader>
      <NavLink to={Path.Home}>
        <Logo>
          <span>✨</span>
          <span className="hidden sm:block">Pixel</span>
        </Logo>
      </NavLink>

      <Navigation>
        {user === null ? (
          <>
            <NavLink to={Path.AuthRegister}>
              <Button>Register</Button>
            </NavLink>
            <NavLink to={Path.AuthLogin}>
              <Button>Login</Button>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to={Path.Dashboard}>
              <Button>Dashboard</Button>
            </NavLink>
            <NavLink to={Path.Profile}>
              <Button>Profile</Button>
            </NavLink>
            <Button variant="danger" onClick={onLogout}>
              Logout
            </Button>
          </>
        )}
      </Navigation>
    </StyledHeader>
  );
};
