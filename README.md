# itunes-tracks

Module to get list of tracks objects from local iTunes library. (only macosx)

Detect if the share xml itunes exists and get informations from it. Else get informations with applescript.

#Basic Example

```javascript
var itunes = require("itunes-tracks");

itunes.list(function(results) {
  // do something with your array results
})
```

#Create the share xml itunes automatically

permisson required: Settings Mac / Security & Privacy / Accessibility / enable Checkbox Terminal.

```javascript
// Force the creation of the xml itunes
itunes.config();
```

#Create the share xml itunes by yourself

Go to the iTunes preferences / 'Advanced' Tab / enable the checkbox 'Share iTunes Library XML with other applications'

## Install

Run `npm install --save itunes-tracks`
