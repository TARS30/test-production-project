import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = (props: HStackProps) => {
  const {
    children,
    justify,
    align,
    role,
    wide,
  } = props;

  return (
    <Flex
      direction="row"
      align={align}
      justify={justify}
      wide={wide}
      role={role}
      {...props}
    >
      {children}
    </Flex>
  );
};
