import { Icon } from '@mui/material'
import React from 'react'

// добавить в проект иконки и импортировать
const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--]'

export type SuperSortPropsType = {
  id?: string
  sort: string
  value: string
  onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
  if (sort !== down && sort !== up) {
    return down
  } else if (sort === down) {
    return up
  } else {
    return ''
  }
}

const SuperSort: React.FC<SuperSortPropsType> = ({ sort, value, onChange, id = 'hw15' }) => {
  const up = '0' + value
  const down = '1' + value

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up))
  }

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon

  return (
    <span id={id + '-sort-' + value} onClick={onChangeCallback}>
      <Icon color={'secondary'} fontSize={'medium'} id={id + '-icon-' + sort} />
      {/*сделать иконку*/}
      {/*<img*/}
      {/*    id={id + '-icon-' + sort}*/}
      {/*    src={icon}*/}
      {/*/>*/}
      {/* {icon} а это убрать */}
    </span>
  )
}

export default SuperSort
