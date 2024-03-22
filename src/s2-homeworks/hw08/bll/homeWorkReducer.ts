import { UserType } from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  switch (action.type) {
    case 'sort': {
      const sortCallBack = (a: UserType, b: UserType) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      // by name
      return action.payload === 'up'
        ? [...state].sort(sortCallBack)
        : [...state].sort(sortCallBack).reverse()
    }
    case 'check': {
      return state.filter((user) => user.age >= action.payload)
    }
    default:
      return state
  }
}
