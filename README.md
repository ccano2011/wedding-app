# Happily Ever After <!-- omit in toc -->

<!-- > The Project Planning section **should be completed** for your project pitch with instructors.
>
> To ensure correct Markdown, copy and paste the raw template code into your project repo README file. Remove ALL template instructions and replace with your project details. -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    <!-- - [Component Breakdown](#component-breakdown) -->
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)
- [Change-Log](#change-log)
- [Special Thanks](#special-thanks)


<br>

## Overview

_**Happily Ever After** is a full CRUD React web application that will allow for couples planning their wedding to have a website for guests to RSVP, post their well-wishes, & view the photos of the bride & groom throughout their years in addition to the standard wedding website fare._

<br>

## MVP

<!-- > The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated. -->

<!-- _The **Project Title** MVP lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._ -->

- Build a functional **Ruby-on-Rails** backend with a database that will utilize CRUD with 2 tables; (User & Posts)
- Set up one association between the 2 tables (1:m)
- Build a feature complete **React** frontend with CRUD 
- Build out the 10 screens (Our Story, Photos, About the Party, Corkboard for Posting, Resgistration, Login, Create post, edit post, registry, Home, & Travel) with the apropriate number of components to manage the screens
- Build out the controllers that will allow the frontend to display and update data from the backend
- Style using Styled Components & React-Scroll

<br>

### Goals

- _Demonstate my understanding of data table associations,_
- _Create a template so that I may be able to use this for future projects,_
- _Improve my CSS abilities,_

<br>

### Libraries and Dependencies

<!-- > Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced! -->

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Used for the frontend._ |
|   React Router   | _Used for client-side routing._ |
| Axios | _Make axois calls to the backend from the frontend._ |
|     Styled Components      | _Better organize my CSS & improve overall code structure._ |
|     Rails      | _The framework used to operate the backend._ |
|  PostgreSQL  | _Relational management between the databases/tables._ |

<br>

### Client (Front End)

#### Wireframes

<!-- > Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD -->

[Figma](https://www.figma.com/file/oj5H3dZqVwdhIxLanP6Cxi/wedding-app?node-id=0%3A1)

![Imgur](https://i.imgur.com/M74tRMc.png)


#### Component Tree

<!-- > Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components.  -->

[Whimsical](https://whimsical.com/p4-component-tree-MNjVHRcoXXYwD4C88fFDC1)

![Imgur](https://i.imgur.com/EZUuSCg.png)


#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ images
|__ shared/
      |__ Nav.jsx
      |__ Burger.jsx
      |__ MobileNav.jsx
|__ screens/
      |__ Corkboard/
             |__Corkboard.jsx
             |__Corkboard.css
             |__Registration.jsx
             |__Registration.css
             |__Login.jsx
             |__Login.css
             |__Editpost.jsx
             |__Editpost.css
             |__Createpost.jsx
             |__Createpost.css
             |__Userpost.jsx
             |__Userpost.css
      |__ OurStory/
             |__OurStory.jsx
      |__ Hero/
             |__Hero.jsx
      |__ Party/
             |__Party.jsx
             |__PartyData.js
      |__ Registry/
             |__Registry.jsx
      |__ Photos/
             |__Photos.jsx
      |__ Travel/
             |__Travel.jsx
|__ services/
      |__ apiConfig.js
      |__ posts.js
      |__ users.js
      |__ auth.js
|__ App.js
|__ App.css
|__ index.js
|__ index.css
|__ reportWebVitals.js
|__ .gitignore
|__ package-lock.json
|__ package.json
|__ README.md

```

<!-- #### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ | -->

#### Time Estimates

<!-- > Use this section to estimate the time necessary to build out each of the components you've described above. -->

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Initialize backend with models for users, posts, and RSVP   |    L     |     2 hrs      |     1 hr     |    ? hrs    |
| Create table associations |    H     |     3 hrs      |     3 hrs     |     TBD     |
| Build out CRUD actions |    H     |     3 hrs      |     30 min    |     TBD     |
| Test CRUD actions & associations on Postman w/debugging|    H     |     1 hr      |     3 hrs     |     TBD     |
| Initialize React frontend with the proper component heirarchy structure |    H     |     30 min      |     30 min     |     TBD     |
| Create the Cork board component with the initial CRUD logic |    H     |     4 hrs      |     9 hrs     |     TBD     |
| Build out the controllers to connect the frontend to the backend |    H     |     4 hrs      |     30 min     |     TBD     |
| Implemment authentication for the Cork board components on frontend |    L     |     3 hrs      |     3 hrs     |     TBD     |
| Create the Navbar component w/ styling |    H     |     2hrs      |     2 hrs     |     TBD     |
| Create the homepage screen w/ styling |    H     |     2hrs      |     20 min     |     TBD     |
| Build out the RSVP component with the appropriate CRUD logic & association (REMOVED)|    H     |     3 hrs      |     30 min     |     TBD     |
| Build out the remaining components |    H     |     4 hrs      |     2 hrs     |     TBD     |
| Style those components |    L     |     6 hrs      |     10 hrs     |     TBD     |
| Create MVP media queries |    H     |     3 hrs      |     6 hrs     |     TBD     |
| POST-MVP EventListener w/ mobile refactor |    H     |     3 hrs      |     13hrs     |     TBD     |
| POST-MVP Refactor the application using Styled-Components to improve code legibility & maintainance|    H     |     3 hrs      |     10 hrs     |     TBD     |
| POST-MVP Add Animations to the styled components (i.e. Fade-ins, photo gallery, etc.)|    H     |     10 hrs      |     12 hrs     |     TBD     |
| POST-MVP Add Admin privileges w/ proper associations to the rails back-end |    H     |     10 hrs      |     TBD     |     TBD     |
| Deploy & Test |    H     |     3 hrs      |     1 hrs     |     TBD     |

| TOTAL               |          |     51.5 hrs      |     81.33 hrs     |     TBD     |

<!-- > _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._ -->

<br>

### Server (Back End)

#### ERD Model:

[draw.io](https://drive.google.com/file/d/1W8iYQHxMzA-JGkqaQazBEgzBM7tpaOgC/view?usp=sharing)

![Imgur](https://i.imgur.com/GWyDAB4.png)

<br>

***

## Post-MVP:

<!-- > Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation! -->
<!-- - Build out logic that will prevent duplicate RSVPs -->
- Refactor the application using Styled-Components to improve code legibility & maintainance
- Use CSS framework to incorporate animations
- Add a rotating photo gallery for "Our Story" component
- Add Admin privileges w/ proper Associations to the Rails back-end
<!-- - Implement Full CRUD to the RSVP component -->

***

## Code Showcase:

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions:

Major issue with CORs on the deployed site resolved by doing the following:
 - added gems 'rails_12factor' and 'foreman' to my gemfile,
 - specified my rails application cors.rb’s origins to only coming from my deployed netlify & localhost:3001,
   making a Procfile with the heroku commands ````web: bundle exec rails s ```` & ````release: bundle exec bin/rake db:migrate````.


## Change Log:

 12/1/2020:

       - Added a 'Change Log' to the README
       - Moved 'Implemment authentication for the Cork board components on frontend' from Post-MVP to the project MVP
       - Added 'Implement Full CRUD to the RSVP component'
       - Updated the file structure as reflected in the 'Component Hierarchy'

12/4/2020:

       - Removed unnecessary components; updated the README & Figma to reflect those changes
       - Updated the 'Time Frames' to better predict the development time & path

01/12/2021:

       - Removed front-end access to the RSVP component; Not needed for this iteration
       - Refactored all the CSS styling for various components along with the appropriate media queries
       - Updated 'Post-MVPs' & updated the 'Time Frames' to represent the time and hours spent for each goal

01/21/2021:

       - Removed front-end service & apiConfig to the RSVP table on the back-end; Not needed for this iteration
       - Refactored all the CSS styling for various components along with the appropriate media queries
       - Updated 'Post-MVPs' & updated the 'Time Frames' to represent the time and hours spent for each goal
       - Updated Figma & Whimsical to represent the current vision of the Project
       - Completed all the first iteration stylings for all the components/screens of the project

01/26/2021:

       - Added alerts for incorrect login & registration errors 
       - Also fixed a routing error that wouldn't allow a user to login if they leave the login screen & return to it
       - Fixed any and all mobile styling issues

02/09/2021:

       - Made the mobile nav functionality more user friendly & seamless
       - Removed all unused code and cleaned up the formatting
       - Refactored 'nav.jsx'
       - Added a 'Special Thanks' to the README to thank those who took their time to help debug and teach me a thing or two along the way
       - Deleted the controller for RSVP & the RSVP component itself

03/22/2021:

       - Updated the README & added new MVP goals for refactoring and better code management

04/28/2021:

       - Completely refactored 'nav.jsx' & rearranged the layout of 'MobileNav' with added opacity
       - Updated the codebase for all the static components to reflect the structure of my projects since GA
       - Added a new component: Party.jsx & PartyData.js to pass in the data for DRY coding practice
       - Updated Figma & Whimsical
       - Completely refactored all styling across every component

05/08/2021:

       - Completed the initial site styling for desktop using the new refactored codebase
       - Finished 'OurStory.jsx' w/ all new media-queries for all devices on 'clarissa-wedding' branch with changing photo gallery
       - Added 'Party.jsx' component for the wedding party w/ initial column layout for both the bride & groom's side

       

## Special Thanks:

A BIG thank you to <a href="https://github.com/DannyMichaels" target="_blank">Daniel Micheal</a> for taking the time to help me debug and introducing me to Styled Components! Also another shout-out to <a href="https://github.com/laport14" target="_blank">Geoff LaPorte</a> for remininding me about try/catch errors that helped me add alerts for login/registration errors.