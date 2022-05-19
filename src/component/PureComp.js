import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('Pure Component Render')
    return (
      <div>PureComp</div>
    )
  }
}

export default PureComp