import React, { useState } from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import { restoreState } from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
  const [timerId, setTimerId] = useState<number | undefined>(undefined)
  // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
  const [date, setDate] = useState<Date>(
    new Date(restoreState('hw9-date', Date.now()))
  )
  const [show, setShow] = useState<boolean>(false)

  const start = () => {
    stop()
    // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
    const id: number = window.setInterval(() => {
      setDate(new Date())
    }, 1000)
    setTimerId(id)
  }

  const stop = () => {
    clearInterval(timerId)
    setTimerId(undefined)
  }

  const onMouseEnter = () => {
    setShow(true)
  }
  const onMouseLeave = () => {
    setShow(false)
  }

  const stringTime = new Intl.DateTimeFormat('de-DE', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date) || <br />

  const stringDate = new Intl.DateTimeFormat('de-DE', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  }).format(date) || <br />

  const stringDay = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
  }).format(date) || <br />

  const stringMonth = new Intl.DateTimeFormat('en-US', {
    month: 'long',
  }).format(date) || <br />

  return (
    <div className={s.clock}>
      <div
        id={'hw9-watch'}
        className={s.watch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span id={'hw9-day'}>{stringDay}</span>, {' '}
        <span id={'hw9-time'}>
          <strong>{stringTime}</strong>
        </span>
      </div>

      <div id={'hw9-more'}>
        <div className={s.more}>
          {show ? (
            <>
              <span id={'hw9-month'}>{stringMonth}</span>, {' '}
              <span id={'hw9-date'}>{stringDate}</span>
            </>
          ) : (
            <>
              <br />
            </>
          )}
        </div>
      </div>

      <div className={s.buttonsContainer}>
        <SuperButton
          id={'hw9-button-start'}
          disabled={!!timerId}
          onClick={start}
        >
          start
        </SuperButton>
        <SuperButton id={'hw9-button-stop'} disabled={!timerId} onClick={stop}>
          stop
        </SuperButton>
      </div>
    </div>
  )
}

export default Clock
