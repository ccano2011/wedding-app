import styled from 'styled-components'

const Map = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Parisienne&family=Pinyon+Script&family=Rouge+Script&family=Tangerine:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');

    display: flex;
    flex-direction: row;
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */

    overflow: auto;
    flex-wrap: wrap;
    justify-content: center;
    z-index: -1;
  
    /* margin-left: 100px;
    margin-right: 100px; */

  .corkBoardTitle{
    font-family: 'Pinyon Script', cursive;
    font-size: 2em;
    margin-bottom: 5px;
    text-align: center;
  }
  .mappedContent {
    flex: 1;
    justify-content: space-evenly;
    padding: 25px;
    margin: 30px;
    border-radius: 15px;
    min-width: 18vw;
    max-width: 22vw;
    height: fit-content;
    backdrop-filter: blur(8px);
    /* background-color: rgb(189, 204, 174); */
    background-color: ${({ initialVal }) => initialVal ? "red" : "blue"};
    background-color: ${({ small }) => small ? "red" : "blue"};
    border: 1px solid black;
    backdrop-filter: blur(8px);
  }

  .currentUserGreeting {
    font-family: 'Pinyon Script', cursive;
    font-size: 30px;
    margin-bottom: 5px;
    margin-left: 100px;
  }

  .corkBoardButtons{
    font-family: 'Pinyon Script', cursive;
    font-size: 30px;
    margin-bottom: 5px;
    /* margin-left: px; */
    display: flex;
    justify-content: space-evenly;
  }

  .postName{
    font-family: 'Rouge Script', cursive;
    font-size: x-large;
    padding-left: 3px;
    margin-left: 10px;
  }

  .postContent{
    overflow: auto;
    min-width: 100px;
    font-family: 'Rouge Script', cursive;
    line-height: 100%;
    font-size: x-large;
    padding-left: 3px;
    max-height: 35vh;
    /* flex-wrap: wrap; */
  }
  /* @media screen and (max-width:1388px) {
    .map {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-left: 50px;
        margin-right: 50px;
        z-index: -1;
      }
      .currentUserDiv{
        margin-left: 0px;
      }
      .currentUserGreeting {
        font-family: 'Pinyon Script', cursive;
        font-size: 20px;
        margin-bottom: 5px;
        text-align: center;
        max-width: 240px;
      }
} */

@media screen and (max-width:45em) {
    
        display: grid;
        /* flex-direction: row; */
        /* overflow: auto; */
        flex-wrap: wrap;
        margin-left: 0;
        margin-right: 0;
        z-index: -1;
      
      .currentUserDiv{
        margin-left: 0px;
      }
      .currentUserGreeting {
        font-family: 'Pinyon Script', cursive;
        margin-left: 0px;
        text-align: center;
        font-size: 25px;
        /* margin-bottom: 5px; */
        /* margin-left: 100px; */
        /* text-align: center; */
        /* max-width: 240px; */
      }
      .postContent{
        overflow: auto;
        min-width: 100px;
        font-family: 'Rouge Script', cursive;
        line-height: 100%;
        font-size: x-large;
        padding-left: 3px;
        max-height: 100%;
        /* flex-wrap: wrap; */
      }
      .mappedContent {
        flex: 1;
        justify-content: space-evenly;
        padding: 25px;
        margin: 15px;
        border-radius: 15px;
        min-width: 300px;
        max-width: auto;
        backdrop-filter: blur(8px);
        /* background-color: rgb(189, 204, 174); */
        border: 1px solid black;
        backdrop-filter: blur(8px);
      }
}
`
export default Map