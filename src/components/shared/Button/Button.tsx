import React from "react";

import styled from "@emotion/styled";

interface Props {
  children: string;
}

const Button = ({ children }: Props) => <SButton type="button">{children}</SButton>;

export default Button;

const SButton = styled("button")();
