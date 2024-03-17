import {Link} from 'react-router-dom'

const Projects = () => {
  return <>
    <nav className="">
      <p className='pl-3 ml-3'><Link to="/">back</Link></p>

    </nav>
    <div className="container text-center">
        <div className="content-wrapper inline-block max-w-[500px] text-left w-full overflow-hidden p-2.5" >
          <div className="content inline-block font-Montserrat m-auto mb-[20px]" >
          <h1 className="text-center">Projects I'm building/built in the past</h1>
          <ul>
            <li><a href="https://sahiwl-todo.vercel.app/" target="_blank">todo-app: </a>a handy tool to list all your todos on a webpage</li>
            <li><a href="https://sahiwl-me.vercel.app" target="_blank"> personal-site: </a>the one you're on right now</li>
            <li> <a href="https://weatherapp-by-sahil.vercel.app/" target="_blank">weather-app: </a>returns current weather statistics based on the city/town provided</li>
          </ul>
        </div>
      </div>
    </div>
  </>

}
export default Projects;