import {Link} from 'react-router-dom'

const Portfolio = () => {

    return <>
    <div className="container bg--400 text-center">
        <div className="bg--500 content-wrapper inline-block max-w-[500px] text-left w-full overflow-hidden m-auto">
          <div className="content inline-block cn" >
            <h1 className='text-3xl'>Sahiwl</h1>
            <p>
              <img src="./megamind.jpg" className="size-24 rounded-full"  alt="" />
            </p>
            <p className=''>19</p>
            <p>MERN developer</p>
            <p>30% code + 70% debugging</p>
            <p>Always up for tech-events, conferences, hackathons</p>
            <p>waist-deep into dev, philosphy, stoicism, indie-rock</p>
            <p>must read: <a href="https://www.google.co.in/books/edition/Embrace_the_Suck/hr3bDwAAQBAJ?hl=en&gbpv=0">.    .    .     .</a></p>
            <p>hmu on discord: <code className='blur-sm hover:filter-none '><a href="https://discord.com/users/550329365444034561">let's converse</a></code></p>
            <h2>now</h2>
            <ul className=''>
              <li>
              a sophmore pursuing B.Tech (CSE)
              </li>
              <li>deep diving web-dev</li>
              <li>learning so as to buy a 911 someday</li>
              <li>building small projects every week</li>
            </ul>
            <h2>alter egos</h2>
            <p><a href='https://twitter.com/sahilwithocd'>twitter </a>, <a href="https://github.com/sahiwl">github</a>, <a href="https://www.instagram.com/saahilkr">instagram</a></p>
            <h2>more of me:</h2>
            <ul>
              <li><Link to="/aboutme">About me</Link></li>
              <li>mini-projects</li>
              <li><a href='https://www.last.fm/user/redgy01'>spotify stats</a></li>
              <li><a href='https://vsco.co/saah1l/'>vsco</a></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
    </div>
    </>

}

export default Portfolio;