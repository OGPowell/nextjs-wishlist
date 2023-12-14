import { FormEvent } from 'react';

interface Props {
  onSubmit: (formData: FormData) => void,
  loading: boolean
}

export default function ProductForm({ onSubmit, loading }: Props) {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(event.currentTarget)

    const link = formData.get('link') as string;

    try {
      new URL(link);
    } catch (_) {
      alert('Please enter a valid URL');
      return;
    }

    onSubmit(formData)
    form.reset()
  }

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit} className="p-6 max-w-sm w-full bg-slate-50 dark:bg-[#0d1117] shadow-md rounded-md">
        <h1 className="text-center mb-4 text-xl font-bold">Add Product to List</h1>
        <div className="flex flex-col items-center space-y-2">
          <input type="text" required name="itemName" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue-500" placeholder="Enter Item Name" />
          <input type="text" required name="link" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue-500" placeholder="Enter link" />
          <input type="number" required name="price" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue-500" placeholder="Enter price" />
        </div>
        {loading ?
          (
            <button
              disabled
              className="w-full flex justify-center py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm mt-4"
            >
              <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Fetching Images
            </button>
          ) : (
            <button type="submit" className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm mt-4"
            >
              Submit
            </button>
          )}
      </form>
    </div >
  )
}
