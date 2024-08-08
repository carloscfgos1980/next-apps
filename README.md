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

Exercise

1. Delete app folder

- All routes must be place inside app folder
- Every file that represents a route must be named page.js or page.tsx
- Every folder correspond to a ptah segment in the browser URL
- If the route does not match, it will automatically show a 404 response

2. Create app folder
3. Inside app folder, page.tsx file:
   export default function Home () {
   return <h1>Home Page</h1>
   }

4. inside <app> folder, create <about> folder and inside it create page.tsx:
   export default function About () {
   return <h1>About me</h1>
   }

5. Same step as above but with <profile> folder

6. Go to the browser and check the URL for the routes:
   http://localhost:3000/about
   http://localhost:3000/profile

# Lesson 6. Nested Routes

https://www.youtube.com/watch?v=mEral6yz130&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=6

- To create a nested routes, we simply create a nested folder structure

Example
http://localhost:3000/blog/first
src/app/blog/first/page.tsx

# Lesson 7. Dynamic Routes

https://www.youtube.com/watch?v=N4-EkNJ6RFM&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=7

1. Create special folder for dynamic route inside <products> folder: [productId]
2. Inide [productId], create a file for the dynamic routes:

export default function ProductDetails ({
params  
 }:{
params:{productId:string};
}) {
return <h1>Details about product{params.productId}</h1>
}

- This looks a bit complicated cos the typescript needs to declare params that will be receiving as props (details of the product depending on the id).

# Lesson 8. Nested Dynamic Routes

https://www.youtube.com/watch?v=Vn4p4K6_M44&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=9

1. Inside [productId], create <reviews> folder.
2. Inisde <reviews> folder, create [folderId] folder
3. create page.tsx:
   xport default function ReviewDetail ({
   params  
    }:{
   params:{
   productId:string
   reviewId:string
   };
   }) {
   return <h1>
   Review {params.reviewId} for the product{params.productId}
   </h1>
   }

# Lesson 9. Catch all Segments

https://www.youtube.com/watch?v=Ssw6-69KLRo&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=9

1. Inside <app> folder, create <docs> folder
2. Inside <docs>, create [[...slug]]
3. Inside [[...slug]], create page.tsx:

export default function Docs ({
params
}:{
params:{
slug:string[];
}
}) {
if(params.slug?.length === 2){
return <h1>
Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}

</h1>
} else if(params.slug?.length === 1){
return <h1>
Viewing docs for feature {params.slug[0]}
</h1>
} else {
return <h1>Docs Home Page</h1>
}
}

Explanation:

1. [[...slug]] => doble braket otherwhise it will give 404 when I pass not params argument

2. if else to check for the params and then displayay the message

3. typescrip, this params are an array of string:
   params:{
   slug:string[];
   }

params.slug?.length === 2
http://localhost:3000/docs/routing/catch-all-segments

params.slug?.length === 1
http://localhost:3000/docs/routing

else
http://localhost:3000/docs

# Lesson 10. Not Found Page

https://www.youtube.com/watch?v=tW3rVL7xc8Y&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=10

1. src/app/. Create a customize "not found" page:

export default function NotFound () {
return (

<div>
<h2>Page not found</h2>
<p>Could not found requested resource</p>
</div>
)
}

2. Create a not found review if is more than 1000
   2.1 src/app/products/reviews. Create a customize "not found" page:

export default function NotFound () {
return (

<div>
<h2>Review not found</h2>
</div>
)
}
2.2 src/app/products/reviews/[reviewId]/page.tsx. Condiction

        if(parseInt(params.reviewId) > 1000) {
            notFound();
        }

# Lesson 11. File Colocation

https://www.youtube.com/watch?v=kO2nTCgcJLc&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=11

Explanation how in order to be able to use the toute paga, it always has to be name page.tsx

# Lesson 12. Private Folders

https://www.youtube.com/watch?v=nQKtuiccMLs&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=12

- A private folder ndicates that is a private implementation and should not be considered by the routing
- The folder and its subfolders are excluding from the routing
- Prevate folder it has to be prefix with underscore (\_). Example: \_lib

<Private Folders:>
- For separating UI logic from routing logic
- For consistenly organizing files across the project
- For sorting and grouping files in code editors
- Avoid potential naming conflicts with future Next.js file conventions

# Lesson 13. Route Groups

https://www.youtube.com/watch?v=Tpo5wBuk3po&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=13

- Allows us to logically group our routes and project files without affecting the URL path structure

- Let's implement authentication routes:
  ~ Register
  ~ Login
  ~ Forgot Password

  1. app/. Create a route folder, example (auth)

  - This folder is wrapped with parenthesis so it's not need to be mentioned in the URL

  2. Create 3 folders(register, login, forgot-password), create a page.tsx and place a simple export function inside each of them.

  URL:
  http://localhost:3000/forgot-password

  # Lesson 14. 14 - Layouts

  https://www.youtube.com/watch?v=f93g238p9tM&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=14

  <Layouts:>

  - A page is UI that is a unique to a route
  - A layout is UI that is shared between multiples pages in the app:
    ~ Header
    ~ Content
    ~ Footer

   <How to create a layout:>
   - You can define layout by default exporting a React component from layout.js or layout.tsx file

  That component should accept a children prop that will be populatedwhith a child page during rendering

  1.  src/layout.tsx. Add <header> before {children}:
      <header
      style={{
          backgroundColor: "lightblue",
          padding: "1rem"
        }}

      >

          <p>Header</p>

        </header>

  2.  src/layout.tsx. Add <footer> after {children}:
      <footer
      style={{
          backgroundColor: "lightpink",
          padding: "1rem"
        }}
      >
          <p>Footer</p>
        </footer>

# Lesson 15. Nested Layouts

https://www.youtube.com/watch?v=FWlUf4FEQ1M&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=15

Create a layout inside the product route:

src/app/products/[productId]/ Create <layout.tsx> file:
export default function ProductDetailsLayout({
children,
}: {
children: React.ReactNode
}) {
return (
<>
{children}

<h2>Features products</h2>
</>
)
}

- Check:
  http://localhost:3000/products/2

# Lesson 16. Route Group Layout

https://www.youtube.com/watch?v=V5GKwuzKQV0&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=16

<Route Group uses:>
~ To organize your project in a manner that does not affect the URL
~ To selectively apply layout to certain segments while leaving other unchanged

1. src/app/(auth)/ Create dismissed folder by browser:
   (with-auth-layout)

2. Move to this folder the routes that we wanted to be affected by this layout, in this case <login> and <register>

3. src/app/(auth)/(with-auth-layout)/ Create a <layout> file:
   export default function AuthLayout({
   children,
   }: {
   children: React.ReactNode
   }) {
   return (
   <>
   <h2>Inner Layout</h2>
   {children}
   </>
   )
   }

# Lesson 17. Routing Metadata

https://www.youtube.com/watch?v=yE_y4EBq-EA&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=17
