import { StyledHeader, Logo } from "./styles";

interface Props {}

export const Header = ({}: Props) => {
  return (
    <StyledHeader>
      <Logo>Pixel</Logo>
    </StyledHeader>
  );
};
