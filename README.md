# Capstone-Projecct

ATLP CAPSTONE PROJECT
MY BRAND(Personal Website + Blog)

BUILD A PRODUCT: MY BRAND
Project Overview
The need for professionals to have an online presence and brand in this current age and generation can not be overemphasized. One having a good online presence means quick and easy access to opportunities. It gives prospective customers, employer easy to review your work, experience, and future ambition. While there are various ways and means to build online brands. We believe that having a personal website + blog which one can use to share basic information about themself and also share ideas with their network can have a huge impact on one's career.
Required Features
User should be able to view some basic information ( profile picture, profession, skills, experience, physical address, social media, ) about the site owner
Users should be able to send questions or queries using a contact form provided on the site
Users (i.e. owner of the blog) should be able to log in.
Users can view all articles and comments on the blog.
Users can comment on the articles.
Blog owners can create, update and delete articles.



Optional Features
Users can subscribe to the website and should receive an email confirming the subscription.
Subscribed users get email notifications when a new article is posted on the site.





Preparation Guidelines
These are the steps you ought to take to get ready to start building the project

Steps
Create a Trello board
              
Create a Github Repository, add a README, and clone it to your computer
              Tip: find how to create a Github Repository here. 
























Module 1 - Create UI Templates
Timelines
Expected Length to Complete: 2 weeks
Module  Summary
You are required to create UI templates with HTML, CSS, and Javascript.

NB: 
You are not implementing the core functionality yet, you are only building the User Interface elements, pages and views!
You are to create a pull request to elicit review and feedback for the UI template when you are done working on them
Do not download or use an already built website template.
Guidelines
On Trello, create user stories to set up the User Interface elements:
User landing page
User contact page
User sign-in page.
A page/pages where the blog owner can do the following:
View a list of their articles
View a list of all queries/questions
Create a new article
Update an existing article
Delete an existing article
Update their profile information
A page/pages for a user’s profile which would contain information like:
Reminder settings.
Number of entries since registration.


On the Trello board create stories to capture any other tasks not captured above. The tasks can be features, bug or chore for this module 1.
On a feature branch, create a directory called UI in your local git repo and build out all the necessary pages specified above  and UI elements that will allow the application function into the UI directory
Host your UI templates on GitHub Pages.
	Tip: It is recommended that you create a gh-pages branch off the branch containing your UI template. When following the GitHub Pages guide, select "Project site" >> "Start from scratch". Remember to choose the gh-pages branch as the source when configuring Repository Settings.  
 
Target skills
After completing this module, you should have learnt and be able to demonstrate the following skills.

Skill
Description
Helpful Links
Project management
Using a project management tool(Trello) to manage your progress while working on tasks.
To get started with Pivotal Tracker, use Trello Board.
Here is a sample template for creating stories/tasks on trello board.


Version control with GIT
Using GIT to manage and track changes in your project.
Use the recommended Git Workflow, Commit Message and Pull Request (PR) standards.
Front-End Development
Using html and css to create user interfaces.
See this tutorial




Self / Peer Assessment Guidelines
Use this as general guidelines to assess the quality of your work. Peers, mentors, and  facilitators should use this to give feedback on areas that should be improved on.

Criterion
Does not Meet Expectation
Meets Expectations
Exceed Expectations
Project management 
Fails to break down modules into smaller, manageable tasks. Cannot tell the difference between chores, bugs and features
Breaks down each module into smaller tasks and classifies them. Constantly updates the tool with progress or lack of it
Accurately, assigns points to the tasks. Informs stakeholders of project progress/blockers in a timely manner
Version Control with Git
Does not utilize branching but commits to master branch directly instead.
Utilizes branching, pull-requests, and merges to the develop branch. Use of recommended commit messages.
Adheres recommended GIT workflow and uses badges.
Front-End Development
Fails to develop specified HTML/CSS web pages or uses an already built out website template, or output fails to observe valid HTML document structure
Successfully develops HTML/CSS webpages while observing standards such as doctype declaration, proper document structure, no inline CSS in HTML elements, and HTML document has consistent markup
Writes modular CSS that can be reused through markup selectors such as class, id. Understands the concepts and can confidently rearrange divs on request.















