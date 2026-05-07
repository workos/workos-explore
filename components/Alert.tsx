import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'

type AlertProps = {
  success: boolean | null
  message: string | null
}

export default function Alert({ success, message }: AlertProps) {
  const icon = success ? (
    <CheckCircleIcon className="h-5 w-5 text-green-400" />
  ) : (
    <XCircleIcon className="h-5 w-5 text-red-400" />
  )

  const color = success ? 'green' : 'red'

  return (
    <div className={message ? 'block' : 'hidden'}>
      <div className={`mb-6 rounded-md bg-${color}-50 p-4`}>
        <div className="flex">
          <div className="flex-shrink-0">{icon}</div>
          <div className="ml-3">
            <p className={`text-sm font-medium text-${color}-800`}>{message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
