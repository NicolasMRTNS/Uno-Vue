import type { CardColorEnum } from '@/enums/CardColorEnum'
import { CardValueEnum } from '@/enums/CardValueEnum'
import { cardValueCheckToBePlaced } from '@/utils/CardUtils'

export class Card {
  value: CardValueEnum
  color: CardColorEnum

  constructor(value: CardValueEnum, color: CardColorEnum) {
    this.value = value
    this.color = color
  }

  /**
   * Whether the card can be played
   *
   * @param currentCardPlaced The current card on the card pile
   * @returns a boolean
   */
  canBePlaced(currentCardPlaced: Card): boolean {
    if (cardValueCheckToBePlaced.includes(currentCardPlaced.value)) {
      return this.value === currentCardPlaced.value || this.color === currentCardPlaced.color
    }
    return true
  }

  cardEffect() {
    // TODO: implement
  }
}
