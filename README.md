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

# Lesson 5. Routing. routing-demo

https://www.youtube.com/watch?v=Vm7qM1wmXwE&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=5

= Nextjs has a fyle system based using routing mechnism

- URL paths that users can access in the browser are defined by files and folders in your codebase

Exercise

2. Delete app folder

- All routes must be place inside app folder
- Every file that represents a route must be named page.js or page.tsx
- Every folder correspond to a ptah segment in the browser URL
- If the route does not match, it will automatically show a 404 response

3. Create app folder
4. Inside app folder, page.tsx file:
   export default function Home () {
   return <h1>Home Page</h1>
   }

5. inside <app> folder, create <about> folder and inside it create page.tsx:
   export default function About () {
   return <h1>About me</h1>
   }

6. Same step as above but with <profile> folder

7. Go to the browser and check the URL for the routes:
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

- Ensuring proper earch engine optimization (SEO) is crucial for increasing visibility and atracting users
- Nextjs introduced the metadata API whcih allow you to define metadata for each page
- Metadata ensures accurate and relevant information is displayed when your pages are shared or indexed

<Configuring metadata:>
- Export a static metadata object
- Exporting dynamic metadata function

<metadata rules:>
- Both layout.tsx and page.tsx files can export metadata. If defines in layout, it applies to all pages in that layout, but it defines in a page, it applies only to that page
- metadata is read in order, from the root level to the final page level
- When there is metadata in multiples places for the same route, they get combined, but page metadata will replace layout metadata if they have the same properties

<Export a static metadata object:>
1. src/app/about/page.tsx. Create metadata object
   export const metadata = {
   title: "About Codevolution",
   }

2. Go to chrome javadeveloper window and search:
   http://localhost:3000

I will see the metadata from layout.tsx in root directory:
export const metadata = {
title: 'Next.js',
description: 'Generated by Next.js',
}

- I need to expand <head>

3. Go to chrome javadeveloper window and search:
   http://localhost:3000/about

This time the title that show will be title: "About Codevolution", instead of title: 'Next.js',. While key "description" stay the same:
description: 'Generated by Next.js',

<Exporting dynamic metadata function>

1. Import Metadata to use in types:
   import { Metadata } from "next";

2. Crete type Props
   type Props = {
   params: {
   productId: string;
   };
   }

3. Metadata export function. Is is an async function that resolve a Promise in a "setTimeout" and return a string with fixed values: producr, iphone and dynamic values: productId:

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
const title = await new Promise(resolve => {
setTimeout(() => {
resolve(`iphone ${params.productId}`)
}, 100);
})

    return {
        title: `Product ${title}`
    }
    // return {
    //     title: `Product ${params.productId}`,
    // }

}

export default function ProductDetails ({params}:Props) {
return <h1>Details about product {params.productId}</h1>
}

# Lesson 18. title Metadata

https://www.youtube.com/watch?v=1OqftoKO2V0&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=18

<title Metadata>
- The title field's primary purpose is to define the document title
- It can either string or an object

<metadata title string value:>
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

<metadata title object value:>

1. src/layout:
   import { Metadata } from "next";

export const metadata: Metadata = {
title: {
absolute: "Root", // This over write the template
default: "Next.js Tutorial - Codevolution", //set a default title for the childrens
template:"%s | Codevolution" // %s is substitute for the title in the children page
},
description: 'Generated by Next.js',
}

2. src/app/blog:
   import { Metadata } from "next"

export const metadata: Metadata = {
// title: "Blog"
title: {
absolute: "Blog" // the template will be ignore and also the absolute in root/layout
}
}

# Lesson 19. Link Component Navigation

https://www.youtube.com/watch?v=TVAF5Fr_2QA&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=19

<Navigation:>

- File based routing
- We manually entered the URLs in the browser's address bar to navigate to the different routes
- User rely on UI like links to navigate:
  ~ Clicking on them or
  ~ Through programatic navigation after completing an action

<UI navigation:>
- Link Component: To enable client-side navigation, Next.js provide us with the Link component
- The <Link> component is a React omponent that extends the HTML tag <a> element, and it's the primary way to navigate between routes in Next.js
- To use, we need to import it from "next/link"

1. src/page.tsx. Link to route "blog":

import Link from "next/link"

        <Link href="/blog">Blog</Link>

2. Link to home page, to porduct details using hard coding and dynamic coding. Also the use of "replace" which erase the navigation history and bring back to home page
   import Link from "next/link"
   <>
   <Link href="/">Home page</Link>
   <h1>Products</h1>
   <h2>
   <Link href="products/1">producto 1</Link>
   </h2>
   <h2>
   <Link href="products/2">producto 2</Link>
   </h2>
   <h2>
   <Link href="products/3" replace>producto 3</Link>
   </h2>
   <h2>
   <Link href={`products/${productId}`}>producto {productId}</Link>
   </h2>
   </>

# Lesson 20. Active Links

https://www.youtube.com/watch?v=jzD1mUd35a0&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=20

1. src/app. restore the default globals.css

2. src/(auth). Create a layout.tsx file

2.1 convert this component into a client component:
"use client";
import Link from "next/link";

2.2 import CSS:
import "../globals.css";

2.3 Import hook to get the path:
import { usePathname } from "next/navigation";
const navLinks = [
{name: "Register", href:"/register"},
{name: "Login", href:"/login"},
{name: "Forgot Password", href:"/forgot-password"}
]

export default function AuthLayout({
children,
}: {
children: React.ReactNode
}) {

2.4 Assign the hook to a variable  
 const pathname = usePathname();

    return (
        <div>

2.5 map over the array that contains the link's path and name
{navLinks.map((link) => {

2.6 create a variable that will return true when it match the pathname
const isActive = pathname.startsWith(link.href)
return (

<Link
href={link.href} key={link.name}
2.7 apply CSS with a binary comparison
className={isActive? "font-bold mr-4" : "text-blue-500 mr-4"} >
{link.name}
</Link>
)
})}
{children}
</div>
)
}

