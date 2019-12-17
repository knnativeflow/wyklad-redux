import React from 'react'
import { connect } from 'react-redux'

const ChildComponent = ({ dispatch, value }) => {
  return (
    <section>
      <p>Wartość w komponencie dziecku: <span>{value}</span></p>
      <button onClick={() => dispatch({ type: 'increment' })}>Wincyj z dziecka</button>
    </section>
  )
}

const mapStateToProps = (state) => ({
  value: state.exampleValue
})
export default connect(mapStateToProps)(ChildComponent)
