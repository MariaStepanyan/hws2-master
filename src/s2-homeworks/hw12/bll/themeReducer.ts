export type initStatetype = {
  themeId: number
}

const initState = {
  themeId: 1,
}

export const themeReducer = (
  state = initState,
  action: ChangeThemeIdType
): initStatetype => {
  // fix any
  switch (action.type) {
    case 'SET_THEME_ID':
      return { ...state, themeId: action.id }
    // дописать

    default:
      return state
  }
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({
  type: 'SET_THEME_ID',
  id,
}) // fix any

type ChangeThemeIdType = {
  type: 'SET_THEME_ID'
  id: number
}
