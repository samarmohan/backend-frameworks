# 🚩 Backend Frameworks 🚩

---

### 🚀 About 🚀

I created the same (almost) REST API with 7 different backend frameworks. Django, Flask, Nest, ASP.NET Core, Spring
Boot, Rails and Express. <br>

These are all for educational purposes. They do not accomplish any specific task. <br>

They are all todo APIs (I know, I know) that have the same endpoints and functionality. They can GET, POST, PUT, and
DELETE resources. They connect to different databases.

#### Details and ⚙️ Setup ⚙️

- ASP.NET Core

	1. Connects to SQL Server LocalDB
	2. Written in C#
	3. Folder Name: Todos_ASPNETCORE
	4. Setup: <br>
	   a. Install [Visual Studio](https://visualstudio.microsoft.com/) with the ASP.NET and Web Development workload.
	   SQL Server LocalDB will install with it. Windows and Mac only. <br>
	   b. Run `dotnet watch` inside the folder and go to the url.

- Django

	1. Connects to PostgreSQL
	2. Written in Python
	3. Folder Name: Todos_Django
	4. Setup: <br>
	   a. Install [Python3](https://python.org/) for your OS. <br>
	   b. Install [PostgreSQL](https://www.postgresql.org/download/) for your OS. <br>
	   c. Go to [settings.py](Todos_Django/DjangoPY/settings.py) and customize the database settings. <br>
	   d. Install `pipenv` and run `pipenv install`. <br>
	   e. Run `python manage.py runserver`.

- Express

	1. Connects to MongoDB
	2. Written in TypeScript
	3. Folder Name: Todos_Express
	4. Setup: <br>
	   a. Install [Nodejs](http://nodejs.org/) for your OS. <br>
	   b. Install [MongoDB](https://www.mongodb.com/3) for your OS. <br>
	   c. Run `npm install` or `yarn` inside the folder to get all the deps. <br>
	   d. Run `npm run dev` or `yarn run dev`.

- Flask

	1. Connects to SQLite
	2. Written in Python
	3. Folder Name: Todos_Flask
	4. Setup: <br>
	   a. Install [Python3](https://python.org/) for your OS. <br>
	   b. Install `pipenv` and run `pipenv install`. <br>
	   c. Go to [server.py](Todos_Flask/server.py) and customize the database settings. <br>
	   d. Run `python manage.py runserver`.

- Nest.js

	1. Connects to MongoDB
	2. Written in TypeScript
	3. Folder Name: Todos_Nest

- Spring Boot

	1. Connects to PostgreSQL
	2. Written in Java
	3. Folder Name: Todos_SpringBoot

- Rails

	1. Connects to PostgreSQL
	2. Written in Ruby
	3. Folder Name: Todos_Rails

- Phoenix

	1. Connects to PostgreSQL
	2. Written in Elixir
	3. Folder Name: Todos_Phoenix

### ⚡ Status ⚡

Differences: The error messages and what the response is when you create/update/delete something. Those are impossible
to change because that has to do with the core framework.

Nothing has been deployed yet.

### 🌍 Contributing 🌍

Only submit issues if there is an inconsistency between APIs or if there is a serious security issue. Feel free to
submit PRs if you fixed something I didn't know about, or you added a whole other REST API, i.e. Ruby on Rails, Laravel
etc. That would be really helpful 😁

### 💭 My Thoughts 💭

###### _These are **my** opinions and things **I** noticed._

I really enjoyed creating this! Here is what I thought.

Express: Very similar to Flask, easy to set up, can use JS or TS. Functions for routes.

Flask: Similar to Express, you need a few more packages than Express, uses nice ORM. Functions and Decorators for
routes.

ASP.NET Core: A little boilerplate, you can scaffold out everything with Visual Studio/CLI. Dependency Injection,
Functions, and .NET's version of decorators (attributes)

Nestjs: Uses services and controllers. Similar to Spring Boot. Inject the Mongoose model into the service and the
service into the controller. Uses decorators and functions for routes.Very repetitive.

Spring Boot: ☝️. You inject the JPA Repo which provides functions into the service instead of model. Surprisingly, this
was simpler than Nest.

Django: I love Django :). You need serializers, urls, and the actual API. A little too much boilerplate for something so
simple. You need a third party package for this.

Rails: This was pretty easy and fast. Ruby is a weird language. I used the CLI to create the models and wrote simple
functions that do the work.

Phoenix: Very similar to Ruby. There is more code, and it is more complicated, but I *loved* it.

You should use Express or Flask for an API only application because they are easy to set up.