# Lesson 21. Navigating Programmatically

https://www.youtube.com/watch?v=7jBHW98vNjw&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=21

1. convert the component into a client component
   "use client";

2. Import hook "useRouter"
   import { useRouter } from "next/navigation";

export default function OrderProduct() { 3. assing useRouter to a variable
const router = useRouter();

    const handleClick =() => {
        console.log("placing order");

4. Navigating Programmatically to home page
   router.push("/");
   }
   return (
   <div>
   <h1>Order Product</h1>
   <button onClick={handleClick}>Place order</button>
   </div>
   )
   }

**extra. Other use of router**
router.replace() => is similar to router.push("/")
router.back() => one step back in the navigation
router.forward() => one step forward in the navigation

# Lesson 22. Templates

https://www.youtube.com/watch?v=7xVWvL-37EE&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=22

<Templates:>

- Templates are similar to layouts in that they wrap each child layout or page
- But, with templates, when a user navigates between routes that share a template, a new instance of the component is mounted, DOM elements are recreated, state is not preserved, and effects are re-synchronized
- A template can be defined by exporting a default React component from a template.js or template.tsx
- Similar to layouts, templates should accept a childrem prop which will render the nested segments in the route

<Using hook state to check input form>

1. src/app/(auth)/layout.tsx. Import hook
   import { useState } from "react";

2. variable to handle state
   const [input, setInput] = useState("");

3. Form to input value

   <div>
   <input value={input} onChange={(e)=> setInput(e.target.value)}/>
   </div>

- With layout, the element don't mount again but if we change the name to template, the the element in the input field will be mount it as we click in different link

# Lesson 23. Loading UI

https://www.youtube.com/watch?v=PrxdiJrrrWs&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=23

<Beneficts loading.tsx:>

1. You can display the loading state as soon as the user navigate to the next route.
   The immediate feedback reassures the users that thir action has been acknowledged, reduce perceived loading times, and make the application feel more responsive

2. Next.js allows the creation of share layouts that remain interactive while new routes segments are loading.
   Users can continue interacting with certain parts of the application, such as the navigation menu, sidebar, even if the main content are still being fetched

# Lesson 24. Error Handling

https://www.youtube.com/watch?v=UcnCZ0lXZbo&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=24

<error.tsx>

- Automatically wrap a route segmentand its nested children in a React Error Boundary
- Create error UI to specific segment using the file-system hierarchy to adjust granularity
- Isolate error to affected segments while keep the rest of the application functinal
- Add functionality to attempt to recover from an error without a full page reload

1. src/app/product/[productId]/review/[reviewId]/page.tsx Random fuction

function getRamdomInt(count:number){
return Math.floor(Math.random() \* count)
}

2.  src/app/product/[productId]/review/[reviewId]/page.tsx. Call the ramdon function and save it a variable:

        const random = getRamdomInt(2);

3.  src/app/product/[productId]/review/[reviewId]/page.tsx. Create a condiction to throw an error
    if(random === 1) {
    throw new Error("Error loading review")
    }

4.  src/app/product/[productId]/review/[reviewId]. Create afile to handle error

"use client";

export default function ErrorBoundary ({error}:{ error: Error}) {
return <div>{error.message}</div>
}

# Lesson 25. Recovering from Errors

https://www.youtube.com/watch?v=f7LqNoMAAUc&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=25

Add a button to the error message to reaload the page

1. src/app/product/[productId]/review/[reviewId]/error.tsx.
export default function ErrorBoundary ({
error,
reset
}:{
error: Error,
reset: () => void
}) {
return (
  <div>
  {error.message}
  <button onClick={reset}>
  try again
  </button>
  </div>
  )}

2. src/app/product/[productId]/review/[reviewId]/error.tsx => Convert into a client component
   "use client";

# Lesson 26. Handling Errors in Nested Routes

https://www.youtube.com/watch?v=YG98I2Bj7qw&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=26

- Errors bubble up to the closest parent error boundary
- An error.tsx file will cater to errors for all its nested child segments
- By position error.tsx at a different levels in the nested folders of a route, you can achieve more granular level of errorhandling

# Lesson 27. Handling Errors in Layouts

https://www.youtube.com/watch?v=3V6ho699MDg&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=27

if error.tsx is placed in the same level that layout.tsx, it will not catch errors in layout.tsx, it has to be one level up

# Lesson 28. Parallel Routes

https://www.youtube.com/watch?v=8I5-OTNOni0&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=28

- Parallel Routes are an advancing routing mechanism that allows for the simultaneous rendering of multiple pages with the same layout
- Parallel Routes in Next.js are defined using a feature know as <slots>
- Slots helps structure our content in a modular fashion
- To define slots we use the @folder naming convention
- Each slots is passed as a prop to the corresponding layout.tsx file
- Check <parallel routes> diagram

<Benefits of Parallel Routes:>
- Their ability to split a single layout into various slots, making the code more manageable
- Independent route handling
- Subnavigation

<Independent route handling:>
- Each slot of your layout, such as user analytics or reveneu metrics, can have its own loading and error states
- This granular control is particular benefitial in scenarios where different sections of the page load at various speeds or encounter unique errors
- Check <independent route handling> diagram

<Subnavigation:>

- Each slot of your dashboard can essentially function as a mini-application, complete its own navegation and tate management
- This is useful in a complex application such as our dashboard where different ections serve different purposes

1. src/ => Create <components> folder.
2. src/components => Create Card.tsx file:

