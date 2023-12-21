import { Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGame";

interface Props {
  platforms: Platform[];
}
const platformicon = ({ platforms }: Props) => {
  return (
    <>
      {platforms.map((Platform) => (
        <Text>{Platform.name}</Text>
      ))}
    </>
  );
};

export default platformicon;
