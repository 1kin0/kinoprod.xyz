import { useState } from 'react'
import './App.css'
import arrowSvg from './assets/arrow.svg'
import heartSvg from './assets/heart.svg'
import strokeSvg from './assets/stroke.svg'

//Components
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

//Effects
import LightRays from './components/effects/LightRays.jsx'
import CurvedLoop from './components/effects/CurvedLoop.jsx'
import ShinyText from './components/effects/ShinyText.jsx'
import SpotlightCard from './components/effects/SpotlightCard.jsx'
import CardSwap, { Card } from './components/effects/CardSwap.jsx'

//Vercel
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function CreateProjectCards() {
  const projectsList = {
    first: {
      description: 'my test first project abla blo bloa lblaadoe with testing test lal lao',
      title: 'first',
      link: 'https://github.com'
    },
    second: {
      description: 'my test first project abla blo bloa lblaadoe with testing test lal lao',
      title: 'second',
      link: 'https://roblox.com'
    },
    third: {
      description: 'my test first project abla blo bloa lblaadoe with testing test lal lao',
      title: 'third',
      link: 'https://microsoft.com'
    },
    thirdV2: {
      description: 'my test first project abla blo bloa lblaadoe with testing test lal lao',
      title: 'thirdV2',
      link: 'https://microsoft.com'
    },
    quad: {
      description: 'my test first project abla blo bloa lblaadoe with testing test lal lao',
      title: 'quad',
      link: 'https://google.com'
    }
  };
  
  return (
    <>
      {Object.values(projectsList).map((project, index) => (
        <SpotlightCard key={project.title || index}>
          <h2 className="text-xl font-bold">{project.title}</h2>
          <span className="text-gray-400">{project.description}</span>
        </SpotlightCard>
      ))}
    </>
  );
}


function App() {
  return (
    <>
      <Header/>

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
              noiseAmount={.2}
              distortion={0}
              className="custom-rays"
              pulsating={false}
              fadeDistance={1.8}
              saturation={1}
          />
        </div>

        <h1 className='p-2 text-4xl'>Welcome</h1>
        <p className='text-gray-500'>Welcome to my homepage!</p>
      </section>

      <section className='bg-transparent text-gray-300 w-lvw min-h-svh flex flex-col items-center justify-center relative overflow-hidden' id='about'>
        <h1 className='p-2 text-4xl z-1'>Introducing</h1>
        <img src={arrowSvg} alt="arrow" className='z-1 w-3xs'/>
        <CardSwap
            cardDistance={70}
            verticalDistance={100}
            delay={5000}
            pauseOnHover={false}
            className='z-1'
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
        <div className='w-full absolute'>
          <CurvedLoop 
            marqueeText="✦ rbx ✦ ue5 ✦ unity ✦ web "
            speed={1}
            curveAmount={600}
            direction="right"
            interactive
            className="custom-text-style"
          />
          <CurvedLoop 
            marqueeText="✦ c++ ✦ py3 ✦ js ✦ lua "
            speed={1}
            curveAmount={-400}
            direction="right"
            interactive
            className="custom-text-style"
          />
        </div>
        <div className='text-6xl'>
          <ShinyText
            text='Skills'
            speed={2}
          />
        </div>
        <img src={strokeSvg} alt="stroke" className='z-1 w-3xs'/>
      </section>

      <section className='bg-transparent text-gray-300 w-lvw min-h-svh flex flex-col items-center justify-center relative overflow-hidden py-12' id='projects'>
        <h1>Projects</h1>
        <p className='text-gray-500'>A lot of unusual works</p>

        <div id='card-grid'>
          {CreateProjectCards()}
        </div>

        <div id='static-dot-grid'></div>
      </section>

      <section className= 'w-lvw min-h-svh flex flex-col items-center justify-center relative overflow-hidden' id='contact'>
        <div className='text-6xl'>
          <ShinyText
            text='Dm me'
            speed={2}
          />
        </div>
        <img src={heartSvg} alt="heart" className='m-6 w-18'/>
      </section>

      <Analytics/>
      <SpeedInsights/>

      <Footer/>
    </>
  )
}

export default App
