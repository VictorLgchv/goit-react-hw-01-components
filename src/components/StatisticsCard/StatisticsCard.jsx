import PropTypes from 'prop-types'
import { ItemLabel, ItemPercentage } from './StatisticsCard.styled'

export const StatisticsCard = ({ item: {label, percentage} }) => {
  return (
    <>
    <ItemLabel>{label}</ItemLabel>
    <ItemPercentage>{percentage}%</ItemPercentage>
    </>
  )
}

StatisticsCard.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
}