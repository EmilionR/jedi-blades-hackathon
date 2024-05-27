# [Jedi Blades](https://jedi-blades-786cf143833b.herokuapp.com/)

Welcome to Jedi Blades! Our website shows our wide selection of lightsabers. Whether you are a Jedi or a Sith, we have the perfect lightsaber for you. <br>

Our lightsabers are made from the finest materials and are built to last. They are perfect for dueling or for display. We also have lightsaber accessories such as stands and cases to help you take care of your lightsaber.
So come on in and take a look at our selection. May the Force be with you!

[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/EmilionR/jedi-blades-hackathon)](https://github.com/EmilionR/jedi-blades-hackathon/commits/main)
[![GitHub last commit](https://img.shields.io/github/last-commit/EmilionR/jedi-blades-hackathon)](https://github.com/EmilionR/jedi-blades-hackathon/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/EmilionR/jedi-blades-hackathon)](https://github.com/EmilionR/jedi-blades-hackathon)

<div align="center">
  <img src="static/images/readme_images/landing-page.png" alt="Landing page">
</div>

## UX

### User Goals

Whether you are a Jedi or a Sith, you can find the perfect lightsaber for your purpose and budget.

- See all the available lightsabers
- View details of each lightsaber so that you can find the right one for you
- See all the legendary characters who have used each type of lightsaber

#### User Stories

All user stories are mapped to Issues in Github, with acceptance criteria and tasks. We tracked the issues with a Github Project [progress board](https://github.com/users/EmilionR/projects/6) and grouped them into Epics so that we could follow Agile methodology. <br>

**EPIC - UI & Navigation**

- Dark side toggle: As a site user I can join the dark side so that I can be a sith lord
- Accessible UI/UX: As a user with disabilities I can use the site in a way that works for me so that I can enjoy the site without struggle
- Improved Ease of Use: As a site user I can interact with the page intuitively so that I have a nice experience with the site
- Responsive design: As a site user I can view the page in a format appropriate for my screen so that I can use the site as intended on any device
- Site Navigation: As a site user I can easily navigate the site so that I can find any page or section without issues
- Content Policy: As a user I can trust jedi-blades so that I can understand the the rights of their imagery and intentions

**EPIC - Lightsabers**

- Lightsaber Details: As a site user I can view a dedicated page for a specific lightsaber so that I can learn more about it
- List of Lightsabers: As a site user I can see a list of all lightsabers so that I can browse and find the one I want to see

**EPIC - Characters**

- Character List: As a site user I can view a list of characters so that I can browse and find any character
- Character Details Page: As a site user I can view a character's details page so that I can learn more about the character
- Scrolling Text Hero Star Wars Style: As a site user I can see from the hero text what the site is about so that I understand the content of the website

**EPIC - Team Page**

- Team page: As a site user I can view a page about the team so that I can learn about the developers behind the project
- Team members: As a site user I can see the team members so that I can learn more about the team

### Structure

#### Entity relationship diagram

<!-- These are the models that we used to build the site, and how they relate -->

### Features

#### Landing page

The landing page includes:

- A header with navigation links and a footer with social, team, and legal links.
- A button so the user can choose to play Star Wars music while picking their favorite lightsaber.
- A scrolling intro section in the style of the Star Wars intro text, so the user can read all about Jedi Blades.
- A "Choose your path" button to filter the available lightsabers by light and/or dark side
- The selection of lightsabers. Each lightsaber card shows an image, the name, color, and owner of the lightsaber, and buttons to see a detail about that saber or character.
- The cursor, in the shape of a lightsaber.

#### Lightsaber details

Each lightsaber's details include an image of the saber, its name, which character wields it, and its design and lore so that users can pick their perfect weapon.

#### Character details

Each character's details include an image, the character's name, light/dark side alignment, home planet, and lore.

#### Team page

The team page shows the talented Sabersmiths who forged the Jedi Blades project.

### Surface

#### Wireframes

We started out with these wireframes:

<div align="left">
  <img src="static/images/readme_images/wf-original-desktop.png" alt="Original desktop wireframe" width="300">
  <img src="static/images/readme_images/wf-original-tablet.png" alt="Original tablet wireframe" width="200">
  <img src="static/images/readme_images/wf-original-mobile.png" alt="Original mobile wireframe" width="150">
</div>

We developed this wireframe to help build the Lightsaber and Character list pages, and the Team page:

<div align="left">
  <img src="static/images/readme_images/wf-lightsaber-list.png" alt="Lightsaber list page wireframe" width="500">
</div>

Then we had more ideas for scrolling text and a Light Side/Dark Side options:

<div align="left">
  <img src="static/images/readme_images/wf-landing-page.png" alt="Landing page wireframe" width="500">
</div>

The Team page:

<div align="left">
  <img src="static/images/readme_images/wf-team.png" alt="Team page wireframe" width="500">
</div>

And the About page:

<div align="left">
  <img src="static/images/readme_images/wf-about.png" alt="About page wireframe" width="500">
</div>

#### Color Palette

The official Star Wars yellow and black provided inspiration:

<div align="left">
  <img src="static/images/readme_images/official-colors.png" alt="Official Star Wars colors" width="200">
</div>

The palette we developed has some subtler colors for visual depth, and high contrast for accessibility. It was created with [Coolors](https://coolors.co/).

<div align="left">
  <img src="static/images/readme_images/color-palette.png" alt="Color palette" width="500">
</div>

We used official colors for the lightsabers that are specific to each character:

- Blue: #2e67f8
- Green: #2ff924
- Red: #c13d3d
- Purple: #7851a9
- Yellow: #f9ff58
- White: #ddddff

#### Typography

We used Google Fonts for this project. The titles are Orbitron, which is a Google Fonts option similar to the Star Wars logo font:

<div align="left">
  <img src="static/images/readme_images/orbitron-font.png" alt="Title font" width="400">
</div>

The main font is Raleway, which is clear and easy to read, for accessibility:

<div align="left">
  <img src="static/images/readme_images/raleway-font.png" alt="Main font" width="400">
</div>

#### Surface updates during development

During development, we refined the visual design, using images and colors to create mood and depth.

### Screenshots

<!-- Screenshots of the project -->

The lightsaber cards on the landing page:

<div align="left">
  <img src="static/images/readme_images/landing-page2.png" alt="Lightsaber list on the landing page" width="500">
</div>

Lightsaber details:

<div align="left">
  <img src="static/images/readme_images/lightsaber-detail.png" alt="Lightsaber detail" width="500">
</div>

Character details:

<div align="left">
  <img src="static/images/readme_images/character-detail.png" alt="Character detail" width="500">
</div>

The Team page:

<div align="left">
  <img src="static/images/readme_images/team.png" alt="Team page" width="500">
</div>

## Testing

### Lighthouse reports

Desktop landing page:

<div align="left">
  <img src="static/images/readme_images/lh-desktop-landing.png" alt="Lighthouse testing desktop landing page" width="300">
</div>

Desktop team page:

<div align="left">
  <img src="static/images/readme_images/lh-desktop-team.png" alt="Lighthouse testing desktop team page" width="300">
</div>

Mobile landing page:

<div align="left">
  <img src="static/images/readme_images/lh-mobile-landing.png" alt="Lighthouse testing mobile landing page" width="300">
</div>

Mobile team page:

<div align="left">
  <img src="static/images/readme_images/lh-mobile-team.png" alt="Lighthouse testing mobile team page" width="300">
</div>

## Future Implementations

<!-- These are all the awesome things that the page will have in the future -->

## Tools & Technologies Used

- [![Git](https://img.shields.io/badge/Git-grey?logo=git&logoColor=F05032)](https://git-scm.com) used for version control. (`git add`, `git commit`, `git push`)
- [![Git](https://img.shields.io/badge/GitHub-grey?logo=github&logoColor=181717)](https://github.com) used for secure online code storage.
- [![Gitpod](https://img.shields.io/badge/Gitpod-grey?logo=gitpod&logoColor=FFAE33)](https://gitpod.io) used as a cloud-based IDE for development.
- [![HTML](https://img.shields.io/badge/HTML-grey?logo=html5&logoColor=E34F26)](https://en.wikipedia.org/wiki/HTML) used for the main site content.
- [![CSS](https://img.shields.io/badge/CSS-grey?logo=css3&logoColor=1572B6)](https://en.wikipedia.org/wiki/CSS) used for the main site design and layout.
- [![JavaScript](https://img.shields.io/badge/JavaScript-grey?logo=javascript&logoColor=F7DF1E)](https://www.javascript.com) used for user interaction on the site.
- [![Python](https://img.shields.io/badge/Python-grey?logo=python&logoColor=3776AB)](https://www.python.org) used as the back-end programming language.
- [![Heroku](https://img.shields.io/badge/Heroku-grey?logo=heroku&logoColor=430098)](https://www.heroku.com) used for hosting the deployed back-end site.
- [![Django](https://img.shields.io/badge/Django-grey?logo=django&logoColor=092E20)](https://www.djangoproject.com) used as the Python framework for the site.
- [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-grey?logo=postgresql&logoColor=4169E1)](https://www.postgresql.org) used as the relational database management.
- [![WhiteNoise](https://img.shields.io/badge/WhiteNoise-grey?logo=python&logoColor=FFFFFF)](https://whitenoise.readthedocs.io) used for serving static files with Heroku.
- [![AWS S3](https://img.shields.io/badge/AWS_S3-grey?logo=amazons3&logoColor=569A31)](https://aws.amazon.com/s3) used for online static file storage.
- [![Balsamiq](https://img.shields.io/badge/Balsamiq-grey?logo=barmenia&logoColor=CE0908)](https://balsamiq.com/wireframes) used for creating wireframes.
- [![Canva](https://img.shields.io/badge/Canva-grey?logo=canva&logoColor=00C4CC)](https://www.canva.com/p/canvawireframes) used for creating wireframes.
- [![Bootstrap](https://img.shields.io/badge/Bootstrap-grey?logo=bootstrap&logoColor=7952B3)](https://getbootstrap.com) used as the front-end CSS framework for modern responsiveness and pre-built components.
- [![Font Awesome](https://img.shields.io/badge/Font_Awesome-grey?logo=fontawesome&logoColor=528DD7)](https://fontawesome.com) used for the icons.
- [![ChatGPT](https://img.shields.io/badge/ChatGPT-grey?logo=chromatic&logoColor=75A99C)](https://chat.openai.com) used to help debug, troubleshoot, and explain things.

## Credits

<!-- These are the lovely people and resources that we used to put this project together! -->

Thanks to the whole team!
