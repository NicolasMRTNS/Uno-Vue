import { getRandomCard } from '@/utils/CardUtils'
import { Card } from './Card'

export class DiscardPile {
  cardsOnPile: Array<Card>
  activeCard: Card

  constructor() {
    this.cardsOnPile = new Array(getRandomCard())
    this.activeCard = this.cardsOnPile[0]
  }

  getCardsOnPile(): Array<Card> {
    return this.cardsOnPile
  }

  addCardsToPile(card: Card): void {
    this.cardsOnPile.push(card)
    if (this.cardsOnPile.length > 5) {
      this.cardsOnPile.unshift()
    }
    this.setActiveCard()
  }

  getActiveCard(): Card {
    return this.activeCard
  }

  setActiveCard(): void {
    this.activeCard = this.cardsOnPile[this.cardsOnPile.length - 1]
  }
}
