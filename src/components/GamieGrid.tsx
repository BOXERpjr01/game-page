// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import useGame, { Platform } from '../hooks/useGame';
// import { Genre } from '../hooks/useGenres';

// interface Game {
//   id: number;
//   name: string;
// }

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }
// interface Props {

// selectedGenre: Genre | null;
// selectedPlatform: Platform | null;
// }
// const GamieGrid = ({ selectedGenre, selectedPlatform }: Props) => {
// const [games, setGames] = useState<Game[]>([]);
// const [error, setError] = useState("");

// useEffect(() => {
//   apiClient
//     .get<FetchGamesResponse>("/games")
//     .then((res) => setGames(res.data.results))
//     .catch((err) => setError(err.message));
// });
// const { data, error, isLoading } = useGame(selectedGenre, selectedPlatform);
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GamaCardSkeleton from './GamaCardSkeleton';
import GmaCardContainer from './GmaCardContainer';
import { GameQuery } from '../App';
import useGame from '../hooks/useGame';
interface Props {
  gameQuery: GameQuery;
}

const GamieGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGame(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6];

  // or
  if (error) return <Text>{error}</Text>;

  return (
    <>
      {/* {error && <Text>{error}</Text>} */}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeleton.map((skeleton) => (
            <GmaCardContainer key={skeleton}>
              <GamaCardSkeleton />
            </GmaCardContainer>
          ))}
        {data.map((game) => (
          <GmaCardContainer key={game.id}>
            <GameCard game={game} />
          </GmaCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamieGrid;
