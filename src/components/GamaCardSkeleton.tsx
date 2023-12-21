import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GamaCardSkeleton = () => {
  return (
    <Card>
      <Skeleton />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GamaCardSkeleton;
