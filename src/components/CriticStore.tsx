import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}
const CriticStore = ({ score }: Props) => {
  const color = score > 80 ? 'green' : score > 60 ? 'yellow' : '';

  return (
    <Badge
      colorScheme={color}
      fontSize={'14px'}
      paddingX={2}
      borderRadius={'4px'}
    >
      {score}
    </Badge>
  );
};

export default CriticStore;
