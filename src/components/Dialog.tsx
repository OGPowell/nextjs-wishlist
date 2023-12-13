"use client"

type Props = {
    title: string,
    onClose: () => void,
    onOk: () => void,
    children: React.ReactNode,
}

export default function Dialog({ title, onClose, onOk, children }: Props) {
    const closeDialog = () => {
        onClose()
    }

    const clickOk = () => {
        onOk()
        closeDialog()
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="w-[500px] max-w-full bg-gray-200 dark:bg-gray-900 flex flex-col rounded-xl z-20">
                <div className="flex justify-between items-center p-5">
                    <h1 className="text-2xl">{title}</h1>
                    <button
                        onClick={closeDialog}
                        className="py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold text-white"
                    >x</button>
                </div>
                <div className="flex items-center justify-center px-5 pb-6">
                    {children}
                </div>
                <div className="px-5 pb-6">
                    <div className="flex flex-row justify-end mt-2">
                        <button
                            onClick={clickOk}
                            className="bg-purple-600 hover:bg-purple-700 py-1 px-2 rounded border-none"
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}