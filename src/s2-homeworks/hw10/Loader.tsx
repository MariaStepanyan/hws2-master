import s from './Loader.module.css'
import loader from './loader.gif'

export const Loader = () => {
  return (
    <div className={s.loader}>
      <img src={loader} />
    </div>
  )
}
