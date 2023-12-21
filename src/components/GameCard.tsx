import { Game } from '../hooks/useGame';
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import PlatFormIconList from './PlatFormIconList';
import CriticStore from './CriticStore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      {/* <Image src={game.background_image} /> */}
      {/* {game.parent_platform.map((platform) => (
        <Text>{platform.platform.name}</Text>
      ))} */}
      {/* or wey use like this */}
      {/* {game.parent_platforms.map(({ platform }) => {
        return <Text>{platform.name}</Text>;
      })} */}
      {/* or use it in other components */}
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={'space-between'} marginBottom={3}>
          <PlatFormIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticStore score={game.metacritic} />
        </HStack>
        <Heading fontSize="xl">
          {game.name} <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
