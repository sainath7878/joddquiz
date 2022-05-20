<div align="center">

# JODDQuiz

</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-joddquiz">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#features">Features</a>
      <ul>
        <li><a href="#landing-page">Landing Page</a></li>
        <li><a href="#rules-page">Rules Page</a></li>
        <li><a href="#quiz-page">Quiz Page</a></li>
        <li><a href="#results-page">Results Page</a></li>
        <li><a href="#authentication">Authentication</a></li>
      </ul>
    </li>
  </ol>
</details>

---

## About JODDTube

JODDQuiz is a quiz application where you can play quiz for the available categories. JODDQuiz is publicly hosted on vercel at [https://joddquiz.vercel.app/](https://joddquiz.vercel.app/)

The website is built using following tech-stack:

<ul>
    <li>ReactJS</li>
    <li>React Router v6</li>
    <li>useContext + useReducer for state management</li>
    <li>Jodd UI and Vanilla CSS</li>
    <li>MockBee for mock Backend</li>
</ul>

---

## Getting Started

---

### Installation

Clone the repository on your local machine by typing the below commands on your terminal and cd to `joddquiz`.

```
git clone https://github.com/sainath7878/joddquiz.git
cd joddquiz
```

Install the necessary dependencies.

```
npm install
```

`JODDQuiz` uses `mockbee's` mockbackend.
Create an environment variable inside .env file in the root of the project with the below code.

```
REACT_APP_JWT_SECRET = <JWT_SECRET_KEY_OF_YOUR_CHOICE>
```

Now to run the app write the following command in your terminal:

`npm start`
This should run the app on localhost:3000.

```
npm start
```

---

## Features

---

### Landing Page

- Landing with different quiz categories

### Rules Page

- This page contains rules of the quiz.

### Quiz Page

- This page contains mutiple choice questions and options for the selected quiz category.
### Results Page

- This page contains final points scored and right and wrong answers chosen by the user.
### Authentication

- User can do a guest login
- User can Log In/Log Out with existing credentials
- User can sign up by if they are new to website
- User can logout from navbar

## SOCIALS

---

<a href="https://twitter.com/sainath_svm"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/></a>
<a href="https://www.linkedin.com/in/svm-sainath-90aa061aa/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>

</ul>
