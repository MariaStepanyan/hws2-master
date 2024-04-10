import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={[
        {
          width: '148px',
          color: 'rgb(0, 204, 34)',
        }, // стили для слайдера // пишет студент
      ]}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  )
}

export default SuperRange
