# EC MAP

A single page solution to allow an Emergency Controller to have a map of a race circuit and be able to track where vehicles are deployed or incidents have occured.

Intended to be self-contained (downloadable) for use at locations with poor web access, though there is a [hosted usable sample](https://obm.one/ec_map/ec_map.html).


# Usage

To use simply open the page.
- Defaults to first circuit in the list, or lst one shown, or you can select a circuit to display from the drop-down
- Add a unit either by clicking or drag and drop. Call signs must be unique.
- To rename a unit, double-click on it.
- To delete a unit either right click, or drag to the trash can (confirmation before delete).
- Saves are made every time you move to add/remove a unit (so can close and reopen browser without losing locations) and are specific to the circuit shown
- You can save a "Home" configuration which can be loaded at the start of day to show units in default positions (there are confirmations before save or load)
- Help button basically shows these instructions

Primarily designed for desktop, though most functionality will work on iPad (not recommended/tested on phone sized devices). Due to default iPadOS behaviour, dragging of icons onto the map isn't supported, but dragging units eithr by finger or pencil should work fine.


# Config

To add a new circuit, edit the config.js file, and add a new name/image pair to the circuits array, and place the track image in the tracks folder.
To change layout colors etc you can edit the CSS variable substitutions in the same file.

# To Do

Changes are currently largely driven by my direct users, but happy to accept changes/improvements of course!

*Currently planning:*
- visual distinction between 'dispatched' and 'on scene'
- lots of code tidy-up (most of this was written sat in race control during an event!)

*Considering:*
- log of events (race start, chequered flag, vehicle dispatched, vehicle on scene)

# Credits

- Icons sourced from [FlatIcon.com](https://www.flaticon.com/)
- iPad Drag'n'drop events (https://stackoverflow.com/a/8826958/1569675) and (https://gist.github.com/attenzione/7098476)
