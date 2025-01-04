import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

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
              {/* <p className="grid-headtext">Hi, I’m Vorleak Yek</p> */}
              <p className="grid-headtext">Full-Stack Developer Volunteer | QA Specialist</p>
              <p className="grid-subtext">

                <ul className="list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">
                      ⭐
                    </span>
                    <span>
                      <span className='font-semibold'>3+ years</span> of experience in <span className='font-semibold'>frontend and backend development</span>, specializing in dynamic and responsive web applications.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">
                      ⭐
                    </span>
                    <span>
                      <span className='font-semibold'>Full-Stack Developer Volunteer</span> at <span className='font-semibold'>Hack for LA</span>, collaborating on meaningful projects and continually expanding technical expertise.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">
                      ⭐
                    </span>
                    <span>
                      <span className='font-semibold'>5 years as a Quality Assurance Specialist II</span> at <span className='font-semibold'>McGraw Hill ALEKS</span>, excelling in <span className='font-semibold'>attention to detail</span> and <span className='font-semibold'>problem-solving</span> within an <span className='font-semibold'>agile team environment</span>.
                    </span>
                  </li>
                </ul>
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
              <br />
              <p className="grid-subtext">
                Tools: <span className='font-bold'>Git, GitHub, Figma, Confluence, JIRA, JAWS, AWS</span>
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/groupwork.png"
              alt="grid-5"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-headtext">What I Bring to the Table</p>
              <p className="grid-subtext">
                <ul className='list-none'>
                  <li className='flex items-start gap-2'>
                    <span className="text-yellow-500">&#10148;</span>
                    <span>
                      <span className='font-semibold'>5+ years of Quality Assurance experience</span> — Ensuring products meet the highest standards of functionality and reliability.
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className="text-yellow-500">&#10148;</span>
                    <span>
                      <span className='font-semibold'>3+ years of Web Development experience</span> — Building dynamic, user-friendly applications with modern technologies.
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className="text-yellow-500">&#10148;</span>
                    <span>
                      <span className='font-semibold'> User-Centric Mindset</span> — Advocating for intuitive UI/UX design and seamless webpage interactions from an end-user perspective.
                    </span>
                  </li>
                </ul>
              </p>

              <div>
                <p className="grid-subtext text-center font-bold pt-7">Contact me</p>
                <div className="copy-container" onClick={handleCopy}>
                  <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                  <p className="lg:text-2xl md:text-xl font-medium text-teal-900">vorleakyek@gmail.com</p>
                </div>
              </div>
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
                  Full-Stack Web Development Program
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

        <div className="xl:col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/workstation.png" alt="grid-4" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I’m passionate about solving problems and building impactful solutions through code. Over the past three years, I’ve dedicated my evenings to web development—exploring new technologies, honing my skills, and bringing ideas to life with dynamic applications. Every line of code feels like a step toward creating something meaningful, driven by the belief that technology can truly make a difference.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <a href="https://www.proquest.com/openview/f2dcceec53a41f7010c856e22ce3632e/1?pq-origsite=gscholar&cbl=18750" target="_blank">
              <img src="assets/csulb-particles.gif" alt="grid-3" className="w-full sm:h-[276px] h-fit object-contain" />
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
      </div>
    </section>
  );
};

export default About;
