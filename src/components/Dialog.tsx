'use client';

type Props = {
  title: string;
  onClose: () => void;
  onOk: () => void;
  children: React.ReactNode;
};

export default function Dialog({ title, onClose, onOk, children }: Props) {
  const closeDialog = () => {
    onClose();
  };

  const clickOk = () => {
    onOk();
    closeDialog();
  };

  return (
    <div className='fixed inset-0 z-10 flex items-center justify-center'>
      <div className='fixed inset-0 bg-black opacity-50'></div>
      <div className='z-20 flex w-[500px] max-w-full flex-col rounded-xl bg-light-foreground dark:bg-dark-foreground'>
        <div className='flex items-center justify-between p-5'>
          <h1 className='text-2xl'>{title}</h1>
          <button
            onClick={closeDialog}
            className='h-8 w-8 cursor-pointer rounded border-none px-2 py-1 font-bold text-white'
          >
            x
          </button>
        </div>
        <div className='flex items-center justify-center px-5 pb-6'>
          {children}
        </div>
        <div className='px-5 pb-6'>
          <div className='mt-2 flex flex-row justify-end'>
            <button
              onClick={clickOk}
              className='bg-light-button dark:bg-dark-button rounded border-none px-2 py-1 duration-200 hover:scale-110 active:scale-100'
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
