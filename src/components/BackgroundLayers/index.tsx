import { chakra } from '@chakra-ui/react';

interface BackgroundLayerProps {
  height: string;
  imageUrl?: string;
}

function BackgroundLayer({ height, imageUrl }: BackgroundLayerProps) {
  return (
    <chakra.div
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height={height}
    >
      <chakra.div minHeight="100%" position="sticky" top="0">
        {imageUrl ? (
          <chakra.div>
            <chakra.img
              src={imageUrl}
              display="block"
              width="100%"
              position="absolute"
              bottom="0"
              right="0"
              transform="translateY(25vh)"
              transition="all 1600ms cubic-bezier(0.5, 1, 0.25, 1)"
              minHeight="100%"
              height="135vh"
              objectFit="cover"
              objectPosition="bottom right"
              alt="Background"
            />
          </chakra.div>
        ) : (
          ''
        )}
      </chakra.div>
    </chakra.div>
  );
}

BackgroundLayer.defaultProps = {
  imageUrl: null,
};

export default function BackgroundLayers(): JSX.Element {
  return (
    <chakra.div
      position="absolute"
      bottom="0"
      right="0"
      width="100%"
      height="100%"
      zIndex={-1}
      pointerEvents="none"
    >
      <BackgroundLayer height="800vh" />
      <BackgroundLayer height="700vh" imageUrl="images/7.png" />
      <BackgroundLayer height="600vh" imageUrl="images/6.png" />
      <BackgroundLayer height="500vh" imageUrl="images/5.png" />
      <BackgroundLayer height="400vh" imageUrl="images/4.png" />
      <BackgroundLayer height="300vh" imageUrl="images/3.png" />
      <BackgroundLayer height="200vh" imageUrl="images/2.png" />
      <BackgroundLayer height="100vh" imageUrl="images/1.png" />
    </chakra.div>
  );
}
