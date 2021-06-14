import React from 'react';
import styled from 'styled-components'
import aweex from '../../Assets/aweex.jpg'
import caliegh from '../../Assets/caliegh.jpg'
import chris from '../../Assets/chris.jpg'
import fuckyomom from '../../Assets/fuckyomom.jpg'
import jason from '../../Assets/jason.jpg'
import jordan from '../../Assets/jordan.jpg'
import julia from '../../Assets/julia.jpg'
import karly from '../../Assets/karly.jpg'
import kristen from '../../Assets/kristen.jpg'
import maddie from '../../Assets/maddie.jpg'
import marie from '../../Assets/marie.jpg'
import miamarieta from '../../Assets/miamarieta.jpg'
import prettyboy from '../../Assets/prettyboy.jpg'
import ryan from '../../Assets/ryan.jpg'
import sexyblackboy from '../../Assets/sexyblackboy.jpg'
import tabs from '../../Assets/tabs.jpg'
import traci from '../../Assets/traci.jpg'
import thebetterchris from '../../Assets/thebetterchris.jpg'
import brandon from '../../Assets/brandon.jpg'

const PartyStyling = styled.div`
height:fit-content;
background-color:rgba(255,250,240, 0.9);
padding-top:90px;
@media screen and (max-width: 768px){
    padding-top :1vh;
    height: fit-content;
}
h1{
    padding-top: 4vh;
    font-family: 'Pinyon Script', cursive;
    font-size:60px;
    font-weight:100;
    line-height: 1.5;
    text-align:center;
 @media screen and (max-width: 768px){
    display: block;
    padding-top: 0vh;
    font-size: 40px;
    margin-top:60px;
}
}
.section-title{
    text-align: center;
    padding: 2vh;
    font-family: 'Pinyon Script';
    font-weight: 100;
    font-size: 40px;
}

.Party {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  max-width: 40vw;
  margin-right: 0 ;
  margin-left:0;
  @media screen and (max-width:980px) {
    max-width: 80vw;
  }
  }
  .Party-box{
    display: flex;
    grid-template-rows: min-content auto min-content;
    /* text-align: center; */
    justify-content: space-around;
    -webkit-overflow-scrolling: touch;
  @media screen and (max-width:980px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  }
  .Party-box {
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width:768px) {
   .div-container{
    display: inline-flex;
    flex-direction: column-reverse;
    height:80vh;
   }
   .fit {
      height: auto;
      max-width: 260px;
      padding: 10px;
      flex: 1 auto;
      border: 2px solid wheat;
}
 }
 @media screen and (max-width:404px) {
   .div-container{
      display: flex;
      overflow: scroll;
      flex-direction: column;
      flex-flow: none;
      align-items: center;
      justify-content: center;
      padding: 10px;
      height: 80vh;
   }
   .fit {
      height: auto;
      max-width: 290px;
      padding: 10px;
      flex: 1 auto;
      border: 2px solid wheat;
}
 }
}

a{
    text-decoration: none;
    color: inherit;
    font-weight:bolder;
    transition: all .2s ease-in-out; 
}

.party-imgs {
    height: 250px;
    /* width: auto; */
    max-width: max-content;
    /* padding: 10px; */
    flex: 1 auto;
    border: 2px solid wheat;
  }
  
  .party-content {
    text-align: center;
    padding-bottom: 5vh;
    max-width: fit-content;
    display:flex;
  }

  .card-content {
    /* border: 1px solid black; */
    display:flex;
    width: 40vw;
  @media screen and (max-width:980px) {
    width: 80vw;
  }
  @media screen and (max-width:497px) {
    display:block;
  }
  }
  .text-content {
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    max-width:fit-content;
  }
  
  .Party-name {
    font-family: 'Jost', sans-serif;
    font-weight:200;
    text-align: left;
    padding-top: 30px;
  }
  
  .Party-description {
      padding-top: 10px;
    text-align: start;
    font-size: 12px;
    line-height: 2.1;
  }

`

