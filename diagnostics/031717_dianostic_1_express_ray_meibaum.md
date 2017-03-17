# Diagnostic Unit 2.1

### Question 1: What is the Request/Response Cycle?  How does it work?

Request/Response cycle is the process of interpreting a request from the browser, and responding appropriately.
For example, the user may make a GET request to a server, and the server would respond by rendering the corresponding resource back to the browser.  

### Question 2: What are the differences between a GET request and a POST request?

The difference between a GET request and a POST request is that a GET request is an attempt to READ a resource, whereas a POST request is the action of submitting or creating new data.

### Question 3: What does `npm init` do?

`npm init` asks the initiator a series of setup questions and then uses that data to create a package.json file.

### Question 4: What does CRUD stand for?  What are the HTTP verbs that are associated with each function?

CRUD and corresponding HTTP verbs:

CREATE - POST
READ - GET
UPDATE - PUT
DELETE - DELETE

### Question 5: If we have a form where we want to create new data, what type of `method` do we use in our form?  

To create new data using a form, we will want to set the form method to `post`.

### Question 6: If the following form was submitted, what would `action="myScript.js"` do?

```html
<form method="POST" action="myScript.js?_method=PUT">
  <input type="text" value="name"/>
  <button type="submit">Submit</button>
</form>
```
`action="myScript.js"` is the location where the form will try to submit the data to.

### Question 7: Write an express route that handles a POST request to the url `/menus` and redirects to the `/homepage`
```js
app.post('/menus', (req, res) => {
  res.redirect('/homepage');
});
```
### Question 8: In the following express route, write how you would grab the values of `:id` and `:song_id` in javascript.

```js
app.get("/artist/:id/song/:song_id"), function(req, res){
  let id = req.params.id;
  let songId = req.params.song_id;
}
```

### Question 9: What is MVC? How have we been using it so far?

MVC stands for Model View Controller and we've been using it in node as follows:

Model - Model is our data such as pirates or todos
View - Views are what the user will see in the browser.
Controller - The brains that pipe everything together. Controllers hold sets of logic together and act as a liaison between the corresponding models and views.

## Bonus Question

### Question 10: Write an express route that handles a GET request to the url `/products` and sends back the JSON object {error: "Bad Request"}

```js
app.get('/products', (req, res) => {
  res.send({
    error: "Bad Request"
  });
});
```
