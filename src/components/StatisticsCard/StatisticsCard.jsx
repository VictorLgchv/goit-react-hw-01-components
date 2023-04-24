import PropTypes from 'prop-types'
import { ItemLabel, ItemPercentage } from './StatisticsCard.styled'

export const StatisticsCard = ({ item: {label, percentage} }) => {
  return (
    <>
    <ItemLabel className="item__label">{label}</ItemLabel>
    <ItemPercentage className="item__percentage">{percentage}%</ItemPercentage>
    </>
  )
}

StatisticsCard.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
}