function Party() {
    return (
        <PartyStyling>
            <div id='Party'>
                <h1 className="section-title">Meet the Wedding Party</h1>
                <div className="Party-box">
                    {/* <div ref={elemRef} className="container"> */}
                    <div className="container">
                        <div className="Party">
                            <h3 className="section-title">On the Bride's side...</h3>
                            <div className="party-content">
                                <div className="card-content">
                                    <img
                                        className="party-imgs"
                                        src={julia}
                                        alt="party png"
                                    />
                                    <div className="text-content">
                                        <h2 className="Party-name">Julia Otero</h2>
                                        <p className="Party-description">Maid of Honor. Cousin of the bride. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="party-content">
                                <div className="card-content">
                                    <img
                                        className="party-imgs"
                                        src={karly}
                                        alt="party png"
                                    />
                                    <div className="text-content">
                                        <h2 className="Party-name">Karly Briard</h2>
                                        <p className="Party-description">Bridesmaid. Future sister-in-law.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="party-content">
                                <div className="card-content">
                                    <img
                                        className="party-imgs"
                                        src={marie}
                                        alt="party png"
                                    />
                                    <div className="text-content">
                                        <h2 className="Party-name">Marie Riera</h2>
                                        <p className="Party-description">Bridesmaid. Cousin of the bride.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="party-content">
                                <div className="card-content">
                                    <img
                                        className="party-imgs"
                                        src={tabs}
                                        alt="party png"
                                    />
                                    <div className="text-content">
                                        <h2 className="Party-name">Tabatha Tarrafa</h2>
                                        <p className="Party-description">Bridesmaid. Cousin of the bride.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="party-content">
                                <div className="card-content">
                                    <img
                                        className="party-imgs"
                                        src={kristen}
                                        alt="party png"
                                    />
                                    <div className="text-content">
                                        <h2 className="Party-name">Kristen Haas</h2>
                                        <p className="Party-description">Bridesmaid. Cousin of the bride.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="party-content">
                                <div className="card-content">
                                    <img
                                        className="party-imgs"
                                        src={traci}
                                        alt="party png"
                                    />
                                    <div className="text-content">
                                        <h2 className="Party-name">Traci Bloch</h2>
                                        <p className="Party-description">Bridesmaid. Cousin of the bride.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="party-content">
                                <div className="card-content">
                                    <img
                                        className="party-imgs"
                                        src={jordan}
                                        alt="party png"
                                    />
                                    <div className="text-content">
                                        <h2 className="Party-name">Jordan Beaubrin</h2>
                                        <p className="Party-description">Bridesmaid. Friend of the bride.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="party-content">
                                <div className="card-content">
                                    <img
                                        className="party-imgs"
                                        src={caliegh}
                                        alt="party png"
                                    />
                                    <div className="text-content">
                                        <h2 className="Party-name">Caleigh Michelle</h2>
                                        <p className="Party-description">Bridesmaid. Friend of the bride.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="party-content">
                                <div className="card-content">
                                    <img
                                        className="party-imgs"
                                        src={maddie}
                                        alt="party png"
                                    />
                                    <div className="text-content">
                                        <h2 className="Party-name">Madison Lindquist</h2>
                                        <p className="Party-description">Bridesmaid. Friend of the bride.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="party-content">
                                <div className="card-content">
                                    <img
                                        className="party-imgs"
                                        src={miamarieta}
                                        alt="party png"
                                    />
                                    <div className="text-content">
                                        <h2 className="Party-name">Mia & Marieta Riera</h2>
                                        <p className="Party-description">Junior Bridesmaids. Cousin of the bride.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Party">
                        <h3 className="section-title">On the Groom's side...</h3>
                        <div className="party-content">
                            <div className="card-content">
                                <img
                                    className="party-imgs"
                                    src={fuckyomom}
                                    alt="party png"
                                />
                                <div className="text-content">
                                    <h2 className="Party-name">Jonathan Tellex</h2>
                                    <p className="Party-description">Best Man. Friend of the groom. </p>
                                </div>
                            </div>
                        </div>
                        <div className="party-content">
                            <div className="card-content">
                                <img
                                    className="party-imgs"
                                    src={jason}
                                    alt="party png"
                                />
                                <div className="text-content">
                                    <h2 className="Party-name">Jason Seefeldt</h2>
                                    <p className="Party-description">Groomsman. Brother of the groom.</p>
                                </div>
                            </div>
                        </div>
                        <div className="party-content">
                            <div className="card-content">
                                <img
                                    className="party-imgs"
                                    src={ryan}
                                    alt="party png"
                                />
                                <div className="text-content">
                                    <h2 className="Party-name">Ryan Seefeldt</h2>
                                    <p className="Party-description">Groomsman. Brother of the groom.</p>
                                </div>
                            </div>
                        </div>
                        <div className="party-content">
                            <div className="card-content">
                                <img
                                    className="party-imgs"
                                    src={aweex}
                                    alt="party png"
                                />
                                <div className="text-content">
                                    <h2 className="Party-name">Alex Bloch</h2>
                                    <p className="Party-description">Groomsman. Friend of the groom.</p>
                                </div>
                            </div>
                        </div>
                        <div className="party-content">
                            <div className="card-content">
                                <img
                                    className="party-imgs"
                                    src={thebetterchris}
                                    alt="party png"
                                />
                                <div className="text-content">
                                    <h2 className="Party-name">Chris Cano</h2>
                                    <p className="Party-description">Groomsman. Future brother-in-law.</p>
                                </div>
                            </div>
                        </div>
                        <div className="party-content">
                            <div className="card-content">
                                <img
                                    className="party-imgs"
                                    src={chris}
                                    alt="party png"
                                />
                                <div className="text-content">
                                    <h2 className="Party-name">Chris Jansen</h2>
                                    <p className="Party-description">Groomsman. Friend of the groom.</p>
                                </div>
                            </div>
                        </div>
                        <div className="party-content">
                            <div className="card-content">
                                <img
                                    className="party-imgs"
                                    src={prettyboy}
                                    alt="party png"
                                />
                                <div className="text-content">
                                    <h2 className="Party-name">Jacob Paigo</h2>
                                    <p className="Party-description">Groomsman. Friend of the groom.</p>
                                </div>
                            </div>
                        </div>
                        <div className="party-content">
                            <div className="card-content">
                                <img
                                    className="party-imgs"
                                    src={sexyblackboy}
                                    alt="party png"
                                />
                                <div className="text-content">
                                    <h2 className="Party-name">
                                        Jean Laine </h2>
                                    <p className="Party-description">Groomsman. Friend of the groom.</p>
                                </div>
                            </div>
                        </div>
                        <div className="party-content">
                            <div className="card-content">
                                <img
                                    className="party-imgs"
                                    src={brandon}
                                    alt="party png"
                                />
                                <div className="text-content">
                                    <h2 className="Party-name">Brandon O'Driscoll</h2>
                                    <p className="Party-description">Groomsman. Friend of the groom.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </PartyStyling >
    );
}

export default Party;