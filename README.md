# WORKERFY,
##### Simple workers at you door step.

Workerfy is my portfolio project done during my time at the ALX/HOLBERTON SE Programme. Workerfy is a web application that seeks to bridge the gap between finding civil workers.
**[Link to Workerfy App](http://12c692893a5e.bbc32185.alx-cod.online:5000/)**
**[Link to Blog post](http://kyeissimpleshell.code.blog/2022/06/04/portfolio-project-blog-postworkerfy/)**
**[Link to my linkedIn](https://www.linkedin.com/in/bernard-mensah-1734a2141)**

### Motivation
Just a few years ago during the time of my National Service, one morning on my way to work, i found something unfamiliar with our water closet, the water level was so high i couldn't go to work without solving that problem. But there was a second problem, I needed a plumber but same time I was running late to for work. I was caught in the dilemma of finding a plumber now or find the plumber after work. But the water closet could get worse. This got me thinking and made me conceptualise what if there was a mobile application that could help me find a worker even on my way to work. This was the beginning of Workerfy. The application that would help people find workers at ease and at any point in time. With my undying love to create I decided to take a course in software engineering to make this concept a reality. And today Workerfy has initialized.

### Built status 
As at now, I call the project Workerfy_test v1.0. The test in the name is because this project is actually a project I want to take on to the global stage but this portfolio project was actually done to see how well I have grasped thr knowledge from the SE Programme. Because of the time frame, I had to write all my python code in one file to avoid instances of bugs and importation errors, as i was already faced with one cyclical importation so i moved all my codes into one file to be in time.

### Code style and tech used
I used the python flask framework for this project. And the code was written in the pycodestyle.
For this project I used some python modules and framework. I used
* Flask - this is the main framework I used to create routes and also work with my html files.
* Flask_ RESTful - I used this module to create all  the APIs I needed for the web application.
* Flask_SQLAlchemy - I used this module to create the database and tables need for the project. I used the SQLLite database.
* io - I used the function BytesIO from this module to convert the binary image data stored in the database to the image itself.

### Featues
FEATURES:
The Workerfy web application has some important features to note. The first feature to talk about is the home page. It actually serves as a route which divert you to either the explore page or worker account pages.
![Home page!](/static/image/home.jpg "Home Page ")

The next feature is the explore feature. On the explore page people finding workers can go through all the workers in the database and also search for workers by filtering either by location or work fields or location and work fields. The worker cards displayed contains pictures of the workers works for the client to see what kind of work the work can do and information to reach the worker if the client searching is interested in the worker.
![explore page!](/static/image/explore.jpg "explore Page ")

The third feature is the worker account page. With this feature workers can create accounts that will be displayed on the explore. Workers can also update their information anytime.
![account page!](/static/image/account.jpg "account Page")

### Code example
The main file handling the program is the workerfy.py file,. All the functions are simple to understand and are documented. 

### Contribute
This project is open to anyone who wants to use it but I will like others to link up with me to form a team were we can actually work together on this project on a global deployment scale.

### Credits
I will like to appreciate writers and creaters of some articles and videos that helped me finish this project. 

##### Online articles:
* flaskage.readthedocs.io - helped in database queries.
* sk-sqlalchemy.palletsprojects.com - also helped in database queries.
* css-tricks.com
* stackoverflow.com

##### YouTube Channels:
* LearnWebCode - javascript
* Coding Shiksha - Flask sessions
* Pretty Printed - solved one of the most difficult points in tge projects (using the image data stored in the database)
* Easy Tutorials - also very helpful with the front-end
* Dani Krossing - JQuery, AJAX and Javascript
* Tech with Tim - Awesome Flask tutorials
* freeCodeCamp.org - flask course.

### The truth behind me and workerfy

I have been a technology enthusiast since I was born. I have always dreamt of creating something that could change some difficult issues we face in our world, to make our world a better place. But my education path through me off my rails and ended up getting my first degree in Business Administration which i am proud of but technology is my passion that why I am not working but to fulfil my dreams. And that is my background.

Just a few years ago during the time of my National Service, one morning on my way to work, i found something unfamiliar with our water closet, the water level was so high i couldn’t go to work without solving that problem. But there was a second problem, I needed a plumber but same time I was running late to for work. I was caught in the dilemma of finding a plumber now or find the plumber after work. But the water closet could get worse. This got me thinking and made me conceptualise what if there was a mobile application that could help me find a worker even on my way to work. This was the beginning of Workerfy. The application that would help people find workers at ease and at any point in time. With my undying love to create I decided to take a course in software engineering to make this concept a reality. And today Workerfy has initialized.

##### Experiencing my full-stack ability
In this Workerfy portfolio project, the frontend was built using HTML5, CSS3, Javascript and the python flask framework. For the backend I used a SQLLITE database system with SQLALCHEMY and also built my API’s with the flask_RESTful python module.

##### What really got me  stack
I wanted to have a feature where users can see pictures of the workers work as a prove of truth. The images data collection was saved in a database. Now i was face with the challenge of how to show the images on the pages from the database. First I thought there would be a regular query for the images to be passed to a variable but wasn’t the case. I search online for so many hours I was even about to give up, then i found a tutorial on how to return images from a database with a return send_file. Send_file is a function that sends the file to a client with a request url. I took advantage of this to create routes for all the images of a worker and passed the route as the source of the images to the src attributes in the img tags in the html files.

##### My Experience through the making
This portfolio project has thought me alot. At first I thought I had it all with what I knew and will be able to build easily. But during and after the project i have realised i need more than what I know now and still have to learn more. I have come to realise software engineering is not an easy field, the ton of knowledge one has reflects what you can actually do or build. For myself, I have noticed I will not rest if the code does not work. I have spent over 10 hours trying to figure out a codes bugs whilst I could have pause to do other aspects. I know I am going to be a wonderful software engineer.

##### Bernard Kyei Mensah
Once again, my name is Bernard Kyei Mensah, I am a wonderful soul, hard working and will not move if the code does not work. Thank you.