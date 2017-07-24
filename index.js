var path = require('path');
var fs = require("fs");
var applescript = require("applescript");
var itunes = require("itunes-data");
var properties = [
  'name',
  'track',
  'artist',
  'album',
  'year',
  'duration',
  'time',
  'date',
  'modification',
  'genre',
  'kind',
  'rating',
  'bpm',
  'path',
  'posix'
];
//DEFAULT LOCATION FOR MACOSX
var location = path.resolve(process.env['HOME'], 'Music/iTunes/iTunes Music Library.xml');

/**
 * Itunes Tracks
 * Author : Yoann Chane Kive
 */
module.exports = {
  /**
   * FORCE itunes to share xml but requires accesibility.
   */
   config: function() {
     applescript.execFile(__dirname + "/itunes-config.applescript", [], function (err, raw) {
   	   if (err) { console.error(err); return; }
   	 });
   },

   /**
    * List tracks with applescript
    *
    * @param {Function} callback
    */
   listapp: function(callback) {
     applescript.execFile(__dirname + "/itunes-list.applescript", [], function (err, raw) {
       if (err) { console.error(err); return; }
       if (!raw || raw.length == 0) {
         callback([]);
         return;
   		  }
        var pipetracks = raw.join("     ").substring(7).split("{TRACK}");
        var results = [];
        pipetracks.forEach(function (pipetrack) {
          var result = {};
          pipetrack.trim().split("     ").forEach(function (field, i) {
            result[properties[i]] = field;
          })
          results.push(result);
        })
        callback(results);
      });
   },

   /**
    * List tracks with the sharing xml itunes from the default location
    *
    * @param {Function} callback
    */
   listxml: function(callback) {
     var results = [];
     var parser = itunes.parser(),
     stream = fs.createReadStream(location);
     parser.on("track", function(track) {
       results.push(track);
     });
     stream.on('end', function() {
       callback(results);
     });
     stream.pipe(parser);
   },

   /**
    * List tracks with detection
    *
    * @param {Function} callback
    */
   list: function(callback) {
     if (fs.existsSync(location)) {
       this.listxml(callback);
     } else {
       this.listapp(callback);
     }
   }
};
