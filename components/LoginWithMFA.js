import React from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import Alert from './Alert'
import * as ReactDOM from 'react-dom';
import * as Label from '@radix-ui/react-label';

export default class LoginWithMFA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: '',
        }
      }

    handleTextChange = (e) => {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");
  
        let fieldIntIndex = parseInt(fieldIndex, 10);

        if (e.target.value.length <= 1) {
          this.setState({ value: e.target.value });
        }

        const nextfield = document.querySelector(
            `input[name=field-${fieldIntIndex + 1}]`
          );

        if (nextfield !== null) {
            nextfield.focus();
          }
      }
  render() {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-20 w-auto" src="/favicon.png" alt="HireOS" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Multi-Factor Enabled
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6">
              <div>
                <Label.Root htmlFor="email" className="block text-sm font-medium text-gray-700">
                 Enter Code
                </Label.Root>
                <input name="field-1" onChange={this.handleTextChange} />
                <input name="field-2" ref={c => this.nextComponent=c} onChange={this.handleTextChange}  />
                <input name="field-3" ref={c => this.nextComponent=c} onChange={this.handleTextChange}  />
                <input name="field-4" ref={c => this.nextComponent=c} onChange={this.handleTextChange}  />
                </div>
                <a href="/app">
              <div
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                <LockClosedIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Continue
                </div>
                </a>
            </form>
          </div>
          <div className="mt-4 text-center text-sm text-gray-600">
          <a href="/app/sso">
              <a className="font-medium text-blue-600 hover:text-blue-500">
                continue with SAML SSO
              </a>
            </a>
          </div>
        </div>
      </div>
    )
  } 
}
