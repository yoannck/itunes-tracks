#!/usr/bin/env osascript

tell application "iTunes"
	set results to (every file track of playlist "Library")

	set serialized to {}

	repeat with result in results
    tell result to set comment to (its location as text)
    set a to comment of result
    set posix to POSIX path of a
		set serialized to serialized & {"{TRACK}", name of result, track number of result, artist of result, album of result, year of result, duration of result, time of result, date added of result, modification date of result, genre of result, kind of result, rating of result, bpm of result, comment of result, posix}
	end repeat
	return serialized
end tell
