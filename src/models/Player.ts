import type { Card } from './Card'

export class Player {
  name: string
  activeTurn: boolean
  cards: Array<Card>

  constructor(name: string, activeTurn: boolean, cards: Array<Card>) {
    this.name = name
    this.activeTurn = activeTurn
    this.cards = cards
  }

  setActiveTurn(active: boolean): void {
    this.activeTurn = active
  }
}
