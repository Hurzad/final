import React from 'react';

const About = () => {
  return (
    <div className="about-us">
      <div className="about-head-img">
        <img
          src="https://www.asus.com/WebsitesBanner/TR/banners/hxedlrdgfqupnda7/hxedlrdgfqupnda7-0_0_desktop_1X.jpg?webp"
          alt=""
          className="background-img"
        />
        <h1>ASUS ROG <br />SERISI</h1>
      </div>

      <div className="container mt-5">
        <div className="about-data">
          <div className="data-part1">
            <h1>Our Story</h1>
            <h2>The story begins …</h2>
            <p>The idea for the company that would eventually become ASUS began <br />
              as a conversation in a coffee shop in Taipei, where a few ambitious <br />
              engineers shared a dream of creating a “small and beautiful company.”</p>
            <img src="https://dlcdnimgs.asus.com/websites/global/productcustomizedTab/5387/v2/history/images/large/1x/story/1/1.jpg" alt="" />

            <p>Within eight months, these engineers had created the Cache 386/33 and <br />
              ISA 486/25 — two personal computer motherboards used in industry-leading products <br />
              built by IBM and ALR. With the success of these early motherboards, Taiwan became <br />
              known globally as a hub for high-quality IT products.</p>
            <img src="https://dlcdnimgs.asus.com/websites/global/productcustomizedTab/5387/v2/history/images/large/1x/story/1/2.jpg" alt="" />
            <h6>The independently developed ASUS ISA-486 is praised by Intel, marking the beginning of a long-lasting partnership between ASUS and Intel.</h6>
            <img width={600} src="https://www.asus.com/websites/global/productcustomizedTab/5387/v2/history/images/large/1x/story/5/4.jpg" alt="" />
          </div>



          <div className="data-part2">
            <p>Established in 1989, ASUS is a multinational company known for <br />
              the world’s best motherboards and high-quality personal computers, <br />
              monitors, graphics cards, routers and other technology solutions. Today, <br />
              ASUS is designing and building next-generation smart technologies to provide <br />
              incredible experiences that enhance the lives of people everywhere.</p>
            <h1>Celebrating milestones … & boldly looking to the future</h1>

            <p>As the second decade of the 21st century came to a close, <br />
              ASUS celebrated 30 years of historic innovation and excellence <br />
              with a series of events and product releases. In a special anniversary-year <br />
              highlight event held during Computex 2019, Chairman Jonney Shih introduced <br />
              a limited-edition series of devices to commemorate 30 years in business: <br />
              ZenFonebr 6 Edition 30, Zenbook Edition 30, Prime X299 Edition 30. The event <br />
              also included a preview of the Prime Utopia concept motherboard, featuring a <br />
              bold new design that once again affirmed ASUS as the No.1 motherboard maker in the world.</p>
            <img width={600} src="https://www.asus.com/websites/global/productcustomizedTab/5387/v2/history/images/large/1x/story/5/3.jpg" alt="" />
            <p>As the second decade of the 21st century came to a close, ASUS celebrated 30 years of
              historic innovation and excellence with a series of events and product releases. In a
              special anniversary-year highlight event held during Computex 2019, Chairman Jonney
              Shih introduced a limited-edition series of devices to commemorate 30 years in business:
              ZenFone 6 Edition 30, Zenbook Edition 30, Prime X299 Edition 30. The event also included
              a preview of the Prime Utopia concept motherboard, featuring a bold new design that once
              again affirmed ASUS as the No.1 motherboard maker in the world.</p>
            <h2>A proud tradition of creating innovative technologies for everyone </h2>
            <p>Moving into the second decade of the 21st century, ASUS management recognized that there was an opportunity to positively impact local and global communities through efforts related to sustainability.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;








