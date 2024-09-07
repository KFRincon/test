import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

export default function SideDrawerPage() {
    return (
        <div className="container">
            <Drawer direction="right" snapPoints={[0.4]}>
                <DrawerTrigger>Open</DrawerTrigger>
                <DrawerContent className="w-full h-screen">
                    <DrawerHeader>
                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                        <DrawerDescription>This action cannot be undone.</DrawerDescription>
                    </DrawerHeader>
                    <div className="overflow-y-auto">

                    </div>

                    <DrawerFooter>
                        <DrawerClose>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </div>
    )
}