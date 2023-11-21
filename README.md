# random-link.js

A fun little script to add a random link to your site. 

It was built with the idea of having a big list of blogs/websites, and then this script picking out a random link and showing it on the page.

## Usage

First of all, you need your website data in a json file. (Refer to [example-data.json](example-data.json) for an example list)

Essentially, it's an array of JSON objects that have both a title and a url.

It looks something like this:

```json
[
	{
		"title": "Example Blog",
		"url": "https://blog.com"
	}
]
```

Then you'll need to make sure that the `random-link.js` script is loaded, adding `defer` so that it is executed once the page has finished loading:

```js
<script src="random-link" defer></script>
```

Then add any HTML element with the class `random-link`. The script will then build a simple link element and add it as a child element:

```html
<h3>Random Website</h3>
<p class="random-link" data-file="data.json"></p>
```

You will, of course, need to provide the location of the blogroll JSON data file. This should be provided via a `data-file` attribute.

And if you want to provide your own title for the link, you can use the `data-custom-title` attribute like so:

```html
<h3>Random Website</h3>
<p class="random-link" data-custom-title="Random Website" data-file="data.json"></p>
```


