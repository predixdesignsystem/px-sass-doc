#px-sass-doc

## Overview

px-sass-doc is a Predix UI component for displaying the Sass documentation for one of our Px design repositories.

## Usage

### Prerequisites
1. node.js
2. npm
3. bower
4. [webcomponents-lite.js polyfill](https://github.com/webcomponents/webcomponentsjs)

Node, npm and bower are necessary to install the component and dependencies. webcomponents.js adds support for web components and custom elements to your application.

## Getting Started

First, install the component via bower on the command line.

```
bower install px-sass-doc --save
```

Second, import the component to your application with the following tag in your head.

```
<link rel="import" href="/bower_components/px-sass-doc/px-sass-doc.html"/>
```

Finally, use the component in your application:

```
<px-sass-doc
  library-name="px-toggle-design"
  layer="objects"
  inuit-flags='["$inuit-enable-toggle--small","$inuit-enable-toggle--large","$inuit-enable-toggle--huge"]'
  style-variables='["$inuit-toggle-color","$inuit-toggle-background","$inuit-toggle-border"]'
  dependencies='["https://github.com/PredixDev/px-colors-design","https://github.com/PredixDev/px-defaults-design","https://github.com/PredixDev/px-helpers-design"]'>
</px-sass-doc>
```

<br />
<hr />

## Documentation

Read the full API and view the demo [here](https://predixdev.github.io/px-sass-doc).

The documentation in this repository is supplemental to the official Predix documentation, which is continuously updated and maintained by the Predix documentation team. Go to [http://predix.io](http://predix.io)  to see the official Predix documentation.


## Local Development

From the component's directory...

```
$ npm install
$ bower install
$ gulp sass
```

From the component's directory, to start a local server run:

```
$ gulp serve
```

Navigate to the root of that server (e.g. http://localhost:8080/) in a browser to open the API documentation page, with link to the "Demo" / working examples.

### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

<br />
<hr />

## Known Issues

Please use [Github Issues](https://github.com/PredixDev/px-sass-doc/issues) to submit any bugs you might find.
