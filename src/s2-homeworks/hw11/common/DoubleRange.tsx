import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react'

type PropsType = {
  minValue: number
  maxValue: number
  setMaxValue: (maxValue: number) => void
  setMinValue: (minValue: number) => void
}

export const DoubleRange = (props: PropsType) => {
  return (
    <>
      <MultiRangeSlider
        min={0}
        max={100}
        step={1}
        canMinMaxValueSame={true}
        minValue={props.minValue}
        maxValue={props.maxValue}
        onInput={(e: ChangeResult) => {
          props.setMaxValue(e.maxValue)
          props.setMinValue(e.minValue)
        }}
        label={false}
        ruler={false}
        style={{ border: 'none', boxShadow: 'none', width: '148px' }}
        barRightColor='green'
        thumbLeftColor='lime'
        thumbRightColor='lime'
      />
    </>
  )
}