Module 2: Javascript
Timelines
Expected Length to Complete: 2 weeks
Due Date: 
Module Summary
You are expected to use this module to understand how to program in javascript. So to achieve this you will be required to validate your forms using javascript and dom manipulation and will be required to store & retrieve submitted data to and from Firebase, a serverless datastore. 
NB: 
You are to create a pull request to elicit review and feedback  when you are done working on this module.
Form errors should be well displayed formatted
DRY(Don't Repeat Yourself) MUST be respected when programming in Javascript
Tools
HTML/CSS
Javascript
Firebase
Guidelines
Setup connection to your firebase project.
On Trello, create user stories to validate your user forms, to store and retrieve data from firebase.
Validate Login and contact Forms.
Get user location using javascript geolocation API
View a list of their articles
View a list of all queries/questions
Store all queries/questions
Create a new article
Update an existing article
Delete an existing article
Update their profile information
On trello create stories to capture any other tasks not captured above. The tasks can be feature, bug or chore for this module.
Optional feature:
Authenticate user using with social media platforms 
Allow only authenticated users in to comment on articles

Target skills
After completing this module, you should have learnt and be able to demonstrate the following skills.

Skill
Description
Helpful Links
Version Control with Git
Using GIT to manage and track changes in your project.
Use the recommended Git Workflow, Commit Message and Pull Request (PR) standards.
Javascript
Fundamentals


Values, Types, and Operators
Data Structure, Functions
Higher-order Functions
Debugging
https://eloquentjavascript.net/


Document Object Manipulation
HTML DOM, 
Form validation
https://eloquentjavascript.net/


Firebase
CRUD operations to Firebase
Async functions
Firebase Authentication
Fetch API
https://firebase.google.com/docs/web/setup



Self / Peer Assessment Guidelines
Use this as general guidelines to assess the quality of your work. Peers, mentors, and  facilitators should use this to give feedback on areas that should be improved on.

Criterion
Does not Meet Expectation
Meets Expectations
Exceed Expectations
Project management 
Fails to break down modules into smaller, manageable tasks. Cannot tell the difference between chores, bugs and features
Breaks down each module into smaller tasks and classifies them. Constantly updates the tool with progress or lack of it
Accurately, assigns points to the tasks. Informs stakeholders of project progress/blockers in a timely manner
Version Control with Git
Does not utilize branching but commits to master branch directly instead.
Utilizes branching, pull-requests, and merges to the develop branch. Use of recommended commit messages.
Adheres recommended GIT workflow and uses badges.
Programming logic
The code does not work in accordance with the ideas in the problem definition.
The code meets all the requirements listed in the problem definition.
The code handles more cases than specified in the problem definition. The code also incorporates best practices and optimisations.
Data Structures
Fails to implement CRUD or Implements CRUD with persistence
Implements CRUD without persistence
Uses the most optimal data structure for each operation


Module 3: NodeJs and Database
Timelines
Expected Length to Complete: 2 week
Due Date: 
Module Summary
You are expected to create all the endpoints required to meet all the requirements listed under the required features section and ensure that you persist data with a database. You are  required to use mongoose which will  help you write to and read from your mongoDb database. The endpoints are to be secured with JWT.

NB: 
All Javascript MUST be written in ES6 or higher and should use Babel to transpile down to ES5
You are to create pull request for each feature in this module  to elicit review and feedback.
All Javascript MUST be written in ES6 or higher and should use Babel to transpile down to ES5
Classes/modules MUST respect the SRP (Single Responsibility Principle) and MUST use the ES6 methods of module imports and exports.
Tools
Platform: NodeJs
Framework: ExpressJs
ORM: Mongoose
Database: MongoDB


Guidelines
On Trello, create a chore for setting up a database.
On Trello  create user stories for setting up and testing API endpoints that do the following using database:
Validate Login and contact Forms.
View a list of their articles
View a list of all queries/questions
Store all queries/questions
Create a new article
Update an existing article
Delete an existing article
Update their profile information
On Trello, create a story(s) for the implementation of token-based authentication using JSON web token (JWT) and the security of all routes using JSON web token.
On Trello, create stories to capture any other tasks not captured above. The tasks could be a feature, bug or chore for this module.
On Trello, create user story to implement this optional feature: 
Authenticate user using with social media platforms using passport 
Allow only authenticated users in to comment on articles

NB: Executing the above optional feature after completing the required features means you have exceeded expectations.
Write tests for the endpoints specified below.
Test all endpoints with Postman.
Use API Blueprint, Slate, Apiary or Swagger to document your API. Docs should be accessible via your application’s URL.
Ensure the app gets hosted on Heroku.
        

Target skills
After completing this module, you should have learnt and be able to demonstrate the following skills.

Skill
Description
Helpful Links
Project management
Using a project management tool(pivotal tracker) to manage your progress while working on tasks.
To get started with Pivotal Tracker, use Trello Board.
Here is an sample template for creating stories/tasks on trello board.


Version control with GIT
Using GIT to manage and track changes in your project.
Use the recommended Git Workflow, Commit Message and Pull Request (PR) standards.
HTTP & Web services
Creating API endpoints that will be consumed using Postman
Guide to Restful API design 
Best Practices for a pragmatic RESTful API
Test-driven development
Writing tests for functions or features.
Jest : https://jestjs.io/docs/en/getting-started
Mocha
https://mochajs.org/


Continuous Integration 
Using tools that automate build and testing when code is committed to a version control system.
TravicCI
https://docs.travis-ci.com/user/languages/javascript-with-nodejs/
Databases
Using a database to store data.
Mongodb https://docs.mongodb.com/manual/tutorial/getting-started/
Mongoose https://mongoosejs.com/docs/index.html



Self / Peer Assessment Guidelines
Use this as general guidelines to assess the quality of your work. Peers, mentors, and  facilitators should use this to give feedback on areas that should be improved on.

Criterion
Does not Meet Expectation
Meets Expectations
Exceed Expectations
Project management 
Fails to break down modules into smaller, manageable tasks. Cannot tell the difference between chores, bugs and features
Breaks down each module into smaller tasks and classifies them. Constantly updates the tool with progress or lack of it
Accurately, assigns points to the tasks. Informs stakeholders of project progress/blockers in a timely manner
Version Control with Git
Does not utilize branching but commits to master branch directly instead.
Utilizes branching, pull-requests, and merges to the develop branch. Use of recommended commit messages.
Adheres recommended GIT workflow and uses badges.
Programming logic
The code does not work in accordance with the ideas in the problem definition.
The code meets all the requirements listed in the problem definition.
The code handles more cases than specified in the problem definition. The code also incorporates best practices and optimisations.
Test-Driven development
Unable to write tests.
Writes tests that fail.
Writes tests that pass.
HTTP & Web Services
Fails to develop an API that meets the requirements specified
Successfully develops an api that gives access to all the specified endpoints
Handles a wide array of HTTP error codes and the error messages are specific
Databases
Unable to create database models for the given project
Has a database design that is normalized and can store, update and query records from the database
Creates table relationships
Token-Based Authentication
Does not use Token-Based authentication
Makes appropriate use of Token-Based authentication and secures all private endpoints.


Security
Fails to implement authentication and authorization in given project
Successfully implements authentication and authorization in the project
 creates custom and descriptive error messages
Test Coverage
Fails to Integrate coverage tool/reporter
< 60% test coverage
> 60% test coverage







Module 4: Integration (Frontend & Backend)
Timelines
Expected Length to Complete:
Due Date: 
Module Summary
You are expected to power your front-end pages from  Module 1 with data from the Blog API built in Module 3. 
This module requires that you implement the frontend part of the application using ES6.
NB: 
Ensure that  module 3 is completed and merged to the develop branch before you get started.
You are to make use of Fetch API  for making requests to backend
Do not use frameworks or libraries like Angular, Vue or React. 
Jquery can be used. 

Guidelines
On Trello,  create stories to build out your frontend with ES6.
On Trello,  create stories to capture any other tasks not captured above. The tasks can be feature, bug or chore in this module
Create a new folder or repo in which you will develop your front end.
Setup linting library and ensure you configured the style guide properly
Implement your frontend.
Deploy your front-end to Heroku or Github-Pages or Firebase.


Target skills
After completing this module, you should have learnt and be able to demonstrate the following skills.

Skill
Description
Helpful Links
Project management
Using a project management tool(pivotal tracker) to manage your progress while working on tasks.
To get started with Pivotal Tracker, use Trello Board.
Here is an sample template for creating stories/tasks on trello board.


Version control with GIT
Using GIT to manage and track changes in your project.
Use the recommended Git Workflow, Commit Message and Pull Request (PR) standards.
UI/UX
Creating good ui interface and user experience 
See rules for good UI design here
See this article for More guide
For color palettes, see this link


Self / Peer Assessment Guidelines
Use this as general guidelines to assess quality of your work. Peers, mentors, and  facilitators should use this to give feedback on areas that should be improved on.

Criterion
Does not Meet Expectation
Meets Expectations
Exceed Expectations
Project management 
Fails to break down modules into smaller, manageable tasks. Cannot tell the difference between chores, bugs and features
Breaks down each module into smaller tasks and classifies them. Constantly updates the tool with progress or lack of it
Accurately, assigns points to the tasks. Informs stakeholders of project progress/blockers in a timely manner
Version Control with Git
Does not utilize branching but commits to master branch directly instead.
Utilizes branching, pull-requests, and merges to the develop branch. Use of recommended commit messages.
Adheres recommended GIT workflow and uses badges.
Programming logic
The code does not work in accordance with the ideas in the problem definition.
The code meets all the requirements listed in the problem definition.
The code handles more cases than specified in the problem definition. The code also incorporates best practices and optimisations.
UI/UX
Page is non responsive, elements are not proportional, color scheme is not complementary and uses alerts to display user feedback
Page is responsive (at least across mobile, tablet and desktops), color scheme is complementary, and uses properly designed dialog boxes to give user feedback





