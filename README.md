# Tournament-components
UI components for the [tournament module](https://github.com/clux/tournament) relying on the [polymer library](http://www.polymer-project.org/).

In development. Feel free to help out.

## Installation
This package is only registered on `bower` at the moment (under the same name).

That said, `package.json` is there to leverage the power of npm's dependency resolution and scripts engine.

## Usage
The `match.html` file contains the base match component which is included by all the other components.

Pop `match.html`, `duel.html`, `polymer.min.js` and `polymer.min.js.map` into your static resouces directory and import them all into your document via:

```
<script src="./polymer.min.js" debug></script>
<link rel="import" href="./duel.html">
```

Then use a script like the following to attach a tournament to the tag.

```js
var trn = require('tournament'); // browserify -r tournament > bundle.js
var players = ['NONE', 'a', 'b', 'c', 'd', 'e', 'f', 'g'];
var size = players.length - 1;
// don't count 'none' lookup so - 1

var d = new trn.Duel(size, trn.WB, {short: true}); // no bronze final
players[trn.WO] = 'WALKOVER'; // string key '-1' (want to use this as an object)

d.matches.forEach(function (m) {
  m.idStr = trn.Duel.idString(m.id); // for a temporary shitty representation
});

// Create the duel-tournament tag and attach the data to it
var duel = document.createElement('duel-tournament');
duel.matches = d.matches;
duel.players = players;
document.body.appendChild(duel); // attach it to the DOM
```

## Running tests
Install development dependencies and prepare scripts:

```bash
$ npm install
$ npm run-script build
$ bower install
```

Then (python) SimpleHttpServer or (npm) `serve` up the folder, then navigate to localhost:8000 and verify that everything looks correct and check the console for tape output to see if the tests pass.

Until you can querySelector into the shadow DOM, it's hard to test the visual stuff..
This setup will likely change if I can find a better way of doing it.


## License
MIT-Licensed. See LICENSE file for details.
