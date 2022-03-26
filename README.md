# [Jmfcool.js](https://www.jmfcooljs.org) · ![GitHub](https://img.shields.io/github/license/jmfcool/jmfcool.js?color=blue) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/jmfcool/jmfcool.js?color=green)

### A framework which allows users to create views while connecting models.

The commands below will install the project and allow you to run the Jest tests. The gulp command minifies the framework and adds it to the release directory as well as the demo directory. We also have a way to automatically version the project and tag it to push to GitHub for completing a release.

**Note:** You can create your own test in the test directory.

## Project

Clones repository, directs you to the project, and installs the node packages to run the build and tests.

### Installing Project

```
git clone git@github.com:jmfcool/jmfcool.js.git

cd jmfcool.js

npm install
```

### Running Tests

```
gulp jest
```

### Running Build

```
gulp build
```

### Setting Version

The commands below sets the version in package.json and creates a tag to push to the repository to create a release. Look at package.json to see which version it is on.

```
git add .
git commit -m "SOME_COMMENT_HERE"
git push

npm version *.*.* (Example: 3.5.0)

git push

git push --tags
```

## Example

<br />

Hooks are classes that are added to elements which hook the views to the page when the page is rendered. We also need to make sure to include the script tag with a type of module at the bottom of the page so it loads once the page has loaded. The html page can be any name as long as the procedure described is followed.

<br />

**Note:** Since views are rendered as html you can use native css and javascript. Below in the example, as well as in the package that can be downloaded, this is displayed.

### index.html
```html

<html>
    <head>
        <title>Jmfcool.js</title>
        <script>
            
            var example = example || {};

            example.init = function()
            {
                document.addEventListener('click', function()
                {
                    document.getElementsByTagName('h3')[0].innerHTML = 'Hello Jane Doe';
                });
            }

            window.addEventListener('load',example.init,false);

        </script>
        <style>

            h3 { margin-bottom: 0; }
            p { margin-top: 0; }

        </style>
    </head>
    <body>
        <div class="response-user"></div>
        <div class="response-item"></div>  
    </body>
    <script type="module" src="controller.js"></script>
</html>

```

<br />

Models are json objects that are utilized to build the tags when ran through the framework through dot notation. Using promises, setup included in the controller script, we can include multiple models. Models can be custom names the only requirement is that the json extension is used with the proper format.

### model.json
```json

{
	"user" : 
	{
		"firstName" : "John",
		"lastName" : "Doe"
	},
	"item" : 
	{
		"cost" : 18.5000,
		"name" : "Oranges"
	}
}

```

<br />

Views are used by utilizing tags that are replaced when accessing the objects from the assigned json file and then ran through the framework that places the proper information which replaces the tag and renders it to the page.

### user.view
```html

<div class="user">
	<h3>Hello ${user.firstName} ${user.lastName}</h3>
</div>

```
### item.view
```html

<div class="item">
	<p>Your price for ${item.name} is $${item.cost?currency}!</p>
</div>

```

<br />

The script starts by importing the jmfcool object from the jmfcool.js script. Then access the jmfcool.init method to run the internal methods. By using the jmfcool.model and jmfcool.view method we set callbacks to access the data. Lastly we call jmfcool.display to access the rendered view.

### controller.js
```javascript

import { jmfcool } from './jmfcool.min.js';

jmfcool.init()
{
    jmfcool.model('model.json', function(model)
    {
        jmfcool.view('user.view', function(view)
        {
            jmfcool.display({ view:view, model:model, hook:'response-user' });
        });
        jmfcool.view('item.view', function(view)
        {
            jmfcool.display({ view:view, model:model, hook:'response-item' });
        });
    });
};

```

<br />

The below results is the result of the views and the model being ran through the framework. Then it's rendered to the page through the hooks. The data is accessed using callbacks from the promises objects and passed to the render object which returns the parsed view and replaces the tags with the information in the models objects.

### Results
```

	Hello John Doe

	Your price for Oranges is $18.50!

```