const Card = ({children}: {children: React.ReactNode}) => {
const cardStyle = {
padding: "100px",
margin: "10px",
boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
border: "1px solid #ddd",
display: "flex",
justifyContent: "center",
alignItems: "center"
}
return (

<div style={cardStyle}>{children}</div>
)
}

export default Card;

3. src/app => Create <complex-dashboard> folder
4. src/app/complex-dashboard => Create: page.tsx, layout.tsx
   page.tsx:
   export default function ComplexDashboardPage(){
   return <h1>Complex Dashboard</h1>
   }
   layout.tsx:

export default function DashboardLayout({
children,
users,
revenue,
notifications
}: {
children: React.ReactNode,
users: React.ReactNode,
revenue: React.ReactNode,
notifications: React.ReactNode,
}) {
return (

<div>
<div>
{children}
</div>
<div style={{display: "flex"}}>
<div style={{display: "flex", flexDirection: "column"}}>
<div>{users}</div>
<div>{revenue}</div>
</div>
<div style={{display: "flex", flex: 1}}>
{notifications}
</div>
</div>
</div>
)
}

- It looks a bit complex for the structure create for the flex CSS

5. src/app/complex-dashboard => Create 3 folders and page.tsx nested in each file:
   @notifications
   @users
   @revenue

@notifications/page.tsx:

import Card from "@/components/Card";

export default function Notifications(){
return <Card>Notifications</Card>
}

- The @ make the folder special and beheave as a component. It will not affect the router

- import Card from "@/components/Card"; => This is a kinda weird way of importing, it is done automatically by React

# Lesson 29. Unmatched Routes

https://www.youtube.com/watch?v=NPtnJ6Ivv9k&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=29

<navigation from the UI:>
In the case of navigation with the UI, Next.js retains the previous active state of slot regarless of changes in the URL

<Page reload:>
- Next.js immidiately searches for a default.tsx within each unmatched slot
- The presence of this file is critical, as it provides de default content that Next.js render in the user interface
- In this default file is missing in any of the unmatched slots for the current route, Next.js will render a 404 error

<default.tsx file:>

- It serves as a fallback to render content when the framework cannot retrieve a slot's active state for the current URL
- You have complete freedom to design the UI for unmatched routes: you can either mirrow the content found in page or an entirely custom iew

1. src/app/complex-dashboard/@notifications => Create a folder (route): archived
   src/app/complex-dashboard/@notifications/archived => Create a page.tsx:

export default function ArchivedNotifications(){
return (
<Card>

<div>Archived Notifications</div>
<Link href="/complex-dashboard">default</Link>
</Card>)
}

- It is almost the same info in @notifications/page.tsz. Just aupdate the name of the function, the href and text displayed in the link

2. src/app/complex-dashboard/@notifications/page.tsx => Add a link to /complex-dashboard/archived:
   <Link href="/complex-dashboard/archived">Archived</Link>

3. Create default fils for those unmatched routes (users and revenues), also for the parent element. It is just copy the info in page and paste it in default.tsx, otherwise, if page is reaload, we'll get a 404 error if we try to access the unmatched routes

# Lesson 30. Conditional Routes

https://www.youtube.com/watch?v=7HrOjvKIfRs&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=30

1. src/app/complex-dashboard => Create a folder componet and its page: @login/page.tsx
   import Card from "@/components/Card";
   export default function Login(){
   return <Card>Please Login</Card>
   }
2. src/app/complex-dashboard/layout.tsx => Implement a condiction for the rendered route
   2.1 add login as a prop
   2.2 create a constant to have the state of login (isLoging)
   2.3 Ternary comparison to render a login Card if isLogin is false and the dashboard if isLogin is true

# Lesson 31. Intercepting Routes

https://www.youtube.com/watch?v=nr_kRfTJfKc&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=31

- <Intercepting Routes> allow you to intercept or stop the default route behaviour to present an alternative view or component when navigating through the UI, while still preserving the intended route scenarios like page reload
- This can be useful if you want to show a route while keeping the content of current page
- Check <Intercepting loading> diagram
- Check <intercepting-fotos> diagram

<ntercepting Routes Conventions:>
- (.) to match segments at the same level
- (..) to match segments one level up level
- (..)(..) to match segments two levels up level: There is a issue with this convention and it does not quite work
- (...) to match segments from the root app directory

**important**

- Snippet to create a component: type: napage

This intercepting thing is not working... I don't think it is so important... it is in folde f1

# Lesson 32. Parallel Intercepting Routes

https://www.youtube.com/watch?v=mVOvx9eVHg0&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=32

This is an example of Parallel Intercepting Routes, it has a lot of code that I just copied from the <gopinav> repository:

https://github.com/gopinav/Next.js-14-Tutorials

# Lesson 33. Route Handlers. route-handler-demo

https://www.youtube.com/watch?v=25yY2RVRq_M&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=33

- We can create custom request handlers for our routes using a feature called <Route Handlers>
- Unlike page routes, which respond with HTML content, route handlers allow you to create RESTful endpoints, giving you full control over the response
- There is no overhead of having to create and configure a separate server
- Route Handlers are great for making an external API request
- Route Handlers run server-side, ensuring that sensitive information like private key remains secure and never gets shipped to the browser
- Route Handlers are the equivalent of API routes in a Page router

**important**
From now on, we are working in route-handler-demo app

1. Create firs route: <hello> folder/page.tsx:

export async function GET(){
return new Response("Hello World!")
}

2. Index route for organization.
   src/dashboard/page.tsx:
   export async function GET(){
   return new Response("Dashboard data")
   }

src/dashboard/users/page.tsx:
export async function GET(){
return new Response("Users data")
}

# Lesson 34. Handling GET Request

https://www.youtube.com/watch?v=b3ue9WL5fk8&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=34

I copied the file from the repository with is more complex to this lesson. Code is in src/comments/route.ts and src/comments/data.ts
src/comments/route.ts => contains the GET route:
import { comments } from "./data";

