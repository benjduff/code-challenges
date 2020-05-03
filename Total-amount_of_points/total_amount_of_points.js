let games = ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:1"];
console.log(points(games));

function points(games) {
    let home = 0;
  games.forEach(game => {
      x = game.charAt(0);
      y = game.charAt(2);

      if(x>y) home += 3;
      if(x == y) home++;
  });
  return home;
}