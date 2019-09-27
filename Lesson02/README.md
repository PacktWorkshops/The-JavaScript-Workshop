# The-JavaScript-Workshop

## Lesson 02

### Exercise 2.01: Creating a Working Project Directory 
*does not have a code file*

### Exercise 2.02: Creating Project Boilerplate
#### HTML:
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>JavaScript Project</title>
    <script src="app.js"></script>
  </head>
  <body>
    <h1>Just an HTML page...</h1>
  </body>
</html>
```
#### JS:
```
console.log("app.js JavaScript Included!");
```

### Exercise 2.03: Verifying Execution Order 
```
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>JavaScript Execution Order</title>
    <script>console.log('Within the HEAD');</script>
</head>
<body>
    <script>console.log('Within the BODY');</script>
    <h1>JavaScript Execution Order</h1>
    <p>View the browser console to see the effective order of execution.</p>
    <script>console.log('At the very END');</script>
</body>
</html>
```
