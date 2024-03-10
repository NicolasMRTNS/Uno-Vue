import { CardColorEnum } from '@/enums/CardColorEnum'
import { CardValueEnum } from '@/enums/CardValueEnum'
import { Card } from '@/models/Card'
import { getRandomEnumValue } from './EnumUtils'

export const cardValueCheckToBePlaced = [
  CardValueEnum.Zero,
  CardValueEnum.One,
  CardValueEnum.Two,
  CardValueEnum.Three,
  CardValueEnum.Four,
  CardValueEnum.Five,
  CardValueEnum.Six,
  CardValueEnum.Seven,
  CardValueEnum.Eight,
  CardValueEnum.Nine,
  CardValueEnum.Draw2,
  CardValueEnum.Reverse,
  CardValueEnum.Skip
]

export const getRandomCard = (): Card => {
  const cardValue = getRandomEnumValue(CardValueEnum)
  const cardColor = getRandomEnumValue(CardColorEnum)
  return new Card(cardValue, cardColor)
}
