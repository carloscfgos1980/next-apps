## Nextjs tutorial. Codevolution

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
