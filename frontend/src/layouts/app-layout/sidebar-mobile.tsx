import React from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '~/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import { Button } from '~/components/ui/button';
import SidebarMenu from './sidebar-menu';

export default function SidebarMobile() {
    return (
        <Sheet>
            <SheetTrigger>
                <Button size="icon" variant="ghost" className="hover:bg-transparent text-white hover:text-muted">
                    <AlignJustify />
                </Button>
            </SheetTrigger>
            <SheetContent className="border-0 bg-primary-500 rounded-l-lg text-white">
                <SidebarMenu menuColor="white" />
            </SheetContent>
        </Sheet>
    );
}
