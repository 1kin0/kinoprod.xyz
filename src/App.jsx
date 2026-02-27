//Resources
import { Routes, Route, Link } from 'react-router-dom'

//Components
import Header from '/src/components/Header.jsx'
import Footer from '/src/components/Footer.jsx'

//Pages
import { Landing } from '/src/pages/Landing'
import { NotFound } from '/src/pages/NotFound'

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

      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>

      <Analytics/>
      <SpeedInsights/>

      <Footer/>
    </>
  )
}

export default App
