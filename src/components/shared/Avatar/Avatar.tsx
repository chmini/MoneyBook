import styled from "@emotion/styled";
import Image from "next/image";

import type { Shape } from "@emotion/react";

interface Props {
  src: string;
  alt: string;
  size: number;
  shape: Shape;
}

const Avatar = ({ src, alt, size, shape }: Props) => (
  <ImageWrapper shape={shape} size={size}>
    <Image alt={alt} height={size} src={src} width={size} />
  </ImageWrapper>
);

export default Avatar;

const ImageWrapper = styled.div<Pick<Props, "size" | "shape">>(
  {
    overflow: "hidden",
  },
  ({ theme, size, shape }) => ({
    width: size,
    height: size,
    borderRadius: theme.radius[shape],
  }),
);
