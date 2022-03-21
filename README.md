# JobBoard

Simple job application system

- View [published](https://bk-jobboard.netlify.app/) application.
- View [Backend API](https://jobboar-api.herokuapp.com/api/v1/).

## Description

This application is a frontend UI of the job application system. It will be used by both recruiters and job applicants.

1. Recruiters can post and view job applicants.
2. Applicants can search and apply for their dream jobs.

## Technologies

- [Node](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [Antd](https://ant.design/) UI components and css styles.
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- A package manager - [Yarn](https://yarnpkg.com/lang/en/) (preferred) or [NPM](https://www.npmjs.com/)

## Prerequisites

NodeJS and a package manager should be installed on your system together with the following applications for use in development

- A web browser prefer [Chrome](https://www.google.com/chrome/)

## Setup

After installing the prerequisites, clone the repository:

```ch
    git clone https://github.com/mwibutsa/jobboard-fe.git
```

Then change the directory to the cloned repository:

```ch
    cd jobboard-fe
```

To install dependencies defined in the `package.json` file run:

```ch
    yarn install
```

Create a `.env` file and add all variables as defined in the `.env.example` file

```ch
    touch .env
```

Start the local development for the micro-frontend app run

```ch
    yarn start
```

To access the development version of Farmers Order APIs:

- Open [localhost:3000](http://localhost:3000/) in the browser

## Development standards and Guidelines

- [Commit message](https://www.conventionalcommits.org/en/v1.0.0/)
- [ESLint](https://eslint.org/) for Typescript and Javascript

## Deployment

- Raise a PR on `main` branch
- Branch naming `<type>/short-description` where type can be [feat,bug,chore] or their [ft,bg,ch] respectively

## Maintainers

- [Mwibutsa Floribert](https://gitlab.com/mwibutsa)
