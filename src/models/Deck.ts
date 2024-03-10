import { game } from './Game'
import { getRandomCard } from '@/utils/CardUtils'

export class Deck {
  draw(numberOfCardsToDraw: number = 1) {
    const activePlayer = game.activePlayer
    for (let i = 0; i < numberOfCardsToDraw; i++) {
      const newCard = getRandomCard()
      activePlayer.cards.push(newCard)
    }
  }
}
