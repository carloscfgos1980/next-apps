## Nextjs tutorial. Codevolution

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

2.                  // cookies 2
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

# Routing sesction summary:

- Route definition
- Pages and layouts
- Dynamic routes
- Route groups
- Linking and Navigation
- Handle errors in routes
- Parallel routes and interceptin routes
- Route Handlers and Middlewares
