import { CardValueEnum } from '@/enums/CardValueEnum'
import { Card } from './Card'
import { Player } from './Player'
import { CardColorEnum } from '@/enums/CardColorEnum'
import { DrawPile } from './DrawPile'
import { DiscardPile } from './DiscardPile'

export class Game {
  numberOfPlayers: number
  players: Array<Player>
  activePlayer: Player
  drawPile: DrawPile
  discardPile: DiscardPile

  constructor(numberOfPlayers: number, players: Array<Player>, activePlayer: Player) {
    this.numberOfPlayers = numberOfPlayers
    this.players = players
    this.activePlayer = activePlayer
    this.drawPile = new DrawPile()
    this.discardPile = new DiscardPile()
  }

  /**
   * Get the next player to play
   *
   * @param skipOneTurn Whether we need to skip the next player (card effect)
   * @returns The next Player to play
   */
  getNextPlayer(skipOneTurn: boolean): Player {
    let currentPlayerIndex = this.players.indexOf(this.activePlayer)
    if (skipOneTurn) {
      currentPlayerIndex += 2
    } else {
      currentPlayerIndex++
    }
    if (currentPlayerIndex >= this.players.length) {
      currentPlayerIndex = 0
    }
    return this.players[currentPlayerIndex]
  }

  /**
   * Set the next player to play
   *
   * @param skipOneTurn Whether we need to skip the next player (card effect)
   */
  setNextPlayer(skipOneTurn: boolean): void {
    this.activePlayer.setActiveTurn(false)
    const nextPlayer = this.getNextPlayer(skipOneTurn)
    nextPlayer.setActiveTurn(true)
    this.activePlayer = nextPlayer
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
