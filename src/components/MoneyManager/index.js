import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    transactionList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteTransactionList = id => {
    const {transactionList} = this.state
    const updatedTransactionList = transactionList.filter(
      eachTransaction => id !== eachTransaction.id,
    )

    this.setState({
      transactionList: updatedTransactionList,
    })
  }

  submitFormDetails = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeValue = transactionTypeOptions.find(
      eachOption => eachOption.optionId === optionId,
    )
    const {displayText} = typeValue
    const newList = {
      id: uuidv4(),
      titleInput,
      amountInput: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newList],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  changeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  changeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amountInput
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {transactionList} = this.state

    let incomeAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amountInput
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionList} = this.state

    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amountInput
      } else {
        expensesAmount += eachTransaction.amountInput
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  render() {
    const {optionId, titleInput, amountInput, transactionList} = this.state
    const BalanceAmount = this.getBalance()
    const IncomeAmount = this.getIncome()
    const ExpensesAmount = this.getExpenses()
    console.log(transactionList)
    return (
      <div className="manager-container">
        <div className="money-container">
          <h1 className="name">Hi, Richard</h1>
          <p className="greet">
            Welcome back to your <span className="app-name">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          BalanceAmount={BalanceAmount}
          IncomeAmount={IncomeAmount}
          ExpensesAmount={ExpensesAmount}
        />
        <div className="input-container">
          <div className="form-container">
            <h1 className="add-transaction">Add Transaction</h1>
            <form className="input-form" onSubmit={this.submitFormDetails}>
              <label htmlFor="title" className="label-name">
                TITLE
              </label>
              <input
                id="title"
                placeholder="TITLE"
                className="input-style"
                value={titleInput}
                onChange={this.changeTitleInput}
              />
              <label htmlFor="amount" className="label-name">
                AMOUNT
              </label>
              <input
                id="amount"
                placeholder="AMOUNT"
                className="input-style"
                value={amountInput}
                onChange={this.changeAmountInput}
              />
              <label htmlFor="type" className="label-name">
                TYPE
              </label>
              <select
                className="input-style"
                value={optionId}
                onChange={this.onChangeOptionId}
              >
                {transactionTypeOptions.map(eachType => (
                  <option key={eachType.optionId} value={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="add-transaction">History</h1>
            <div className="transaction-container">
              <ul className="list-container">
                <li className="table-header">
                  <p className="row-name">Title</p>
                  <p className="row-name">Amount</p>
                  <p className="row-name">Type</p>
                </li>
                {transactionList.map(eachList => (
                  <TransactionItem
                    eachList={eachList}
                    key={eachList.id}
                    deleteTransactionList={this.deleteTransactionList}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
