# EC MAP

A single page solution to allow an Emergency Controller to have a map of a race circuit and be able to track where vehicles are deployed or incidents have occured.

Intended to be self-contained (downloadable) for use at locations with poor web access, though there is a [hosted, fully usable version](https://obm.one/ec_map/) which you are welcome to use/play with (any data is stored locally in your browser). Because it is designed as a progressive web app, you can bookmark the sample site (make sure it includes the _index.html_ part) and should still be able to access it offline.


# Usage

To use simply open the page.
- Defaults to first circuit in the list, or 1st one shown, or you can select a circuit to display from the drop-down
- Add a unit either by clicking or drag and drop. Call signs must be unique.
- To show a vehicle is dispatched but not yet on-scene, click. Click to toggle animation off again
- To rename a unit, double-click on it.
- To delete a unit either right click, or drag to the trash can (confirmation before delete).
- Saves are made every time you move to add/remove a unit (so can close and reopen browser without losing locations), and are reloaded automtically.
- You can save a "Home" configuration which can be loaded at the start of day to show units in default positions (there are confirmations before save or load)
- Saved data (location and 'home' positions) are saved per circuit so you can maintain more than one layout
- Help button basically shows these instructions

Primarily designed for desktop, though most functionality will work on iPad (not recommended/tested on phone sized devices). Due to default iPadOS behaviour, dragging of icons onto the map isn't supported, but dragging deployed units either by finger or pencil should work fine.


# Config

To add a new circuit, edit the config.js file, and add a new name/image pair to the circuits array, and place the track image in the tracks folder. To update the hosted version (and include it here), upload the image as an issue along with the track name and I'm happy to add it.
To change layout colors etc you can edit the CSS variable substitutions in the same file.

# To Do

Changes are currently largely driven by my direct users, but happy to accept changes/improvements of course!

*Currently planning:*
- lots of code tidy-up (most of this was written sat in race control during an event!)

*Considering:*
- allow more than one home config per circuit (need to name them) for (eg) sprints, small, and major race meetings.
- log of events (race start, chequered flag, vehicle dispatched, vehicle on scene)
- work out a way to drag icons onto map on iPadOS!

*Dream:*
- track GPS coordinates of emergency units and show where they are as well as where they've been dispatched to

# Credits

- Icons sourced from [FlatIcon.com](https://www.flaticon.com/)
- iPad Drag'n'drop events (https://stackoverflow.com/a/8826958/1569675) and (https://gist.github.com/attenzione/7098476)
