import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="end pt-3">
          <div className="foot-sec-One">
            <div className="secOne-part1">
              <img width={300} src="	https://woodmart.xtemos.com/wp-content/uploads/2018/08/wood-logo-dark.svg" alt="" />
              <p className='pt-2'>Condimentum adipiscing vel neque dis nam <br />
                parturient orci at scelerisque neque dis nam <br />
                parturient.</p>
              <h6><img src="https://woodmart.xtemos.com/wp-content/uploads/2023/09/wd-cursor-dark.svg" alt="" />451 Wall Street, UK, London</h6>
              <h6><img src="https://woodmart.xtemos.com/wp-content/uploads/2023/09/wd-phone-dark.svg" alt="" />Phone:(064) 332-1233</h6>
              <h6><img src="https://woodmart.xtemos.com/wp-content/uploads/2023/09/wd-envelope-dark.svg" alt="" />Fax: (099) 453-1357</h6>
            </div>


            <div className="secOne-part2">
              <h4>RECENT POSTS</h4>

              <div className="post-1">
                <img src="https://woodmart.b-cdn.net/wp-content/uploads/2016/07/blog-12-75x65.jpg" alt="" />
                <div className="post1-text">
                  <h5>A companion for extra <br />
                    sleeping</h5>
                  <h6>July 23, 2016 1 Comment</h6>
                </div>
              </div>

              <div className="post-2 pt-4">
                <img src="https://woodmart.b-cdn.net/wp-content/uploads/2016/07/blog-11-75x65.jpg" alt="" />
                <div className="post2-text">
                  <h5>A companion for extra <br />
                    sleeping</h5>
                  <h6>July 23, 2016 1 Comment</h6>
                </div>
              </div>

            </div>
          </div>



          <div className="foot-sec-Two">
            <div className="foot-line1">
              <h3>Our Stores</h3>
              <ul>
                <li>New York</li>
                <li>London SF</li>
                <li>Edinburgh</li>
                <li>Los Angeles</li>
                <li>Chicago</li>
                <li>Las Vegas</li>
              </ul>
            </div>


            <div className="foot-line2">
              <h3>USEFUL LINKS</h3>
              <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/contact"><li>Contact Us</li></NavLink>
                <NavLink to="/faq"><li>FAQ'S</li></NavLink>
                <NavLink to="/add"><li>Shop</li></NavLink>
                <NavLink to="/login"><li>Login/Register</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
              </ul>
            </div>
            <div className="foot-line3"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
