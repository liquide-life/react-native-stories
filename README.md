<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!--
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
-->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://ik.imagekit.io/liquide/images/liquideAvatar.png" alt="LiquideLogo" width="80" height="80">
  </a>

  <h3 align="center">React Native Stories Like Instagram/Snapchat/Whatsapp </h3>

  <p align="center">
    Use this library to add stories to your react native project
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
  <!--
   <table>
    <tr>
      <td><img width="300" alt="Liquide" src="https://ik.imagekit.io/liquide/images/liquideAvatar.png"></td>
      <td><img width="300" alt="Liquide" src="https://ik.imagekit.io/liquide/images/liquideAvatar.png"></td>
    </tr>
  </table>
this is commented for now
-->

There were many libraries for adding Stories feature to a react native app but most of them are not updated. We have created a library with most of the features which exist on Instagram/Whatsapp stories. 

Top Features:
* Supports Images, Videos and Gifs.
* Linear gradient rings around the story circles which dissapear when user taps on it.
* A callback function is fired as soon as the user views all the stories (This will feature will be enhanced further in order to support tracking of each story viewed).
* Minimal props with JSON input.


<!--
Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!

Use the `BLANK_README.md` to get started.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

-->

<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

You need to install the following packages in order to make this work flawlessly.

```bash
$ npm install react-native-video react-native-reanimated react-native-gesture-handler
# --- or ---
$ yarn add react-native-video react-native-reanimated react-native-gesture-handler
```


### Installation

* From NPM
  ```
  npm install @liquide/react-native-stories
  ```
  
* From Yarn
  ```
  yarn add @liquide/react-native-stories
  ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

```javascript
import Stories from '@liquide/react-native-stories';

const data = [
  {
    title: "What is Liquide?",
    username: "What is Liquide",
    profile: "https://ik.imagekit.io/liquide/images/liquideAvatar.png",
    stories: [
      {
        id: 1,
        url: "https://ik.imagekit.io/liquide/videos/what-is-liquide-usered.mp4",
        type: "video",
        duration: 2,
        isReadMore: true,
        url_readmore: "https://github.com/liquide-life/react-native-stories",
      },
    ],
  },
  {
    title: "Connect Broker",
    username: "How to connect your broker",
    profile: "https://ik.imagekit.io/liquide/images/connectBroker.png",
    stories: [
      {
        id: 1,
        url: "https://ik.imagekit.io/liquide/tr:w-0/images/trusted-brokers.png",
        type: "image",
        duration: 2,
      },
    ],
  },
  {
    title: "Buy Trade Setup",
    username: "Buy trades",
    profile: "https://ik.imagekit.io/liquide/images/tradecardAvatar.png",
    stories: [
      {
        id: 1,
        url: "https://ik.imagekit.io/liquide/videos/how-to-buy-stocks-usered.mp4",
        type: "video",
        duration: 2,
      },
    ],
  },
  {
    title: "Ask LiMo",
    username: "How to ask LiMo",
    profile: "https://ik.imagekit.io/liquide/images/limoAvatar.png",
    stories: [
      {
        id: 1,
        url: "https://ik.imagekit.io/liquide/videos/what-is-limo-usered.mp4",
        type: "video",
        duration: 2,
      },
    ],
  },
];


const App = () => {
  return (
    <Stories data={data} />
  );
};


