//Resources
import { useState } from 'react'
import './Landing.css'
import arrowSvg from '/src/assets/arrow.svg'
import heartSvg from '/src/assets/heart.svg'
import strokeSvg from '/src/assets/stroke.svg'

//Effects
import LightRays from '/src/components/effects/LightRays.jsx'
import CurvedLoop from '/src/components/effects/CurvedLoop.jsx'
import ShinyText from '/src/components/effects/ShinyText.jsx'
import SpotlightCard from '/src/components/effects/SpotlightCard.jsx'
import CardSwap, { Card } from '/src/components/effects/CardSwap.jsx'


function CreateProjectCards() {
  const projectsList = {
    first: {
      description: 'my test first project abla blo bloa lblaadoe with testing test lal lao',
      title: 'weathium',
      link: ''
    },
    second: {
      description: 'my test first project abla blo bloa lblaadoe with testing test lal lao',
      title: 'blurry',
      link: ''
    },
    third: {
      description: 'my test first project abla blo bloa lblaadoe with testing test lal lao',
      title: '',
      link: ''
    },
    fourth: {
      description: 'my test first project abla blo bloa lblaadoe with testing test lal lao',
      title: '',
      link: ''
    },
    fifth: {
      description: 'my test first project abla blo bloa lblaadoe with testing test lal lao',
      title: 'verc.im',
      link: ''
    },
    last: {
      description: 'will be here!',
      title: 'your idea',
      link: '#contact'
    },
  };
  
  return (
    <>
      {Object.values(projectsList).map((project, index) => (
        <SpotlightCard key={project.title || index}>
          <a href={project.link}><h2 className="text-3xl font-bold">{project.title}</h2></a>
          <span className="text-gray-400">{project.description}</span>
        </SpotlightCard>
      ))}
    </>
  );
}


const Landing = () => {
  return (
    <>
      <section className='w-lvw h-lvh flex flex-col items-center justify-center relative overflow-hidden' id='home'>
        <div id='light-effect'>
          <LightRays
              raysOrigin="top-center"
              raysColor="#ffffff"
              raysSpeed={1}
              lightSpread={0.55}
              rayLength={3.7}
              followMouse={true}
              mouseInfluence={0.08}
              noiseAmount={.26}
              distortion={0}
              className="custom-rays"
              pulsating={false}
              fadeDistance={1.8}
              saturation={1}
          />
        </div>

        <h1 className='font-bold italic' id='title'>Vercim</h1>
        <p id='descr'>Welcome to my homepage</p>
      </section>

      <section className='bg-transparent text-gray-300 w-lvw min-h-svh flex flex-col items-center justify-center relative overflow-hidden' id='about'>
        <h1 className='p-2 z-1 -rotate-6 italic' id='title'>Introducing</h1>
        <img src={arrowSvg} alt="arrow" className='z-1 w-80'/>
        <CardSwap
            cardDistance={150}
            verticalDistance={70}
            delay={6000}
            pauseOnHover={false}
        >

            <Card>
              <h1>Target 1</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </Card>

            <Card>
              <h1>Target 2</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </Card>

            <Card>
              <h1>Target 3</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </Card>

            <Card>
              <h1>Objective</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </Card>

            <Card>
              <h1>Subjective</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </Card>
          </CardSwap>

          <div id='static-dot-grid'></div>
      </section>

      <section className= 'w-lvw min-h-svh flex flex-col items-center justify-center relative overflow-hidden' id='skills'>
        <h1 id='title' className='italic'>Skills</h1>
        <img src={strokeSvg} alt="stroke" className='z-1 w-62'/>
        <div className='w-full absolute top-5'>
          <CurvedLoop 
            marqueeText="✦ c ✦ py ✦ js ✦ lua "
            speed={0.8}
            curveAmount={580}
            direction="left"
          />
        </div>
      </section>

      <section className='bg-transparent text-gray-300 w-lvw min-h-svh flex flex-col items-center justify-center relative overflow-hidden py-12' id='projects'>
        <h1 id='title' className='italic mt-6'>Projects</h1>
        <p id='descr'>A lot of unusual works</p>

        <div id='card-grid'>
          {CreateProjectCards()}
        </div>

        <div id='static-dot-grid'></div>
      </section>

      <section className= 'w-lvw min-h-svh flex flex-col items-center justify-center relative overflow-hidden' id='contact'>
      <img src={heartSvg} alt="heart" className='m-6 w-40'/>
        <div className='text-6xl'>
          <ShinyText
            text='Dm me'
            speed={2}
          />
        </div>
        <span id='descr'>
          <a href="">tg</a>, <a href="">ds</a>, <a href="">mail</a>, etc.
        </span>
      </section>
    </>
  )
}

export {Landing};