export async function GET() {
return Response.json(comments);

}

src/comments/data.ts data to be fetched:
export const comments = [
{
id: 1,
text: "This is the first comment",
},
{
id: 2,
text: "This is the second comment",
},
{
id: 3,
text: "This is the third comment",
},
];

URL:
http://localhost:3000/comments

# Lesson 35. Handling POST Request

https://www.youtube.com/watch?v=pzPS7Fn-8tE&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=35

src/app/comments/route.ts
export async function POST(request: Request) {
const comment = await request.json();
const newComment = {
id: comments.length + 1,
text: comment.text
};
comments.push(newComment);
return new Response(JSON.stringify(newComment), {
headers: { "Content-Type": "application/json" },
status: 201,
});
}

# Lesson 36. Dynamic Route Handlers. Get a single comment

https://www.youtube.com/watch?v=TGbC8F0gjC8&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=36

1. src/app/comments => Create a folder for the id. It is similar that dynamic page routes: [id]

src/app/comments/[id]. Create a route file: route.ts:
import { comments } from "../data";

export async function GET(
\_request: Request,
{params}:{
params:{
id:string
}
}) {
const comment = comments.find(comment => comment.id === parseInt(params.id))
return Response.json(comment);

}

- This function has to arguments: request, context
  context = params

\_request => underscore when the argument is not at use

# Lesson 37. Handling PATCH Request

https://www.youtube.com/watch?v=bDbBh7lEamE&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=37

src/app/comments/[id]/route.ts:

export async function PATCH(
request: Request,
{ params }: { params: { id: string } }
) {
const body = await request.json();
const { text } = body;

const index = comments.findIndex(
(comment) => comment.id === parseInt(params.id)
);
comments[index].text = text;
return Response.json(comments[index]);
}

# Lesson 38. Handling DELETE Request

https://www.youtube.com/watch?v=x3KCt1Oc278&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=38

src/app/comments/[id]/route.ts

export async function DELETE(
\_request: Request,
{ params }: { params: { id: string } }
) {
const index = comments.findIndex(
(comment) => comment.id === parseInt(params.id)
);
const deletedComment = comments[index];
comments.splice(index, 1);
return Response.json(deletedComment);
}

I have never used slice method, neverthless is very straight forward and easiest that the method I used before to delete a object from the array of data, before I loop the array and mismatch the object (item) I wanted to delete... nevertheless this is not really important since the delete process is done by the databas in the real world app

# Lesson 39. URL Query Parameters

https://www.youtube.com/watch?v=fuxSl-K0oI0&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=39

1. Import NextRequest
2. Pass request from Next request as a argument in GET funtion
3. Get the query from the URL:
   const searchParams = request.nextUrl.searchParams;
   const query = searchParams.get("query");
4. filter the comments array based in the query parameter with a ternary comparison so the default array is returned in case that there is no query:

   const filteredComments = query
   ? comments.filter((comment) => comment.text.includes(query))
   : comments;

5. Return the resulted array:
   return Response.json(filteredComments);

**code here:**

import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
const searchParams = request.nextUrl.searchParams;
const query = searchParams.get("query");
const filteredComments = query
? comments.filter((comment) => comment.text.includes(query))
: comments;
return Response.json(filteredComments);
}

**http query search:**
http://localhost:3000/comments?query=first

# Lesson 40. Redirects in Route Handlers

https://www.youtube.com/watch?v=54eKbXPrvuo&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=40

src/app/comments/[id]/route.ts

1. Import <redirect>:
   import { redirect } from "next/navigation";

2. Inside GET function and before the return, create a condition to check is the id is greater than the comments array lenght:
   if(parseInt(params.id) > comments.length){
   redirect("/comments")
   }

# Lesson 41. Headers in Route Handlers

https://www.youtube.com/watch?v=pxHbFrahyLY&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=41

- HTTP headers represent the metadata associated with an API requests and response

<request headers:>
- These are sent by the client such a web browser, to the server, they contain essential information about the request, which helps the server o understand and process it correctly
- "User-Agent" which identifies the browser and operating system to the server
- "Accept" headers which indicates the content type like text, videos, or image formats that the client can process
- "Authorization" header is used by the client to authenticate itself to the server

<response headers:>
- These are sent back from the server to the client. They provide information about the server and the data being sent in the response
-"Content-Type" header which indicates the media type of the response. It tells the client what the data type of the returned content is, such as text/html for HTML documents, application/json for JSON data, etc

src/app/profile/api/route.ts
There are 2 methods:
// method 1
const requestHeaders = new Headers(request.headers);
const method1 = requestHeaders.get("Authorization");
console.log("method 1:", method1);

    // method 2
    const headersList = headers();
    const method2 = headersList.get("Authorization");
    console.log("method 2:", method2)

**POSTMan**
URL:
http://localhost:3000/profile/api

Headers:
key: Authorization
value: Beared 12345

- The console.log shows in the terminal the value: 12345

<headers in response>
    return new Response("<h1>Profile Api Data</h1>", {
        headers:{
            "Content-Type":"text/html",
        },
    });

# Lesson 42. Cookies in Route Handlers

https://www.youtube.com/watch?v=1qd3_OGL5Ko&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=42

- Cookies are small pieces of data that a server sends to user's web browser
- The brower may store the cookie and send it back to the same server with later requests
- Cookies are used mainly for 3 porpuses:

1. Session management like login and shopping carts
2. Personalization like users preferences and themes
3. Tracking like recording and analizing user behaviour

- There are 2 methods:

1.  // cookies 1
    const theme = request.cookies.get("theme");
    console.log("cokkies1:", theme);

    return new Response("<h1>Profile Api Data</h1>", {
    headers:{
    "Content-Type" : "text/html",
    "Set-Cookie" : "theme=dark"
    },
    });

