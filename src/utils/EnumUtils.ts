export const getRandomEnumValue = <T>(anEnum: T): T[keyof T] => {
  const enumValues = Object.values(anEnum as Record<string, T[keyof T]>)
  const randomIndex = Math.floor(Math.random() * enumValues.length)
  return enumValues[randomIndex]
}
