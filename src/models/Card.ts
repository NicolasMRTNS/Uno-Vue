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

  canBePlaced(currentCardPlaced: Card) {
    if (cardValueCheckToBePlaced.includes(currentCardPlaced.value)) {
      return this.value === currentCardPlaced.value || this.color === currentCardPlaced.color
    }
    return true
  }

  cardEffect() {
    // TODO: implement
  }
}
