import {
  ClipboardIcon,
  ArrowUpRightIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

type InputProps = {
  id: string;
  title: string;
  placeholder: string;
  value?: string;
  error?: string | null;
};

export function Input({ id, title, placeholder, error }: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {title}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          type="text"
          name={id}
          id={id}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          placeholder={placeholder}
        />
        {error ? (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        ) : null}
      </div>
      {error ? (
        <p className="mt-1 text-sm text-red-600" id="email-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function AddonInput({
  id,
  title,
  placeholder,
  value,
  error,
}: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {title}
      </label>
      <div className="mt-1 relative flex rounded-md shadow-sm border border-gray-300  focus-within:border-primary focus-within:ring-primary focus-within:ring-1">
        <span className="inline-flex items-center pl-3 pr-0 text-gray-500">
          cos.cx/
        </span>
        <input
          type="text"
          name={id}
          id={id}
          className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 pr-3 pl-0 py-2  focus:ring-0"
          placeholder={placeholder}
          defaultValue={value}
        />
        {error ? (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        ) : null}
      </div>
      {error ? (
        <p className="mt-1 text-sm text-red-600" id="email-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type ClipboardInputProps = {
  id: string;
  title: string;
  value: string;
};

export function ClipboardInput({ id, title, value }: ClipboardInputProps) {
  async function copyToClipboard(value: string): Promise<void> {
    // HOTFIX: Replace cos.cx with current domain until short domain
    const url = value.replace("cos.cx", window.location.origin);
    await navigator.clipboard.writeText(url);
  }

  function openToOrigin(value: string): void {
    // HOTFIX: Replace cos.cx with current domain until short domain
    const url = value.replace("cos.cx", window.location.origin);
    window.open(url, "_blank");
  }

  return (
    <div>
      <div className="flex justify-between">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {title}
        </label>
        <span className="text-sm text-gray-500">
          <button
            type="button"
            onClick={() => openToOrigin(value)}
            className="group relative mr-2 rounded-md inline-block focus:outline-none focus:ring-0"
            title="Open link in new tab"
          >
            <ArrowUpRightIcon
              className="h-4 w-4 text-gray-700 group-hover:text-primary group-focus:text-primary"
              aria-hidden="true"
            />
          </button>
        </span>
      </div>
      <div className="relative mt-1">
        <input
          type="text"
          name={id}
          id={id}
          className="block w-full rounded-md truncate pr-9 border-gray-300 shadow-sm focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500"
          defaultValue={value}
          disabled
          title={value}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            type="button"
            className="group relative m-1 p-2 rounded-md focus:outline-none focus:ring-0 "
            onClick={() => copyToClipboard(value)}
            title="Copy to clipboard"
          >
            <ClipboardIcon
              className="h-5 w-5 text-gray-700 group-hover:text-primary group-focus:text-primary"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
