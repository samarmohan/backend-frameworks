# 🚩 Backend Frameworks 🚩

---

### 🚀 About 🚀

I created the same (almost) REST API with 5 different backend frameworks. Django, Flask, Nest, ASP.NET Core, and Express. <br>

These are all for educational purposes. They do not accomplish any specific task. <br>

They are all todo APIs (I know, I know) that have the same endpoints and functionality. They can GET, POST, PUT, and DELETE resources.
They connect to different databases.

#### Details

-   ASP.NET Core

    1. Connects to SQL Server LocalDB
    2. Written in C#
    3. Folder Name: Todos_ASPNETCORE

-   Django

    1. Connects to PostgreSQL
    2. Written in Python
    3. Folder Name: Todos_Django

-   Express

    1. Connects to MongoDB
    2. Written in TypeScript
    3. Folder Name: Todos_Express

-   Flask

    1. Connects to SQLite
    2. Written in Python
    3. Folder Name: Todos_Flask

-   Nest.js

    1. Connects to MongoDB
    2. Written in TypeScript
    3. Folder Name: Todos_Nest

- Spring Boot

    1. Connects to PostgreSQL
    2. Written in Java
    3. Folder Name: Todos_SpringBoot

### ⚡ Status ⚡

All the APIs may not be exactly the same. I believe that some use the ID to look things up and some use the NAME of the todo. I am working on fixing this!
Nothing has been deployed yet.

### 🌍 Contributing 🌍

Only submit issues if there is an inconsistency between APIs or if there is a serious security issue.
Feel free to submit PRs if you fixed something I didn't know about, or you added a whole other REST API, i.e. Ruby on Rails, Laravel etc. 
That would be really helpful 😁

### 💭 My Thoughts 💭 
######_These are **my** opinions and things **I** noticed._

I really enjoyed creating this! Here is what I thought. 

Express: Very similar to Flask, easy to set up, can use JS or TS. Functions for routes.

Flask: Similar to Express, you need a few more packages than Express, uses nice ORM. Functions and Decorators for routes.

ASP.NET Core: A little boilerplate, you can scaffold out everything with Visual Studio/CLI. Dependency Injection, Functions, and .NET's version of decorators (attributes)

Nestjs: Uses services and controllers. Similar to Spring Boot. Inject the Mongoose model into the service and the service into the controller. Uses decorators and functions for routes.Very repetitive.

Spring Boot: ☝️. You inject the JPA Repo which provides functions into the service instead of model. Surprisingly, this was simpler than Nest. 

Django: I love Django :). You need serializers, urls, and the actual API. A little too much boilerplate for something so simple. You need a third party package for this.

Using Django, ASP.NET Core, Spring Boot, and Nestjs is overkill for just an API. Only use those if you are building an API and using pages.
Since Express and Flask are easy to set up, use those for API only applications.