2.                                                                                                                                           // cookies 2
    cookies().set("resultPerPage", "20");
    const resultPerPage = cookies().get("resultPerPage");
    console.log("resultPerPage cookie:", resultPerPage);

# Lesson 43. Caching in Route Handlers

https://www.youtube.com/watch?v=5_cJFYZSiDM&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=43

Route handlers are catched by default when using the GET method with the response object in Next.js

How do we opt out of catching?

- dynamic mode in Segment Config Option
- using the Request with the GET method
- employing dynamic functions like headers() and cookies()
- using any http method other than GET

# Lesson 44. Middleware

https://www.youtube.com/watch?v=xrvul-JrKFI&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=44

- Middleware in Next.js is a powerful feature that offers a robust way to intercept and control the flow of request within your application
- It does this at a global level significantly enhancing features like redirection, URL rewrites, authentification, headers, cookies, and more
- Middleware allows us to specify path where it will be active. There are 2 approaches:

1. Custom matcher config
2. Condictional statement

# Routing section summary:

- Route definition
- Pages and layouts
- Dynamic routes
- Route groups
- Linking and Navigation
- Handle errors in routes
- Parallel routes and interceptin routes
- Route Handlers and Middlewares

# Lesson 45. Rendering. Using rendering-demo app

https://www.youtube.com/watch?v=fjLXVGDqix0&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=45

- Renderin is the process that transform the code you write into user interfaces
- in Next.js, choosing the right time and the place to do it is vital for building a performant application
- CSR, SSR and RSCs
- Rendering in React --> Rendering in Next.js

# Lesson 46. Client-side Rendering (CSR)

https://www.youtube.com/watch?v=OXrNQPhzH84&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=46

<Rendering in React:>
- Go-to library for creating a Single Page Applications (SPAs)

<Client-side rendering:>
- This method of rendering, where the component code is transformed into a user interface directly within the browser (client) is know as client side rendering (CSR)
- CSR rapidly become the standardfor SPAs, widespread option
- It wasn't long before developers began noticing some dropbacks of this approach

<Drawbacks of CSR:>

**SEO**

- Generating html that mainly contains a single div tags is not optimal for SEO (Search Engine Optimization) as it provides little content for search engine index

**Performance**

- Having the browser handle all the work, such as fetching data, computing the UI, and making the HTML interactive, can slow things down. Users might see blank screen or loading spiner while the page loads
- Each nea feature added to the application increase the size of the javascript bundle, prolonging the waitign time for users to see the UI

- Check <CSR-Client Side rendering> diagram

# Lesson 47. Server-side Rendering (SSR)

https://www.youtube.com/watch?v=3e017ih7pOA&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=47

<Server Side Solutions:>

- It significally improves the SEO because search engines can easily index the server-rendered content
- Users can see immidiately see the page HTML content, instead of a blank screen or a loading spinnner

<Hydration>
- It is where the static HTML page initially served by the server, is brought to life.
- During hydration, React takes control over the browser, reconstructing the component tree in memory based on the static HTML that was served
- It carefully plans the placement of interactive element within the screen. Then React proceeds to bind the necesary Javascript logic to this elements.
- This involve initializing the application state, attaching event handlers for actions such clicks, mouseover, and setting up any other dynamic functionalities requiered for a fully interactive user experience.

**Server Side Solutions:**

1. Static Side Generation (SSG)
2. Server Side Rendering (SSR)

**SSG:**
SSG occurs at build time, when the application is deployed on the server. This results in pages that are already rendered and ready to serve. It is ideal for content that doesn't change that often like blogs

**SSR:**

- Render pages on-demand in response to user request. It is suitable for personalized content like social media feeds, where the HTML depends on the logged-in user

**resume**
Server-Side Rendering (SSR) was a significant improvement over Client=Side Rendering (CSR), providing faster initial rendering and better SEO

<Drawbacks of SSR:>

1. You have to fetch everything before you can show anything

- Component cannot start rendering and then pause or "wait" will data still being load
- If a component need to fetch data from a daabase or another API, this fetching must be completed before the server can begin rendering the page
- This can delay the server response to the browser, as the srver must finish collection all necesary data before any part of the page can be sent to the browser

2. You have to load everything before you can hydrate anything

- For sucessful hydration, where React add interactivity to the server-rendered HTML, the component tree in the browser must exactly match the server-generated component tree
- That means that all the Javascript for the components must be loaded on the client before you can start hydrating any of them

3. You have hydrate everything before you can interact with anything

- React hydrates the component tree in a single pass, meaning once it starts hydrating, it won't stop until it's finished with the entire tree
- As a consequence, all omponents must be hydrated before you can interact with any of them

- Check <SSR-Srver Side Rendering> diagram

# Lesson 48. Suspense for SSR

https://www.youtube.com/watch?v=NdSthd1Ek8Q&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=48

<Suspense for SSR:>
1. HTML streaming on the server
2. Selective hydration on the client

<HTML streaming on the server:>
- You don't have to load everything before you can show anything
- If a particular section delays the initial HTML, it can be seamlessly integrated into the stream later
- This is the essence of how Suspense facilites server-side HTML streaming

<Code splitting:>
- Code splitting allows you to mark specific code segment as not immediately necessary for loading, signalling your budnler to segregate into separated "script" tags
- Using "React.lazy" for code splitting enable you to separate the main section's code from the primary Javascript bundle
- The Javascript containing React and the code for the entire application, excluding the main section, can now be downloaded independently by the client, without having to wait for the main section's code.

