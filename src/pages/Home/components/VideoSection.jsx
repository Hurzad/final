import React from 'react'

const VideoSection = () => {
  return (
    <div className="videoTexts">
      <div className="videotexts-1">
        <h1>Gear Up</h1>
        <h3>THROW <br /> DOWN</h3>
        <p>There are many variations of passages of Lorem Ipsum available, but <br />
          the majority have suffered alteration in some form, by injected <br />
          humour, or randomised words which don’t look even slightly <br />
          believable. If you are going to use a passage.</p>
        <button id='purp-btn'>VIEW MORE</button>
        <button id='white-btn'>GO TO SHOP</button>
      </div>
      <div className="videotexts-2">

        <a class="video-link" target='blank' href="http://www.youtube.com/watch?v=XHOmBV4js_E" >
          {/* <span> <i class="fa-solid fa-play"></i></span> */}
          <img src="	https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-costume-mod-opt.jpg.webp" alt="" />
        </a>
      </div>
    </div>
  )
}

export default VideoSection