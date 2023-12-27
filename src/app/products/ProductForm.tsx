import { FormEvent } from 'react';

interface Props {
  onSubmit: (formData: FormData) => void;
  loading: boolean;
}

export default function ProductForm({ onSubmit, loading }: Props) {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);

    const link = formData.get('link') as string;

    try {
      new URL(link);
    } catch (_) {
      alert('Please enter a valid URL');
      return;
    }

    onSubmit(formData);
    form.reset();
  }

  return (
    <div className='flex items-center justify-center'>
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-sm rounded-md bg-light-foreground p-6 shadow-md dark:bg-dark-foreground'
      >
        <h1 className='mb-4 text-center text-xl font-bold'>
          Add Product to List
        </h1>
        <div className='flex flex-col items-center space-y-2'>
          <input
            type='text'
            required
            name='itemName'
            className='w-full rounded border-2 border-gray-200 p-3 outline-none'
            placeholder='Enter Item Name'
          />
          <input
            type='text'
            required
            name='link'
            className='w-full rounded border-2 border-gray-200 p-3 outline-none'
            placeholder='Enter link'
          />
          <input
            type='number'
            required
            name='price'
            className='w-full rounded border-2 border-gray-200 p-3 outline-none'
            placeholder='Enter price'
          />
        </div>
        {loading ? (
          <button
            disabled
            className='bg-light-button dark:bg-dark-button py-2duration-200 mt-4 flex w-full justify-center rounded-md px-4 hover:scale-110 active:scale-100'
          >
            <svg className='... mr-3 h-5 w-5 animate-spin' viewBox='0 0 24 24'>
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
            Fetching Images
          </button>
        ) : (
          <button
            type='submit'
            className='bg-light-button dark:bg-dark-button mt-4 w-full rounded-md px-4 py-2 duration-200 hover:scale-110 active:scale-100'
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
}
