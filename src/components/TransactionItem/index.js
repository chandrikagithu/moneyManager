// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachList, deleteTransactionList} = props

  const {titleInput, amountInput, type, id} = eachList

  const deleteOption = () => {
    deleteTransactionList(id)
  }

  return (
    <li className="transaction-history-list">
      <p className="amount-text">{titleInput}</p>
      <p className="amount-text">{amountInput}</p>
      <p className="amount-text">{type}</p>
      <button
        type="button"
        className="delete-button"
        onClick={deleteOption}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}
export default TransactionItem
