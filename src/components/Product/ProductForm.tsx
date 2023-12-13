import { FormEvent } from 'react';

interface Props {
  onSubmit: (formData: FormData) => void
}

export default function ProductForm({ onSubmit }: Props) {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(event.currentTarget)

    onSubmit(formData)
    form.reset()
  }

  return (
    <div className="flex items-center justify-center h-screen bg-slate-100 dark:bg-[#0d1119]">
      <form onSubmit={handleSubmit} className="p-6 max-w-sm w-full bg-slate-50 dark:bg-[#0d1117] shadow-md rounded-md">
        <h1 className="text-center mb-4 text-xl font-bold">Add Product to List</h1>
        <div className="flex flex-col items-center space-y-2">
          <input type="text" name="itemName" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" placeholder="Enter Item Name" />
          <input type="text" name="link" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" placeholder="Enter link" />
          <input type="number" name="price" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" placeholder="Enter price" />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 rounded-md text-white text-sm mt-4">Submit</button>
      </form>
    </div>
  )
}
