# Single tenant Blogging App

### Table of contents
- [Completed Work](#completed-work)
    - [Stack](#stack)
    - [API implementation](#api-implementation)
    - [Not completed](#not-completed)
    - [Functionality checklist](#functionality-checklist)
- [Prerequsities](#prerequsities)
- [TODO next](#todo-next)

## Completed Work

The work was completed within the assignment available features. Some of the endpoint did not work or did not exist to make the application
complete (e.g. refreshToken/token validation, comments endpoint not working, no registration endpoint....)

API docs:
https://github.com/Applifting/fullstack-exercise/blob/master/api.yml

The styling was not taken to full extend in regard to responsiveness, due to missing wireframes for mobile display, therefore, just simple
prereqs. to be able to view it on mobile

Wireframes:
https://github.com/Applifting/fullstack-exercise/blob/master/api.yml

Since it is a single-tenant application, every page apart from /about page(for which no designs were provided) were hidden behind logged state.

After user loggin it is possible to do all the listed functionality. Since the accessToken provided by api has expiration of 1 hour and no other refreshToken was provided, user is loggedout after 1 hour.
Http only Secure cookie with the accessToken sent via Nextjs api/router functionality and is read on almost every request to either serve it to user or
redirect him to login page to refresh users accessToken


### Stack
- NextJs App router
- Redux 
  - used for mocking comments and for listing of "My articles", since there was not really necessity of using state management apart from useState
- SCSS

### API implementation

- all requests that required authentication were proxied throughout the NextJS api to then return **httpOnly** and **secure**
  cookies back to the client, which then serves for authorization of all requests and navigation
- The HTTP 401 response was not checked since the API-KEY is part of enviroment variables, and the application would not build without it present

### Not completed
- There were few "features" that were either inputed statically or mocked
- For example there was no option to obtain logged user name or user's profile image
- The comments API endpoint seems not to be working since it is returnning HTTP 500 code on all requests

### Functionality checklist

- [x] Article List Article List Wireframe
    - [x] display a list of all articles, ordered by date descending
    - [x] each article should show title, perex and publication date
    - [x] each article should have a link to the full text
- [x] Article View Article View Wireframe
    - [x] display an article
    - [x] article should be in markdown, take care of proper rendering
- [x] New Article View New Article View Wireframe
    - [x] display a page with form to add new article
    - [x] the form should take title, perex and content
    - [x] the content should be in markdown, you can use some existing markdown editor
    - [x] add necessary validations
    - [x] this page should be protected by password
- [x] Mock Comment functionality with redux (needed to be mocked via redux, since api was responding with http 500)
    - [x] display comments on Article View page
    - [x] each comment should have content, timestamp and author
    - [x] add comment form to Article View page
    - [x] comment form should take author and content
    - [x] Add Comment voting functionality
        - [x] add the ability to vote on comments (+/-)
        - [x] display score on each comment
          Admin Perspective
- [x] Login Screen Login Screen Wireframe
    - [x] implement login
    - [x] after successful login redirect to next screen
    - [x] on unsuccesful login display error message
- [x] My Article List My Article List Wireframe
    - [x] display table of all articles
    - [x] display a button to create new article
    - [x] implement edit and delete buttons
    - [x] optionally implement article ordering
- [x] Article Detail View Article Detail Wireframe
    - [x] display editable sections of article
    - [x] implement publish button


## Prerequsities

Step-by-step instructions to get your project running locally:

1. **Init ENV variable**
   There is a env.template with listed variable, you can just copy it
2. added .nvmrc file to ensure node compability

```bash
  pnpm dev
```

3. Since it is a single tenant application only one user was created:

username: `albertmirek-blog-test-2`

pw: `albertmirek-blog-test-2`



## TODO next
- paginate articles
- completing tests for all components
- e2e tests
