# itunes-tracks

Module to get list of tracks objects from local iTunes library. (only macosx)
If the share xml itunes exists, get informations from it.
Else get informations with applescript.

#Basic Example

```javascript
var itunes = require("itunes-tracks");

itunes.list(function(results) {
  // do something with your array results
})
```

#Create the share xml itunes

```javascript
var itunes = require("itunes-tracks");

// Force the creation of the xml itunes
itunes.config();
```

## Install

Run `npm install git://github.com/yoannck/itunes-tracks.git`
