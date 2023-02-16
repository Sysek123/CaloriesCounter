import PropTypes from 'prop-types'
import Button from './Button'

const Bottom = ({ kcal, range, onAdd, showAdd, title, onAdda, showAdda}) => {
  return (
    <header className='header'>
        <h3>{title}</h3>
        <p>{kcal} / {range}</p>
        <Button onClick={onAdda} color={showAdda ? 'red' : 'green'} text={showAdda ? 'Close' : '+'} />
        <Button color={showAdd ? 'red' : 'green'} onClick={onAdd} text={showAdd ? 'Close' : 'Add Goal'} />

    </header>
  )
}

Bottom.defaultProps = {
  title: "Total calories",
}

Bottom.propTypes = {
  title: PropTypes.string.isRequired
}

export default Bottom