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
      title: 'weathium',
      description: 'Discord bot for instant weather updates: current conditions, forecasts, and smart notifications anywhere.',
      link: 'https://github.com/1kin0?tab=repositories',
      tags: ['Python', 'Chromium']
    },
    second: {
      title: 'blurry',
      description: 'Edit images and apply fun effects or stickers directly in your Discord chats effortlessly.',
      link: 'https://github.com/1kin0?tab=repositories',
      tags: ['Python', 'Chromium']
    },
    third: {
      description: 'Experienced dev open for collaboration on bots, web apps, DevOps projects—reach out anytime!',
    },
    fourth: {
      description: 'Coming soon: exciting new project in development—stay tuned for updates and features.',
    },
    fifth: {
      title: 'verc.im',
      description: 'Sleek portfolio site showcasing my dev projects, tech skills, and easy contact options.',
      link: 'https://github.com/1kin0?tab=repositories',
      tags: ['React', 'JavaScript']
    },
    last: {
      title: 'your idea',
      description: 'will be here!',
    },
  };
  
  return (
    <>
      {Object.values(projectsList).map((project, index) => (
          <SpotlightCard
            link={project.link}
            tags={project.tags}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
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

        <h1 id='title'>Vercim</h1>
        <p id='descr'>Welcome to my homepage</p>
      </section>

      <section className='bg-transparent text-gray-300 w-lvw min-h-svh flex flex-col items-center justify-center relative overflow-hidden' id='about'>
        <h1 className='p-2 z-1 -rotate-6 italic' id='title'>Introducing</h1>
        <img src={arrowSvg} alt="arrow" className='relative z-1 w-80 max-[900px]:w-40 right-30'/>
        <CardSwap
            cardDistance={150}
            verticalDistance={70}
            delay={10000}
            pauseOnHover={false}
        >

            <Card>
              <h1>Frontend</h1>
              <p>Frontend developer focused on Next.js and React. I build fast, SEO-optimized apps with SSR/SSG, TypeScript, and Tailwind. My approach: clean code, responsive design, API integrations. Portfolio includes SPAs, landing pages, and dashboards on Vercel. Goal: scalable web that delights users.</p>
            </Card>

            <Card>
              <h1>Bots</h1>
              <p>Bots expert for Discord/Telegram using discord.js and Python/Telegraf. Develop with DBs (PostgreSQL), webhooks, moderation, AI integrations. Approach: modular code, error-handling, scalability. Portfolio: bots for 10k+ users, task automation. Goal: simplify routines with smart scripts.</p>
            </Card>

            <Card>
              <h1>DevOps</h1>
              <p>DevOps specialist: Docker, CI/CD (GitHub Actions), deploy on Vercel/Railway/Linux VPS. Set up monoliths/microservices, Nginx, monitoring. Approach: zero-downtime, automation, security-first. Portfolio: full pipelines for web apps. Goal: stable, cost-effective launches.</p>
            </Card>

            <Card>
              <h1>Backend</h1>
              <p>Backend on Node.js/Python with REST/GraphQL APIs, auth (JWT/OAuth), DBs (MongoDB/PostgreSQL). Integrate with frontend, handle loads. Approach: SOLID principles, tests (Jest/Pytest), docs. Portfolio: APIs for bots and sites. Goal: reliable servers for any traffic.</p>
            </Card>

            <Card>
              <h1>Fullstack</h1>
              <p>Fullstack developer: UI/UX to servers and deploy. Share projects on GitHub with open code. Approach: agile, user-centric, open-source contribs. Goals: end-to-end solutions that grow with business. Portfolio: 10+ apps (web, bots, dashboards).</p>
            </Card>
          </CardSwap>

          <div id='static-dot-grid'></div>
      </section>

      <section className= 'w-lvw min-h-svh flex flex-col items-center justify-center relative overflow-hidden' id='skills'>
        <h1 id='title'>Skills</h1>
        <img src={strokeSvg} alt="stroke" className='z-1 w-60'/>
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
        <h1 id='title' className='mt-6'>Projects</h1>
        <p id='descr' className='mb-6'>A lot of unusual works</p>

        <div id='card-grid'>
          {CreateProjectCards()}
        </div>

        <div id='static-dot-grid'></div>
      </section>

      <section className= 'w-lvw min-h-svh flex flex-col items-center justify-center relative overflow-hidden' id='contact'>
      <img src={heartSvg} alt="heart" className='m-6 w-40'/>
      <div id='circle-glow'></div>

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