<Selective Hydration on the Client:>
- By wrapping the main section with <Susppense>, you have indicated to React that it should not prevent the rest of the page from not just streaming but also from hydrating
- Allows for the hydration of sections as they comes available, before the rest of the HTML and the Javascript code are fully downloaded
- A heavy piece of JS doesn't prevent for the rest of the page from becoming interactive
- Offers a solution to the necessity of "hydrate everything to interact with anything"
- Enable interactions with elements like the header or sidebarnavigation without waiting for the main content to be hydrated
- This process is managed automatically by React
-In scenarios where multiple components are awaiting for hydration, React prioritizes hydration based on user interactions

<Drawbacks of Suspense SSR:>

1. Even though, JS code is streamed to the browser asynchronously, eventually, the entire code for a web page must be downloaded by the user
   As application add more feature, the ammount of code users need to doanload, also grows. This leads to an important question:
   Should users really have to download so much data?

2. The current approach requires that all React components undergo hydration on the client-side, irrespective of their actual need for interactivity
   This can inefficiently spend resources and extend the loading times and time to interactivity for users, as the device needs to process and render components that might not even requireclient-side interaction
   Tis leads to another question:
   Should all components be hydrated, even those hat don't need interactivity?

3. In spite of servers' superior capacity for handling intensive processing tasks, the bulk of Javascript execution still takes places on the user's devise
   This can slow down the performance, especially on devices that are not very powerful.
   This leads to another important question:
   Should so much of the work be done on the user's devise?

- Check <suspense SSR> diagram

# Lesson 49. React Server Components (RSC)

https://www.youtube.com/watch?v=5h-e5hNKx-c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=49

<React Server Components (RSC):>

- Represent a new architecture designed by React team
- This approach aims to leverage the strengths of both server and client environment, optimizing for efficiency, load times and interactivity
- The architecture introduces a dual-component model:
  ~ Client Components
  ~ Server Components
- This distintion is not based in the functionality of the component but rather on wherethey execute and the specific environment they are desigh to interact with

<Client Components:>
- React components
- They are tipically rendered on the client side but they can be also rendered to HTML on the server side (SSR), allowing users to immidiatelly see the page's HTML content rather than a blank screen
- Have access to the client environment, such as the browser, allowing them to use statee, effects, event listeners to handle interactivity and also access browser -exclusive APIs like geolocation or localStorage, allowing you to build UIfor specific use cases

<Server Components:>
- Represent a new type of React components specifically designed to operate exclusively on the server
- Their code stays in the server and is never downloaded to the client

<Beneficts of Server Components:>

1. Reduce bundle sizes:
   Server Components do not send code to the client, allowing large dependencies to remain server-side
   This benefits users with slower internet conection or less capable devices on eliminating the need to download, parse and execute JS for these components
   Additionally, it removes the hydration step, speedig up the app loading and interaction

2. Direct Access to server side resources:
   By having direct access to resources like database or file systems, Server Components enable efficient data fetching and rendering without needing additional client-side proessing
   Leverging the server's computational power and proximity to data sources, they manage compute-intensive rendering tasks and send only interactive pieces of the code of the client

3. Enhanced Security:
   Server Components' exclusive server-side execution enhance the security by keeping sensitive data and logic, including tokens nd API keys, away from the client-side

4. improve data fetching:
   Server Components enhance data fetching efficiency
   Server Components enable applications to shift this sequential tround trip (fetching) to the server side
   Request latency is reduced, and overall performance improved, removing client-server "waterfalls"

5. Catching:
   Catching of the results, which can be reused in subsequent requests and across different users
   This approach can significally improve performance and reduce costs by minimizing the amount of rendering and data fetching required for each request

6. Faster initial Page load and First Contentfull paint:
   Pages become immidiatelly visible for users without the delay of downloading, parsing and executing JS

7. Improve SEO:
   The server-renderered HTML is fully accessible to search engines bots, enhancing the indexability of your pages

8. Efficient streaming:
   Server Components allows rendering process to be divided into manageable chunks, which are then streamed to the client as soon as they are ready
   Allows the user to start seeing parts of the page earlier, eliminating the need of waiting for the entire page to finish rendering on the server

<RSC and Next.js:>

- The App Router is built around the RSC architecture
- All the benefits we have discurssed are already baked into the last version of Next.js

# Lesson 50. Server and Client Components

https://www.youtube.com/watch?v=KvjWqn1VpPc&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=51

1. src/app/about => Server Componnent:
   export default function About() {
   console.log("About server component");
   return (
   <div>
   <h1>About Page</h1>
   </div>
   );
   }

2. src/app/dashboard => Client component:

"use client";

import { useState } from "react";

export default function Dashboard() {
console.log("Dashboard client component");  
 const [name, setName] = useState("")
return (

<div>
<h1>Dashboard page</h1>
<input value={name} onChange={(e)=> setName(e.target.value)}/>
<p>Hello, {name}!</p>
</div>
);
}

**Sumary**

- In the RSC architecture nd by extension in the Next.js app router, components are server components by default
- To use client components, we must include the "use client" directive on the top
- Server components are only rendered on the server
- Client componentes render once on the server and then on the client

# Lesson 51. RSC Rendering Lifecycle

https://www.youtube.com/watch?v=o57paErp8Pc&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=51

- Check <RSC Loading sequence> diagram
- Check <RSC Updating Sequence> diagram

<Server Rendering strategies:>
- Static rendering
- Dynamic rendering
- Streaming

# Lesson 52. Static Rendering

https://www.youtube.com/watch?v=WCcqnFRF9YA&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=52

- Static rendering is a strategy where the HTML is generated at build time
- Along with the HTML, the RSC payload is created for each component, and JavaScript chunks are produced for a client-side component hydration in the browser
- If you navigate directly to the route, the corresponding HTML is served
- If you navigate to the route from a different one, the route is created on the client side using the RSC payload nd JavaScript chunks, without any additional requests to the server
- Static rendering is great for performance and use cases includes blogs, documentation, marketing pages, etc

# Lesson 53. Dynamic Rendering

