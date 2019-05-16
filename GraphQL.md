# GraphQL 

What is GraphQL?

GraphQL is a syntax that describes how to ask for data. It is Generally Used to load data from a server. 

GraphQl has three main characteristics:

* It lets client specify exactly what data it needs. 
* It makes it easier to aggregate data from multiple sources. 
* It uses a type system to describe data.

A GraphQL query is a string that is sent to the server to be interpreted and fulfilled. A JSON like object is returned back to the client. 

What makes GraphQL standout?

GraphQL:
* Defines a data shape: The first thing you’ll notice is that GraphQL queries mirror their response. This makes it easy to predict the shape of the data returned from a query, as well as to write a query if you know the data your app needs. More important, this makes GraphQL really easy to learn and use. GraphQL is unapologetically driven by the data requirements of products and of the designers and developers who build them.
* Hierarchical : Another important aspect of GraphQL is its hierarchical nature. GraphQL naturally follows relationships between objects, where a RESTful service may require multiple round-trips (resource-intensive on mobile networks) or a complex join statement in SQL. This data hierarchy pairs well with graph-structured data stores and ultimately with the hierarchical user interfaces it’s used within.
* Strongly typed: Each level of a GraphQL query corresponds to a particular type, and each type describes a set of available fields. Similar to SQL, this allows GraphQL to provide descriptive error messages before executing a query.

* Protocol, not storage: Each GraphQL field on the server is backed by any arbitrary function. GraphQL had to leverage all this existing work to be useful, and so does not dictate or provide any backing storage. Instead, GraphQL takes advantage of your existing code.

* Introspective: A GraphQL server can be queried for the types it supports. This creates a powerful platform for tools and client software to build atop this information like code generation in statically typed languages, Relay, or IDEs like GraphiQL (pictured below). GraphiQL helps developers learn and explore an API quickly without grepping the codebase or wrangling with cURL.

* Version free: The shape of the returned data is determined entirely by the client’s query, so servers become simpler and easy to generalize. When you’re adding new product features, additional fields can be added to the server, leaving existing clients unaffected. When you’re sunsetting older features, the corresponding server fields can be deprecated but continue to function. This gradual, backward-compatible process removes the need for an incrementing version number.

Example of GraphQL:

![Alt text](https://cdn-images-1.medium.com/max/1200/1*dryZIFuTTY-9WiGlxSVEag.png)

## GraphQL Basics 

### Schema
A GraphQL schema is used to describe the functionality available to the client which connects to it. It describes all the data types and functions that can be utilized to create data, retrieve it, update it, or delete it. 

When describe your data you can use the keyword type to specify what information and what type of data these *types* will hold. 

    type Book {
        title: String
        author: Author
    }

    type Author {
        name: String
        books: [Book]
    }

These definitions express the relationship and shape of the data. 

In order to fetch data you would use a query. This is similar to the GET verb in REST-api. 

    query {
        getBooks {
            title
        }

        getAuthors {
            name
        }
    }

To Add, Update, or Delete data you would use a Mutation. This is Similar to the PUT, POST, PATCH, and DELETE verbs in REST-api.

    mutation {
        addBook(title: "Fox in Socks", author: "Dr. Seuss") {
            title
            author {
                name
            }
        }
    }
The example above is creating a book titled "Fox in Socks". A response will be returned that will include the title of the book and an author object that includes the name of the author.
