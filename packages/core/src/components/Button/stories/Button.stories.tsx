import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "@components/Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => <Button {...args} />;
