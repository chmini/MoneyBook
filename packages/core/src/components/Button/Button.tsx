import styled from "@emotion/styled";

interface ButtonProps {
  color?: string;
}

export const Button = ({ color }: ButtonProps) => (
  <ButtonRoot type="button" color={color}>
    Button
  </ButtonRoot>
);

const ButtonRoot = styled.button<ButtonProps>(({ color }) => ({
  backgroundColor: color,
}));
