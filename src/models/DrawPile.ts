import { game } from './Game'
import { getRandomCard } from '@/utils/CardUtils'

export class DrawPile {
  /**
   * Function to draw cards from the deck when we can't play with the cards in hand.
   *
   * @param numberOfCardsToDraw The number of cards to draw, can be 1 (default), 2 or 4 (card effect)
   */
  draw(numberOfCardsToDraw: number = 1) {
    const activePlayer = game.activePlayer
    for (let i = 0; i < numberOfCardsToDraw; i++) {
      const newCard = getRandomCard()
      activePlayer.cards.push(newCard)
    }
  }
}