https://www.youtube.com/watch?v=-7Rrjy-lfcE&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=53

- I is a strategy where the HTML is generated at request time
- Next.js automatically switches to dynamic rendering when it come across a dynamic function in the component, such as cookies(), headers(), or the searchParams object
- This form of rendering is great for when we need to render HTML personalized a user, as a social media feed
- As a developer, we don't need to choose between sttic and dynamic rendering. Next.js will automatically choose the best rendering strategy for each route based on the features and APIs used

src/app/about => Examplo of a component that is rendered dynamically:

import { cookies } from "next/headers";

export default function About() {
const cookieStore = cookies();
const theme = cookieStore.get("theme");
console.log("About server component");
console.log(theme);
return (

<div>
<h1>About Page {new Date().toLocaleTimeString()}</h1>
</div>
);
}

**Note**
I had to delete <.build> folder, then run npm runs build and npm start

# Lesson 54. Streaming

https://www.youtube.com/watch?v=9REGGiU8hck&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=54

- Streaming is a strategy that allows for progressive UI rendering from the server
- Work is divided into chunks and streamed to the client as soon as it is ready
- This enable users to see part of the page immidiately, before the entire content has finished rendering
- Streaming significally improves both the initial page loading performance and the rendering of UI elements that rely on slower data fetches, which would otherwise block the rendering of the entire route
- Streaming is integrated to Next.js App Router by default

1. src/ => Create <components> folder
2. src/components/ => Create <product.tsx> component:

export default async function Products() {
await new Promise((resolve) => setTimeout(resolve, 2000));
return (

<div>
<h1>Product</h1>  
 </div>
);
}

4. src/components/ => Create <review.tsx> component:

export default async function Reviews() {
await new Promise((resolve) => setTimeout(resolve, 4000));
return (

<div>
<h1>Review Details</h1>  
 </div>
);
}

5. src/app/ => create <product-detail> folder and page.tsx
6. src/app/product-detail/page.tsx => Apply <Suspense>

import Products from "@/components/products";
import Reviews from "@/components/reviews";
import { Suspense } from "react";

export default function ProductDetailPage() {
return (

<div>
<h1>Product Detail Page</h1>
<Suspense fallback={<p>Loading product details ...</p>}>
<Products/>
</Suspense>
<Suspense fallback={<p>Loading review details ...</p>}>
<Reviews/>
</Suspense>
</div>
);
}

# Lesseon 55. Server and Client Composition Patterns

https://www.youtube.com/watch?v=7bsYcb3nWYA&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=55

<Server Components:>
- Fetching Data
- Directly access backend resources
- Protecting sensitive information on the server
- Keeping large dependencies server-side, which helps reducing client-side JavaScript

<Client Components:>
- Adding interactivity
- Handling eventlisteners
- Managing state and lifecycle effects
- Using browser exclusive APIs
- Using custom hooks
- Using React Class Components

# Lesson 56. Server-only Code

https://www.youtube.com/watch?v=t2tNpubt4y0&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=56

- Certain code is intended to execute only on the server
- You might have modules or functions hat use multiples libraries, use environment variables, interact directaly with database, or process confidential information
- Since JavaScript modules can be shared, it;s possible for code that is meant only for the server to unintentially en up in the client
- If server-side code gets bundle into the client-side JavaScript, it could lead to bloated bundle size, expose secret key, database queries and a sensitive business logic
- It is crucial to separate erver only code from client-side code to protect application;s security and integrity

<server-only package>
- Provide a build-time error if developer accidentically import one of those modules into a Client component

1. src/ => create <utils> folder, then inside it, <server-utils> file:
   import "server-only";

export default function ServerSideFunction() {
console.log(`use multiple libraries,
        interact with database,
        process condfidential information`);
return "server result"
}

- will throw an error if thos funtion is tried to be imported in a client-side component. I need to install a package for this purpose:
  npm i server-only

2. src/ => create <server-route> folder and a page.tsx file inside it:

src/app/server-route/page.tsx:
import ServerSideFunction from "@/utils/server-utils";

export default function ServerRoutePage() {
console.log("server route rendered");
const result = ServerSideFunction();
return (

<div>
<h1>Server Component</h1>
<p>{result}</p>
</div>
);
}

3. src/ => create <client-route> folder and a page.tsx file inside it:

"use client"
import ServerSideFunction from "@/utils/server-utils";

export default function ClientRoutePage() {
console.log("client route rendered");
const result = ServerSideFunction();
return (

<div>
<h1>Cient Component</h1>
<p>{result}</p>
</div>
);
}

# Lesson 57. Third Party Packages

https://www.youtube.com/watch?v=I4w5uZzdT1A&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=58

- The thirs party packages in the ecosystem are gradually adapting, beginning to add the "use client" directive to components that rely only in the client-only features, marking a clear distintionin their execution environment
- MAny components from npm package, which traditionally leverage client side features, haven't yet integrated this directive
- The absense of "use client" means that while this components will function correctly in the Client component, they might encounter issues or might not work at all with Server components
- To address this, you can wrap third-party componentsthat rely on client-only features in your own Client components

I used a different example for the carousel:

1. src/app/client-route/page.tsx => Create and Array and pass it to the carouselComponent
   1.1 Define the type of array
   export type ImageDetails = {
   id: number;
   location: string;
   }

1.2 Define the aray inside the function and above the return
const arrayImages:ImageDetails[] = [
{
id: 1,
location: "https://picsum.photos/400/200",
},
{
id: 2,
location: "https://picsum.photos/400/200",
},
{
id: 3,
location: "https://picsum.photos/400/200",
},
{
id: 4,
location: "https://picsum.photos/400/200",
},
{
id: 5,
location: "https://picsum.photos/400/200",
},
]

1.3 Import CarouselComponent on the top
import CarouselComponent from "@/components/carouselComponent";

