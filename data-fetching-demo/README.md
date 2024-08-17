## Nextjs tutorial. Codevolution

# Lesson 62. 62 - Data Fetching. data-feching-demo app

https://www.youtube.com/watch?v=gBLro0UcwKw&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=62

<Data fetching in App Router>

- App Router uses the React Server Components(RSC) architecture, which allows to fetch data using either server components or client components
- It's advantages to fetch data using server components, as they have direct access to the server side such as database, file system or file system
- This not only tags into the server's computational power and proximity to the data sources for effient data fetching and rendering but also minimizes the need for client-side processing
- We will explore data fetching technique using both server and client components in Next.js
- Serve components support various configurations for catching, revalidating and optimizing data fetching
- On the client side data fetching is tipically manage through third-party libraries such as TanStack Query which offers its own robust APis

1. Create a new Next.js app for data fetching
   npx create-next-app@latest data-fetching-demo

# Lesson 63. Fetching Data with Server Components

https://www.youtube.com/watch?v=WAm-T04ztrs&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=63

- The RSC architecture in the app router introduces support for async and await keyword in Server Components
- This allows you to use the familiar JavaScript await syntax by defining your components as asynchronous function
- This is the basics for data fetchingin server components

**src/app/users => fetch data and display in the DOM with tailwind style:**

1. Const to define URL
   const URL = "https://jsonplaceholder.typicode.com/users"

2. Define interface:
   interface User {
   id: number;
   name: string;
   username: string;
   email: string;
   phone: string;
   }

3. Async function
   export default async function UsersPage() {
4. Fetch the data anc console.log the result into the terminal coz is a server component:
   const response = await fetch(URL);
   const users = await response.json()
   console.log(users)

5. Rendered the fecthed data. Mapping the array of users. Tailwind styling in using grids
   return (
   <div className="grid grid-cols-2 gap-2 p-4">
   {users.map((user: User) => (
   <div
             key={user.id}
             className="flex items-center justify-between p-4 bg-white shadow rounded-lg text-gray-600"
           >
   <div className="flex flex-col space-y-1">
   <h2 className="text-lg font-semibold">{user.name}</h2>
   <p className="text-sm ">{user.username}</p>
   </div>
   <div className="flex flex-col space-y-1 items-end">
   <div className="text-md">{user.email}</div>
   <div className="text-md">{user.phone}</div>
   </div>
   </div>
   ))}
   </div>
   );
   }

# Lesson 64. Loading and Error States

https://www.youtube.com/watch?v=Or2aZfITRpU&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=64

- Traditionally in React, you mightmanage these states by creating separate variables and condictionally rendering UI based on their values
- To implement a loading state, define and export a React component in loading.tsx
- For handling errors, define and export a React component in error.tsx

1. src/app/users => Create loading.tsx to handle loading state

export default function LoadingPage() {
return (

<div className="flex items-center justify-center h-screen">
<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
</div>
);
}

1.2 src/app/usrs/page.tsx => Simulate a delay so we can watch the loading state with the spinner:
await new Promise((resolve) => setTimeout(resolve, 2000));

2. src/app/users => Create error.tsx to handle errors

"use client";
import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
useEffect(() => {
console.error(`${error}`);
}, [error]);
return (

<div className="flex items-center justify-center h-screen">
<div className="text-2xl text-red-500">Error fetching users data</div>
</div>
);
}

This is a client component, it uses the object Error from the DOM (browser)

# Lesson 65. JSON Server Setup

https://www.youtube.com/watch?v=bG6boMwCvk4&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=65

1. Install json server. I need to go the npm site, the look for this package and click in <stable version>, then go to <get start> section and copy the script to install this version
   npm install -g json-server@0.17.4

I install it locally so I delete -g flag

npm install
json-server@0.17.4

2. At root of the app. Create db.json file and copy the code from the tutorial repository

3. At root of the app. Create a server.js file and also copy the code from the tutorial repository

4. run the server:
   node server

5. It will be display at:
   http://localhost:3001/products

