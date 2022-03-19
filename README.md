# [Jmfcool.js](https://www.jmfcooljs.org) · ![GitHub](https://img.shields.io/github/license/jmfcool/jmfcool.js?color=blue) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/jmfcool/jmfcool.js?color=green)

### A framework which allows users to create views while connecting models.

<br />
The hooks are classes that are added to elements which hook the views to the page. We also need to make sure to include the script tag with a type of module at the bottom of the page.

### index.html
```html

<html>
	<head>
		<title>Jmfcool.js</title>
		<style>
			h2 span { font-weight: normal; font-style: italic; font-size: 18px; }
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
Models are json objects that are utilized to build the tags when ran through the parser script through dot notation. Using promises, setup included in the controller script, we can include multiple models. Models can be custom names the only requirement is that the json extension is used with the proper format.

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
Views are used by utilizing tags that are replaced when accessing the objects from the assigned json file and then ran through the parser that places the proper information which replaces the tag and renders it to the page.

### user.view
```html

<div class="user">
	<h3>Hello ${user.firstName} ${user.lastName}</h3>
</div>

```
### item.view
```html

<div class="item">
	<p>Your price for ${item.name} is $${item.cost?string.currency}!</p>
</div>

```

<br />
The controller starts out by importing the jmfcool object from the parser.js script. Then include the controller object with its methods to load the views and the models by utilizing promises. Using callbacks we assign the data from the requests. Make sure to end the script by initializing the object and binding it to the window object.

### controller.js
```javascript

import { jmfcool } from './parser.js';

var controller = {
	model : function(file, callback)
	{
		fetch(file).then(response => response.json()).then(data => callback(data));
	},
	hook : function(name)
	{
		return document.getElementsByClassName(name)[0];
	},
	view : function(file, callback)
	{
		fetch(file).then(response => response.text()).then(data => callback(data));
	},
	init : function()
	{
		var display, render;   

		controller.model('model.json', function(model)
		{
			controller.view('user.view', function(view)
			{
				display = controller.hook('response-user');
				render = jmfcool.parser.render({ view:view, model:model });
				display.innerHTML = render;
			});
			controller.view('item.view', function(view)
			{
				display = controller.hook('response-item');
				render = jmfcool.parser.render({ view:view, model:model });
				display.innerHTML = render;
			});
		});
	}
};

window.addEventListener("load",controller.init,false);

```

<br />
The below results is the result of the process that we have described above.

### Results
```

	Hello John Doe

	Your price for Oranges is $18.50!

```
