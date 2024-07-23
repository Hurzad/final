import React from 'react'

const Processor = () => {
    return (
            <div className="black-PC">
            <div className="sectionsPC">
                <div className="secOne">
                    <div className="pcPhoto">
                        <img id='pros' src="	https://woodmart.xtemos.com/wp-content/uploads/2018/03/nzxt-1c.png" alt="" />
                    </div>
                    <div className="pcAbout"></div>
                </div>

                <div className="secTwo">
                    <h1>Build Your</h1>
                    <h3 id='PC1'>NEW PC</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority <br /> have suffered alteration in some form, by injected humour, or randomised.</p>
                    <div className="pcObjects">
                        <div className="pcOne">
                            <div className="pcOne-img">
                                <img src="https://woodmart.xtemos.com/wp-content/uploads/2018/03/black-electronics-vcard.svg" alt="" />
                            </div>
                            <div className="pcOne-text">
                                <h5>10+ inch GPU</h5>
                                <h6>Mauris blandit aliquet</h6>
                            </div>
                        </div>
                        <div className="pcTwo">
                            <div className="pcTwo-img">
                                <img src="https://woodmart.xtemos.com/wp-content/uploads/2018/03/black-electronics-ram.svg" alt="" />
                            </div>
                            <div className="pcTwp-text">
                                <h5>8 RAM SLOTS</h5>
                                <h6>Cras ultricies ligula sed</h6>
                            </div>
                        </div>
                    </div>
                    <div className="pcBtns">
                        <button id='pcPurple'>NEXT STEP</button>
                        <button id='pc-Case'>COOSE PC-CASE</button>
                    </div>
                </div>


            </div>
            </div>
    )
}

export default Processor
