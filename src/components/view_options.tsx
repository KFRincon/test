
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { SettingsIcon } from 'lucide-react'
import { PeekModeFull, PeekModeCenter, PeekModeSide } from '@/icons/icons'

const viewOptions = [
    { label: 'Side window', value: 'side', icon: <PeekModeSide className="h-4 w-4" /> },
    { label: 'Center window', value: 'center', icon: <PeekModeCenter className="h-4 w-4" /> },
    { label: 'Full page', value: 'full', icon: <PeekModeFull className="h-4 w-4" /> }
]

interface ViewOptionsProps {
    viewData: string
    viewDataChange: (value: string) => void
}

export function ViewOptions({ viewData, viewDataChange }: ViewOptionsProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size={'icon'}>{viewOptions.find((option) => option.value === viewData)?.icon}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-50 bg-black text-white z-[99999]">
                <DropdownMenuGroup>
                    {viewOptions.map(({ icon, label, value }) => (
                        <DropdownMenuItem
                            className="flex gap-2"
                            key={value}
                            onClick={() => {
                                viewDataChange(value)
                            }}
                        >
                            {icon}
                            <span>{label}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>

                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <SettingsIcon className="mr-2 h-4 w-4" />
                    <span>Edit default view</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
