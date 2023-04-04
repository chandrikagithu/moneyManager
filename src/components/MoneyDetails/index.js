// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {BalanceAmount, IncomeAmount, ExpensesAmount} = props

  return (
    <div className="money-detail-container">
      <div className="account-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div className="amount">
          <p className="your">Your Balance</p>
          <p className="rupees" data-testid="balanceAmount">
            Rs {BalanceAmount}
          </p>
        </div>
      </div>
      <div className="account-container image2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div className="amount">
          <p className="your">Your Income</p>
          <p className="rupees" data-testid="incomeAmount">
            Rs {IncomeAmount}
          </p>
        </div>
      </div>
      <div className="account-container image3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div className="amount">
          <p className="your">Your Expenses</p>
          <p className="rupees" data-testid="expensesAmount">
            Rs {ExpensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
