import "@emotion/react";

interface Radius {
  circle: string;
  round: string;
}

declare module "@emotion/react" {
  type Shape = keyof Radius;

  export interface Theme {
    radius: Radius;
  }
}
