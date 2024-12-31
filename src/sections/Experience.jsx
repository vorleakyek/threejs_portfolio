import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer';
import Loading from '../components/Loading';
import { workExperiences } from '../constants';


const Experience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id='work'>
      <div className="w-full text-white-600">
        <h3 className="head-text">My Work Experience</h3>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<Loading />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2 5">
              {workExperiences.map(({ id, name, pos, icon, duration, title, animation }) => (
                <div
                  key={id}
                  className='work-content_container group'
                  onClick={()=>setAnimationName(animation.toLocaleLowerCase())}
                  onPointerOver={()=>setAnimationName(animation.toLocaleLowerCase())}
                  onPointerOut={()=>setAnimationName('idle')}>
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img src={icon} alt="logo" className="w-full h-full" />
                    </div>
                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2 5 py-5 ">
                    <p className="font-bold text-sky-900 group-hover:text-white transition-all ease-in-out duration-500">{name}</p>
                    <p className="text-yellow-800 text-sm mb-5 group-hover:text-yellow-500 transition-all ease-in-out duration-500">{pos} -- {duration}</p>
                    <p className="text-sky-950 group-hover:text-white transition-all ease-in-out duration-500">
                      {title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
