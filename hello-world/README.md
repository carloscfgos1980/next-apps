## Nextjs tutorial. Codevolution

# Lesson 1. Introduction

https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI

What is Nextjs?

React:

- It is not feseable to create a fully-featured application ready for production
- React is library for building user interfaces
- You need to make decitions about other features such as routing , data fetching and more

Nextjs:

- It is a React framework, it uses React to build user interfaces
- Provide additional features that enable you to build production-ready applications
- These features includes routing, optimized rendering, data fetching, bundling, compiling, and more
- You don't need to install additional packages as Nextjs provides everything you need
- Nextjs is a React framework to build production web application
- It simplifies the process of building a website application for production:

1. Routing
2. API routes
3. Rendering
4. Data fetching
5. Styling
6. Optimization
7. Dev and prod build system

# Lesson 2. Hello World

https://www.youtube.com/watch?v=kVddMV-TrSw&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=2

1. Create the app:
   npx create-next-app@latest
2. Give a name: hello-world
3. Yes to all question except for the last one (alias)
4. go the folder:
   cd hello-world
5. start the app:
   npm run dev
6. Change the NEXT.js logo for the <p>Hello World</p>

# Lesson 3. Project Structure

https://www.youtube.com/watch?v=FmerxXWD66g&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=3

# Lesson 4. Before We Start

https://www.youtube.com/watch?v=x7oQC_R_yVo&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=4

<React Server Components (RSC):>

- React Server Components is a new architecture introduced by React team in version 18 which it was quickly embraced by Next.js
- The architecture introduce a new way of creating React comonents, splitting them into two types:

1. Server components
2. Client components

<Server components:>
- In Next.js all components are server components by default
- They have the ability of reading files or fetching data from a database
- However they don't have the hability of using hooks or user interactions

<Client components:>
- To create a Client component, it's necessary to add "use client" at the top of the component file
- Client component can't performance tasks like reading files, but they have the ability to use hooks and manage interactions

# Lesson 5. Routing

https://www.youtube.com/watch?v=Vm7qM1wmXwE&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=5

= Nextjs has a fyle system based using routing mechnism

- URL paths that users can access in the browser are defined by files and folders in your codebase
