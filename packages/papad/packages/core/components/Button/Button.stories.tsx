import Button from "./Button";

import type { ComponentMeta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default = () => <Button />;
