'use client'

import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'
import { ViewOptions } from './view_options'
import { CircleX } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'

interface RadixViewProps {
    children: React.ReactNode
    use_button_text: boolean
    open_button_text?: string
    open_icon: React.ReactNode
    title?: string
    description?: string
}

/**
 * @param open_icon Icono que abre la ventana, es lo que se usa por defecto
 * @param children Contenido de la ventana
 * @param use_buton Se abre usando boton. Muestra el contenido establecido en open_button_text
 * @default false
 * @param open_button_text Texto que va en el boton que abre la ventana
 * @param description Descripcion dentro del dialogo
 *
 * @returns
 */

export const RadixView = ({
    children,
    use_button_text = false,
    open_icon,
    open_button_text,
    title,
    description
}: RadixViewProps) => {
    const [viewMode, setViewMode] = useState('side')
    console.log(viewMode)

    const window_style =
        'fixed left-[50%] top-[50%] z-[99999]  w-3/5  h-4/5 translate-x-[-50%] translate-y-[-50%]  bg-current  shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
    const side_window_style =
        'fixed left-[80%] top-[50%] z-[99999]  w-2/5  h-full translate-x-[-50%] translate-y-[-50%]  bg-current  shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                {use_button_text ? (
                    <Button className="flex gap-5">
                        {open_icon} {open_button_text}
                    </Button>
                ) : (
                    <Button size={'icon'}>{open_icon}</Button>
                )}
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay />
                <Dialog.Content className={viewMode == 'center' ? window_style : side_window_style}>
                    <Dialog.DialogTitle>
                        <Dialog.DialogClose>
                            <Button size={'icon'}>
                                <CircleX size={16} />
                            </Button>
                        </Dialog.DialogClose>
                        <ViewOptions viewData={viewMode} viewDataChange={setViewMode} />
                        {title}
                    </Dialog.DialogTitle>
                    <Dialog.Description>{description}</Dialog.Description>
                    <div className="bg-[#191919] text-white  p-4 size-full ">
                        <ScrollArea className="h-full">{children}</ScrollArea>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
