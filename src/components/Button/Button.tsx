import React from "react";

import styled from "@emotion/styled";

interface Props {
  children: string;
}

function Button({ children }: Props) {
  return <SButton type="button">{children}</SButton>;
}

export default Button;

const SButton = styled("button")();
