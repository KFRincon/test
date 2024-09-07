import { RadixView } from '@/components/radix_riew'
import { ViewOptions } from '@/components/view_options'
import { PlusCircleIcon } from 'lucide-react'
import { Plus, PaperclipIcon, AtSign, ArrowUp } from 'lucide-react'

export default function NamePage() {
    return (
        <div>
            <RadixView
                open_icon={<PlusCircleIcon />}
                use_button_text={true}
                open_button_text="ABRIR"
                title="Hola este es el dialogo"
            >
                <div className="bg-[#191919] text-white min-h-screen p-4">
                    <div className="max-w-3xl mx-auto">
                        {/* Page Controls */}
                        <div className="flex flex-wrap justify-start items-center mb-4 text-gray-400">
                            <button className="flex items-center px-2 py-1 mr-2 rounded hover:bg-gray-700">
                                <svg className="w-4 h-4 mr-2" viewBox="0 0 14 14" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7 0c3.861 0 7 3.139 7 7s-3.139 7-7 7-7-3.139-7-7 3.139-7 7-7zM3.561 5.295a1.027 1.027 0 1 0 2.054 0 1.027 1.027 0 0 0-2.054 0zm5.557 1.027a1.027 1.027 0 1 1 0-2.054 1.027 1.027 0 0 1 0 2.054zm1.211 2.816a.77.77 0 0 0-.124-1.087.786.786 0 0 0-1.098.107c-.273.407-1.16.958-2.254.958-1.093 0-1.981-.55-2.244-.945a.788.788 0 0 0-1.107-.135.786.786 0 0 0-.126 1.101c.55.734 1.81 1.542 3.477 1.542 1.668 0 2.848-.755 3.476-1.541z"
                                    />
                                </svg>
                                Add icon
                            </button>
                            <button className="flex items-center px-2 py-1 rounded hover:bg-gray-700">
                                <svg className="w-4 h-4 mr-2" viewBox="0 0 14 14" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm0 12h10L8.5 5.5l-2 4-2-1.5L2 12z"
                                    />
                                </svg>
                                Add cover
                            </button>
                        </div>

                        {/* Page Title */}
                        <h1
                            className="text-3xl font-bold mb-4"
                            contentEditable
                            suppressContentEditableWarning
                        >
                            Untitled
                        </h1>

                        {/* Properties */}
                        <div className="mb-6">
                            <div className="flex items-center mb-2">
                                <svg
                                    className="w-4 h-4 mr-2 text-gray-400"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                >
                                    <path d="M1.91602 4.83789C2.44238 4.83789 2.87305 4.40723 2.87305 3.87402C2.87305 3.34766 2.44238 2.91699 1.91602 2.91699C1.38281 2.91699 0.952148 3.34766 0.952148 3.87402C0.952148 4.40723 1.38281 4.83789 1.91602 4.83789ZM5.1084 4.52344H14.3984C14.7607 4.52344 15.0479 4.23633 15.0479 3.87402C15.0479 3.51172 14.7607 3.22461 14.3984 3.22461H5.1084C4.74609 3.22461 4.45898 3.51172 4.45898 3.87402C4.45898 4.23633 4.74609 4.52344 5.1084 4.52344ZM1.91602 9.03516C2.44238 9.03516 2.87305 8.60449 2.87305 8.07129C2.87305 7.54492 2.44238 7.11426 1.91602 7.11426C1.38281 7.11426 0.952148 7.54492 0.952148 8.07129C0.952148 8.60449 1.38281 9.03516 1.91602 9.03516ZM5.1084 8.7207H14.3984C14.7607 8.7207 15.0479 8.43359 15.0479 8.07129C15.0479 7.70898 14.7607 7.42188 14.3984 7.42188H5.1084C4.74609 7.42188 4.45898 7.70898 4.45898 8.07129C4.45898 8.43359 4.74609 8.7207 5.1084 8.7207ZM1.91602 13.2324C2.44238 13.2324 2.87305 12.8018 2.87305 12.2686C2.87305 11.7422 2.44238 11.3115 1.91602 11.3115C1.38281 11.3115 0.952148 11.7422 0.952148 12.2686C0.952148 12.8018 1.38281 13.2324 1.91602 13.2324ZM5.1084 12.918H14.3984C14.7607 12.918 15.0479 12.6309 15.0479 12.2686C15.0479 11.9062 14.7607 11.6191 14.3984 11.6191H5.1084C4.74609 11.6191 4.45898 11.9062 4.45898 12.2686C4.45898 12.6309 4.74609 12.918 5.1084 12.918Z" />
                                </svg>
                                <span className="text-gray-400">Tags</span>
                            </div>
                            <div className="ml-6 text-gray-400">Empty</div>
                        </div>

                        {/* Add Property Button */}
                        <button className="flex items-center text-gray-400 hover:bg-gray-700 rounded px-2 py-1 mb-6">
                            <Plus className="w-4 h-4 mr-2" />
                            Add a property
                        </button>

                        {/* Comment Section */}
                        <div className="mb-6">
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 mr-2">
                                    K
                                </div>
                                <div className="flex-grow">
                                    <textarea
                                        className="w-full bg-transparent border border-gray-700 rounded p-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                                        placeholder="Add a comment..."
                                        rows={1}
                                        value={''}
                                    ></textarea>
                                    <div className="flex justify-end mt-2">
                                        <button className="p-1 text-gray-400 hover:bg-gray-700 rounded">
                                            <PaperclipIcon className="w-5 h-5" />
                                        </button>
                                        <button className="p-1 text-gray-400 hover:bg-gray-700 rounded ml-2">
                                            <AtSign className="w-5 h-5" />
                                        </button>
                                        <button className="p-1 text-gray-400 hover:bg-gray-700 rounded ml-2">
                                            <ArrowUp className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Page Content */}
                        <div className="text-gray-400 mb-20">
                            Press Enter to continue with an empty page, or{' '}
                            <button className="underline hover:text-gray-300">create a template</button>
                        </div>
                    </div>
                </div>
            </RadixView>
        </div>
    )
}
