import { CardValueEnum } from '@/enums/CardValueEnum'
import { Card } from './Card'
import { Player } from './Player'
import { CardColorEnum } from '@/enums/CardColorEnum'
import { Deck } from './Deck'

export class Game {
  numberOfPlayers: number = 2
  players: Array<Player>
  activePlayer: Player
  deck: Deck = new Deck()

  constructor(numberOfPlayers: number, players: Array<Player>, activePlayer: Player) {
    this.numberOfPlayers = numberOfPlayers
    this.players = players
    this.activePlayer = activePlayer
  }
}

const player1 = new Player('Player 1', true, [
  new Card(CardValueEnum.Five, CardColorEnum.red),
  new Card(CardValueEnum.Eight, CardColorEnum.yellow)
])
const player2 = new Player('Player 2', false, [
  new Card(CardValueEnum.One, CardColorEnum.red),
  new Card(CardValueEnum.Seven, CardColorEnum.yellow)
])

export const game = new Game(2, [player1, player2], player1)
