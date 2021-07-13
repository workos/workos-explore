import React from 'react'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid'

export default class Alert extends React.Component {
  render() {
    const icon = this.props.sentMagicLink ? (
      <CheckCircleIcon className="h-5 w-5 text-green-400" />
    ) : (
      <XCircleIcon className="h-5 w-5 text-red-400" />
    )

    const color = this.props.sentMagicLink ? 'green' : 'red'

    return (
      <div className={this.props.message ? 'block' : 'hidden'}>
        <div className={`mb-6 rounded-md bg-${color}-50 p-4`}>
          <div className="flex">
            <div className="flex-shrink-0">{icon}</div>
            <div className="ml-3">
              <p className={`text-sm font-medium text-${color}-800`}>{this.props.message}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
