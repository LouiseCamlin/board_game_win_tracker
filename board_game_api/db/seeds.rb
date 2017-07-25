Win.delete_all
Game.delete_all
Player.delete_all


player1 = Player.create({name: "Louise"})
player2 = Player.create({name: "Paddy"})

game1 = Game.create({title: "Five Tribes" })
game2 = Game.create({title: "Machi Koro"})
game3 = Game.create({title: "Twilight Struggle"})

Win.create({player: player1, game: game1, date: "2017-03-23"})
Win.create({player: player2, game: game2, date: "2017-01-14"})
Win.create({player: player2, game: game3, date: "2017-05-18"})
