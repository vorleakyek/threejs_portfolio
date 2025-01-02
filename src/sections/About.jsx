import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

//NOTE: Add education and publication

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' vorleakyek@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <p className="head-text">About Me</p>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 mt-12 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/my-profile.jpg" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Vorleak Yek</p>
              <p className="grid-subtext">
                With 2 years of experience in frontend and backend development, I’ve honed my skills in building dynamic and responsive websites. Currently, I volunteer as a full-stack developer at Hack for LA, collaborating on meaningful projects and continuously expanding my technical expertise. In my five-year role as a Quality Assurance Specialist II at McGraw Hill ALEKS, I’ve cultivated strong attention to detail and problem-solving skills within an agile team, ensuring every product meets the highest standards.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/tech-stack-logo-img.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Front-End: <span className='font-bold'>React, JavaScript, TypeScript, Tailwind</span>
              </p>
              <p className="grid-subtext">
                Back-End: <span className='font-bold'>Node.js, Express, PostgreSQL, MongoDB</span>.
              </p>
              <p className="grid-subtext">
                Learning: <span className='font-bold'>Python, Next.js, Three.js</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/education-img.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Education</p>
              <div className="grid-subtext">
                <p className='font-bold'>
                  Full Stack Web Development Program
                </p>
                <p className='italic'>
                  LearningFuze
                </p>
                <p className='font-bold'>
                  Master of Science in Applied Mathematics
                </p>
                <p className="italic">
                  California State University, Long Beach
                </p>
                <p className='font-bold'>
                  Bachelor of Science in Mathematics
                </p>
                <p className="italic">
                  California State University, Long Beach
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <a href="https://www.proquest.com/openview/f2dcceec53a41f7010c856e22ce3632e/1?pq-origsite=gscholar&cbl=18750" target="_blank">
              <img src="assets/csulb-particles.gif" alt="grid-4" className="w-full sm:h-[276px] h-fit object-contain" />
            </a>

            <div>
              <p className="grid-headtext">Publication</p>
              <p className="grid-subtext">
                During my academic journey, I collaborated with Dr. Sun on a <a className="text-blue-600 dark:text-blue-500 hover:underline" href="https://www.proquest.com/openview/f2dcceec53a41f7010c856e22ce3632e/1?pq-origsite=gscholar&cbl=18750" target="_blank">thesis focused on fluid dynamics</a>, where I honed my skills in fluid simulation using MATLAB. This experience deepened my understanding of both the theoretical and computational aspects of solving incompressible Navier-Stokes equations, blending mathematical theory with practical coding applications.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Riverside, California and open to remote work and in-person work. I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div> */}

        {/* <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">vorleakyek@gmail.com</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
