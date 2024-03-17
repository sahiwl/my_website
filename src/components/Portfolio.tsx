import {Link} from 'react-router-dom'
const Portfolio = () => {

    return <>
    <div className="container text-center">
        <div className="content-wrapper inline-block max-w-[500px] text-left w-full overflow-hidden p-2.5" >
          <div className="content inline-block cn font-Montserrat m-auto mb-[20px]" >
            <h1 className='text-4xl'>Sahiwl</h1>
            <p className='-mt-5 pl-20 ml-5 '>...aka Sahil </p>

            <p>
              <img src="./megamind.jpg" className="size-24 rounded-full"/>
            </p>
            <p>19</p>
            <p>mern developer</p>
            <p>30% code + 70% debugging</p>
            <p>always up for tech-events, conferences, hackathons</p>
            <p>waist-deep into dev, philosphy, stoicism, indie-rock</p>
            <p>must read: <a href="https://www.google.co.in/books/edition/Embrace_the_Suck/hr3bDwAAQBAJ?hl=en&gbpv=0" target="_blank">.    .    .     .</a></p>
            <p>hmu on  <a href="https://discord.com/users/550329365444034561" target="_blank">discord</a></p>
            <h2>presently</h2>
            <ul>
              <li>a sophmore pursuing B.Tech (CSE)</li>
              <li>deep diving web-dev</li>
              <li>grinding so as to buy a <a href="https://www.porsche.com/international/models/911/911-turbo-models/911-turbo-s" target="_blank">911</a> someday</li>
              <li>building small projects every week</li>
            </ul>
            <h2>alter egos</h2>
            <p><a href='https://twitter.com/sahilwithocd' target="_blank">twitter</a>, <a href="https://github.com/sahiwl" target="_blank">github</a>, <a href="https://www.instagram.com/saahilkr" target="_blank">instagram</a></p>
            <h2>more of me</h2>
            <ul>
              <li><Link to="/aboutme">about me</Link></li>
              <li> <Link to="/projects">mini-projects</Link></li>
              <li><a href='https://www.last.fm/user/redgy01' target="_blank">spotify stats</a></li>
              <li><a href='https://vsco.co/saah1l' target="_blank">vsco</a></li>
              <li><a href="https://letterboxd.com/Redgy/" target="_blank">letterbox</a></li>
            </ul>
          </div>
        </div>
    </div>
    </>

}

export default Portfolio;