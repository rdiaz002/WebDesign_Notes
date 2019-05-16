# REST

What is REST? 

REpresentational State Tranfer is an architectural Sstyle for providing standards between computer systems on the web. A system that implements the REST architecture is labeled as RESTful. A RESTful system is stateless and seperates client and server functionality.

Seperation of Client and Server is a big deal in the REST Architecture. One can exist without ever knowing the state of the other. Aslong as the messaging protocol is well know between the two the system will function properly. 

## Communication 

Communication between client and server utlizes a HTTP Verb, Header, a path to a resource, and an optional message body that contains data. 

The HTTP Verbs are:
* GET
* POST
* PUT
* DELETE

Heres an example of a client trying to access a resource on a server. 

            GET /articles/23
            Accept: text/html, application/xhtml

Here is an example of the server responding to this request.

            HTTP/1.1 200 (OK)
            Content-Type: text/html

Here are the possible response codes. 
<table>
<thead>
<tr>
<th>Status code</th>
<th>Meaning</th>
</tr>
</thead>
<tbody><tr>
<td>200 (OK)</td>
<td>This is the standard response for successful HTTP requests.</td>
</tr>
<tr>
<td>201 (CREATED)</td>
<td>This is the standard response for an HTTP request that resulted in an item being successfully created.</td>
</tr>
<tr>
<td>204 (NO CONTENT)</td>
<td>This is the standard response for successful HTTP requests, where nothing is being returned in the response body.</td>
</tr>
<tr>
<td>400 (BAD REQUEST)</td>
<td>The request cannot be processed because of bad request syntax, excessive size, or another client error.</td>
</tr>
<tr>
<td>403 (FORBIDDEN)</td>
<td>The client does not have permission to access this resource.</td>
</tr>
<tr>
<td>404 (NOT FOUND)</td>
<td>The resource could not be found at this time. It is possible it was deleted, or does not exist yet.</td>
</tr>
<tr>
<td>500 (INTERNAL SERVER ERROR)</td>
<td>The generic answer for an unexpected failure if there is no more specific information available.</td>
</tr>
</tbody></table>