# Lesson 66. Caching Data

https://www.youtube.com/watch?v=6rRHJZAAV1E&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=66

<Caching Data>

- By Default Netx.js automatically cahes the returned values of the fetched data on the Server

1. src/app/ => Create <products> folder and page.tsx
2. src/app/products/page.tsx write the code for this route
3. Define type for typescript <Product> objetc
   type Product = {
   id: number;
   title: string;
   price: number;
   description: string;
   };

4. Async funtin
   export default async function ProductsPage() {

5. Fetch the data
   const productsResponse = await fetch("http://localhost:3001/products");
   const products = await productsResponse.json();

6. Render the data
return (
<ul className="space-y-4 p-4">
{products.map((product: Product) => (
<li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
<h2 className="text-xl font-semibold">{product.title}</h2>
<p>{product.description}</p>
<p className="text-lg font-medium">${product.price}</p>
{/_ <p>{details.title}</p> _/}
</li>
))}
</ul>
);
}

# Lesson 67. Data Cache

https://www.youtube.com/watch?v=_sIug3Y1YcA&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=67

<What is data cache?>
It is a server-side cache that persists the result of the fetches across incoming server requests and deployments

<Why is it required?>
The data cache improves the app performance and reduce costs by eliminating the need to re-fetch data from data source with every request

<How does it work?>

- Check <Next data fetching> diagram

# Lesson 68. Opting Out of Caching

https://www.youtube.com/watch?v=PlgDOhWFOno&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=68

- For individual data fetches, we can opt out of caching by the <cache> option to <no-store>

  const productsResponse = await fetch("http://localhost:3001/products", {
  cache: "no-store",
  });

- Once, we have specified the no-store option for a fetch request, subsequent fetch request will lso not be cached

# Lesson 69. Request Memoization

https://www.youtube.com/watch?v=tcLe3Xi0fJE&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=69

- Request Memoization is a technique that duplicates requests for the same data within a single render pass
- This approach allows for the reuse of data in the React component tree, prevents redudant network calls and enhance performance
- For the initial request, the data fetched from an external source and the result is storage in memory
- Sudsequent requets for the same data with the same render pass, retrieve the result from memory, bypassing the need to make the request again
- This optimizationnot only enhance performance but also simplifies fetching within a component tree
- When the same data is needed across different components in a route, it eliminates the need to fetch at the top level of the tree and pass props between components
- Instead the data can be fetched direct within the components that require it, it would concern about the performance application of multiple network requests for the same data
- Check <Request Memoization> diagram
- Request Memoization is a React feature, not pecifally Next.js feature
- Request Memoization only apply to GET method in fetch requests
- Memoization only applies within the React component tree
- For cases where fetch is not suitable, you can use React ache function to memoize funtions

# Lesson 70. Time based Data Revalidation

https://www.youtube.com/watch?v=dR0diq3EvDE&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=70

- React by deafult cache the result of a requests, nevetherless there are scenarios where a middle ground is required. For example at events listing pages might have event details such as schedule or venue information that changes occasionaly
- In this case, it is acceptable to fetch data once every hour as a fressness is not critical
- For such scenarios, Next.js allows to revalidate the cache

<Revalidation> is the process of purging the Data Cache and re-fetching the latest data

<Time-based revalidation>
Next.js automatically revalidates data after a certain amount of time has passed

- You can set the revalidate route segment configuration to stablish the default revalidation time for a layout or a page: export const revalidate = 10;
- Regarding to the revalidation frecuency, the lowest revalidate time across each layout of a page of a single route will determinate the revalidation frecuency of the entire route

Example:
src/app/products/page.tsx
const productsResponse = await fetch("http://localhost:3001/products", {
next: { revalidate: 10 },
});

# Lesson 71. Client-side Data Fetching

https://www.youtube.com/watch?v=zfaDdKH5Zv8&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=71

- It is also possible to fetch data on the client side, it is just like doing in Reace, the only different is "use client". There is an example in src/app/products-client/page.tsx
