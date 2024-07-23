import React from 'react';

const FAQ = () => {
  return (
    <div className="faq">
      <div className="container">
        <h1 className='pt-5'>ARTICLES</h1>
        <h2>FAQ'S</h2>
        <h3>Frequently asked questions</h3>

        <div className="faq-circle mt-5">
          <div className="faq-que">
            <div className="accordion" id="accordionExample">

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What is the Republic of Gamers (ROG)?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>ROG, or Republic of Gamers,</strong> is a brand by ASUS dedicated to delivering innovative gaming products and experiences to gamers worldwide.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    What products does ROG offer?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>ROG offers a wide range of products</strong> including gaming laptops, desktops, motherboards, graphics cards, monitors, peripherals, and accessories tailored for gaming enthusiasts.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Where can I purchase ROG products?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>You can purchase ROG products</strong> from ASUS's official website, major online retailers, and authorized technology stores globally.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    What warranty options are available for ROG products?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>ROG products typically come with a manufacturer's warranty</strong> that covers defects in materials and workmanship under normal use. Warranty details may vary by region and product type, so it's recommended to check ASUS's official warranty policy for specific terms and conditions.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    How can I get technical support for my ROG product?
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>Technical support for ROG products</strong> can be accessed through ASUS's customer support services, including online resources, community forums, and direct customer service contact options available on their official website.
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="faq-photo">
            <img src="https://rog.asus.com/dist/img/rog-404.jpg" alt="" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQ;