1.4 Return CarouselComponent
<CarouselComponent arrayImages={arrayImages}/>

Install carousel package
nnpm install react-slick --save
npm install slick-carousel

2. src/components => create carouselComponent.tsx

2.1 src/components/carouselComponent.tsx
"use client";

2.2 Import ImageDetails interface and settings in this component
interface ImageProps {
arrayImages: ImageDetails[];
children?: React.ReactNode;
}

2.3. Copy all the code from the example
https://www.npmjs.com/package/react-slick

2.4 Substitute the div text with the images:
<Image
                   src="https://picsum.photos/400/200"
                   width={500}
                   height={500}
                   alt="Picture of the author"
               />

   </div>

2.5 Check this video for CSS:

https://www.youtube.com/watch?v=6YnryDjEGr8&t=470s

- I could not display the carousel when I map from the parent element (client-route/page.tsx), instead I need to map inside <Slide> tag in the <carouselComponent>

- I had a bug fetching the URL. This is how I fixed:

7. next.config.mjs => Add the URL to the congig:

const nextConfig = {
images: {
remotePatterns: [
{
protocol: 'https',
hostname: 'picsum.photos',
port: '',
pathname: '/400/200',
},
],
},
};

export default nextConfig;

2. .eslintrc.json => add next/babel"
   {
   "extends": ["next/babel", "next/core-web-vitals"]
   }

# Lesson 58. Context Providers

https://www.youtube.com/watch?v=Ou2IAs7W1Ig&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=59

- Context providers are typically rendered near the root of the application to share global application state and logic. For example, tje application theme
- However, since React context is ot supported in Server Components, attempting to create a context at the root of your application will result in an error
- To address this, you can create a context and render its provider inside a separate Client Component

1. src/components => Create theme-provider.tsx

1.1 declare this as a client component
"use client";

1.2 Import createContext and useContext
import { createContext, useContext } from "react";

1.3 Interface for the objetc style
interface Theme {
colors:{
primary: string,
secundary: string
}
}

1.4 Define the style objetc
const defaultTheme: Theme = {
colors:{
primary: 'black',
secundary: 'orange'
}  
}

1.5 Use hook "createContext"
const ThemeContext = createContext<Theme>(defaultTheme)

1.6 Funtion that will wrap all the children with "ThemeContext"
export default function ThemeProvider({children}: {children:React.ReactNode}) {
return (
<ThemeContext.Provider value={defaultTheme}>
{children}
</ThemeContext.Provider>
);
}

1.7 Export "ThemeContext" as a hook (custom hook)
export const useTheme = () => useContext(ThemeContext);

2. src/app/layout.tsx => Wrap the body with this "ThemeProvider"
   <ThemeProvider>
   <body className={inter.className}>{children}</body>
   </ThemeProvider>

3. src/app/client-route/page.tsx => Style "h1" using the primary and secundary colors that we define in theme-provider
   <h1
   style={{
               color: theme.colors.primary,
               background: theme.colors.secundary
           }} >Cient Component
   </h1>

This seems to me alike an unnecessary boiler plate. This motherfucker has too much time in their hands!

# Lesson 59. Client-only Code

https://www.youtube.com/watch?v=xn1LpTw-pzc&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=60

- Client-only code typally interact with browser specific features like the DOM, the window object, localStorage, etc which are not available in the server
- Ensuring that code is executed only in the client side prevents errors during server-side rendering
- to prevent unintended server side usage of client side code, we can use a package called client-only

1. Install "client-only"
   npm install client-only

2. src/utils => create "client-utils.ts"
   import "client-only";

export default function ClientSideFunction() {
console.log(`use window object,
        use localSorage`);
return "server result"
}

3. src/app/client-route/page.tsx => Render the "ClientSideFunction" from <client-utils>
   <ClientSideFunction/>

4. Do the same proce as above in server-route.tsx and as I try to navigate to this route, I will get 500 error

# Lesson 60. Client Component Placement

https://www.youtube.com/watch?v=MdpoBLCDmJo&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=60

- Check <Landing Page Component Tree> diagram

- Check <Changing to Client Component> diagram

- When we add "use client" to a component, it will affect all its child components
- Ideally place the "use client" as low as possible in the component tree so we don't loose the advantage of Next.js of sending to the browser, only what is strictly necessary

Exercise

1. src/components => Create 3 files: navbar.tsx, nav-links.tsx, nav-search.tsx

2. src/app => Create a route. landing-page/page.tsx

This route will render "navbar" and will render "nav-links" and "nav-search"

3. "nav-search" has a state (search) so we need to convert this component into a client component ("use client").

- I could try to pass the state from "navbar" but then the whole tree becomes a client component and it will be sent to the browser... still dunno how to have share state in Netx.js...

# Lesson 61. Interleaving Server and Client Components

https://www.youtube.com/watch?v=-RRiLnKSj8k&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=61

- A server component can not be imported into a client component but there is a way around, we can pass the server component as a prop of a client component

Example

1. Create a parent component passing props:

src/component/client-component-one.tsx

import ClientComponentTwo from "./client-component-two";

export default function ClientComponentOne({children}:{children: React.ReactNode}) {
return (

<div>
<h1>client component one</h1>
<ClientComponentTwo/>
{/_ <ServerComponentOne/> _/}
{children}
</div>
);
}

2.  Passing the server component as a prop
    src/app/interleaving/pate.tsx:

                <ClientComponentOne>
                    <ServerComponentOne/>
                </ClientComponentOne>
            </div>

# Rendering Section Summary:

- Client Side Rendering (CSR)
- Server Side Rendering (SSR)
- Suspense for SSR
- React Server Components (RSCs)
- Server and Clients components
- Render lifecycle of RSCs
- Static and dynamic rendering
- Streaming
- Server and Clients composition patterns
