import { Leva, useControls } from 'leva';
import { Canvas } from '@react-three/fiber';
import Model from '../components/Model';
import { Suspense } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';

import Loading from '../components/Loading';
import { calculateSizes } from '../constants/index.js';
import ReactLogo from '../components/ReactLogo';
import HeroCamera from '../components/HeroCamera.jsx';
import Button from '../components/Button.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // const x = useControls('HackerRoom', {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationX:{
  //     value:0,
  //     min:-10,
  //     max:10
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10
  //   }
  // })
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Vorleak <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-[#F9E2AF]">Web Developer</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Leva />
        <Canvas className="w-full h-full">

          <Suspense fallback={<Loading />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            {/* <Model
              scale={10}
              position={[4.1,-9.1, -5.5]}
              rotation={[-5.6,0.6,-6.3]} /> */}
            <HeroCamera isMobile={isMobile}>
              <Model scale={sizes.deskScale} position={sizes.deskPosition} rotation={[-5.6, 0.6, -6.3]} />
            </HeroCamera>

            <group>
              <ReactLogo position={sizes.reactLogoPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  )
}

export default Hero;
