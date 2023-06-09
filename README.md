# EC MAP

A single page solution to allow an Emergency Controller to have a map of a race circuit and be able to track where vehicles are deployed or incidents have occured.

Intended to be self-contained (downloadable) for use at locations with poor web access, though there is a [hosted, fully usable version](https://obm.one/ec_map/) which you are welcome to use/play with (any data is stored locally in your browser). Because it is designed as a progressive web app, you can bookmark the sample site (make sure it includes the _index.html_ part) and should still be able to access it offline.


# Usage

To use: *_simply open the page_*.
- Defaults to first circuit in the list, or last one used, or you can select a circuit to display from the drop-down
- Add a unit either by clicking or drag and drop. Call signs must be unique (within unit type).
- To show a vehicle is dispatched but not yet on-scene, click to turn on a 'crawling border' animation (automatically turns on when dragged). Click to toggle animation off again.
- To rename a unit, double-click on it.
- To delete a unit either right click, or drag to the trash can (confirmation before delete).
- Saves are made every time you move to add/remove a unit (so can close and reopen browser without losing locations), and are reloaded automtically.
- From the pop-up menu you can:
  - Save a "Home" configuration which can be loaded at the start of day to show units in default positions (there are confirmations before save or load)
  - Export, and import, unit locations in case you need to clear browser storage (or move config to a new machine)
- Saved data (location and 'home' positions) are saved per circuit so you can maintain more than one layout
- Help button basically shows these instructions

Primarily designed for desktop/laptop, though most functionality will work on iPad (not recommended/tested on phone sized devices). Due to default iPadOS behaviour, dragging of icons onto the map isn't supported, but dragging deployed units either by finger or pencil should work fine.


# Config

To add a new circuit, edit the config.js file, and add a new name/image pair to the circuits array, and place the track image in the tracks folder. To update the hosted version (and include it here), upload the image (recommend landscape aspect ratio, at least 1000px wide, and as clear as possible) as an issue along with the track name and I'm happy to add it.
To change layout colors etc you can edit the CSS variable substitutions in the same file.

# Demo

[Live version](https://obm.one/ec_map/) - fully functional, and safe to play with as all data is stored locally in your browser. Submit an issue as per the config above if you want me to add your circuit.

# To Do

Changes are currently largely driven by my direct users, but happy to accept changes/improvements of course!

*Currently planning:*
- lots of code tidy-up (most of this was written while working alongside the EC in race control during an event!)
- better Map images
- export/import needs validation to make sure file doesn't get damanged and break things.

*Considering:*
- allow more than one home config per circuit (need to name them) for (eg) sprints, small, and major race meetings.
- log of events (race start, chequered flag, vehicle dispatched, vehicle on scene)
- work out a way to drag icons onto map on iPadOS! Because they are images currently, iOS tries to be helpful ;)

*Dream:*
- track GPS coordinates of emergency units and show where they are as well as where they've been dispatched to
- realtime sharing / multi-user support
    - display only client for, eg Clerk of Course
    - multi-update client so any user can dispatch a vehicle

# Credits

- Icons sourced from [FlatIcon.com](https://www.flaticon.com/)
- iPad Drag'n'drop events (https://stackoverflow.com/a/8826958/1569675) and (https://gist.github.com/attenzione/7098476)
