import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps) => {
  const {
    children,
    role,
    align = 'start',
  } = props;

  return (
    <Flex
      direction="column"
      align={align}
      role={role}
      {...props}
    >
      {children}
    </Flex>
  );
};
