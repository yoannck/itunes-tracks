#!/usr/bin/env osascript

activate application "iTunes"
tell application "System Events"
    tell process "iTunes"
        keystroke "," using command down
        repeat until exists toolbar 1 of window 1
            delay 0.2
        end repeat
        tell window 1
            if title does not contain "Advanced" then
                click button "Advanced" of toolbar 1
                repeat until its title starts with "Advanced"
                    delay 0.2
                end repeat
            end if
            tell checkbox "Share iTunes Library XML with other applications" of group 1
                if value is not 1 then
                    click it
                end if
            end tell
            click button "OK"
        end tell
    end tell
end tell
