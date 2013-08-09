var trn = require('tournament');
var test = require('tape');

test("duel", function (t) {
  var players = ['NONE', 'a', 'b', 'c', 'd', 'e', 'f', 'g'];
  var size = players.length - 1;
  // don't count 'none' lookup so - 1

  var d = new trn.Duel(size, trn.WB, {short: true}); // no bronze final
  players[trn.WO] = 'WALKOVER'; // string key '-1' (want to use this as an object)

  d.matches.forEach(function (m) {
    m.idStr = trn.Duel.idString(m.id); // for a temporary shitty representation
  });

  var duel = document.createElement('duel-tournament');
  duel.matches = d.matches;
  duel.players = players;
  document.body.appendChild(duel);

  // can't test rendering yet as you can't query within the Shadow DOM
  setTimeout(function () {
    t.equal(duel.brackets[0].rounds.length, 3, "3 rounds in WB");
    t.equal(duel.brackets[1].rounds.length, 0, "no bronze final");
    t.end();
  }, 200);
});
