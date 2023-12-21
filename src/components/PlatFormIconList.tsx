import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';

import { Platform } from '../hooks/useGame';
import { Icon, HStack } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
  platforms: Platform[];
}
const PlatFormIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintentdo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    andriod: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={'10px'}>
      {platforms.map((platform) => (
        // <Text>{Platform.name}</Text>
        //   or change it into Icons
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray-500" />
      ))}
    </HStack>
  );
};

export default PlatFormIconList;
