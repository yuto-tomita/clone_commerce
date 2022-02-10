const RADIO_VALUES = {
  MALE: 1,
  FEMALE: 2,
  NO_ANSWER: 3
} as const

export const RADIO_OPTION = [
  {
    value: RADIO_VALUES.MALE,
    text: '男性'
  },
  {
    value: RADIO_VALUES.FEMALE,
    text: '女性'
  },
  {
    value: RADIO_VALUES.NO_ANSWER,
    text: '無回答'
  }
]

export type RADIO_VALUES_ENUM =
  typeof RADIO_VALUES[keyof typeof RADIO_VALUES]
