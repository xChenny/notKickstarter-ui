import React, {Component} from 'react'

class Ledger extends Component {

  // mouseOn(e) {
    
  // }

  // mouseLeave(e) {

  // }

  render() {
    const active = 'is-active'
    return (
      <table class="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount In/Out</th>
            <th>Balance</th>
            <th>Progress</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Date</th>
            <th>Amount In/Out</th>
            <th>Balance</th>
            <th>Progress</th>
            <th>Reason</th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>10-23-2018</td>
            <td>+100</td>
            <td>$100</td>
            <td>100 / 500K</td>
            <td>Donated by John Smith</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Ledger