## Nextjs tutorial. Codevolution

Lesson 45. Rendering. Using rendering-demo app

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
