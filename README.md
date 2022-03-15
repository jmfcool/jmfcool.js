# Jmfcool.js · ![GitHub](https://img.shields.io/github/license/jmfcool/jmfcool.js?color=blue) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/jmfcool/jmfcool.js) ![GitHub all releases](https://img.shields.io/github/downloads/jmfcool/jmfcool.js/total?color=green)

Jmfcool.js is a framework which allows users to create views while connecting models.

The controller starts out by importing the jmfcool object from the parser.js script. Then include the controller object with its methods to load the views and the models by utilizing promises. Using callbacks we assign the data from the requests. Make sure to end the script by initializing the object and binding it to the window object.

## controller.js

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
