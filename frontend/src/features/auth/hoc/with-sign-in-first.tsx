import React, { ComponentType, useState } from 'react';
import { useAuthStore } from '../store/auth.store';
import AlertSignInFirst from '../components/alert-sign-in-first';

interface WithSignInFirstProps {
    onClick?: () => void;
}

function withSignInFirst<P extends WithSignInFirstProps>(WrappedComponent: ComponentType<P>) {
    const WarperComponent = (props: P) => {
        const [open, setOpen] = useState(false);
        const { is_authenticated } = useAuthStore();

        const handleClick = (e: React.MouseEvent<HTMLElement>) => {
            if (!is_authenticated) {
                setOpen(true);
            } else if (props.onClick) {
                props.onClick();
            }
        };

        return (
            <>
                <WrappedComponent {...props} onClick={handleClick} />
                <AlertSignInFirst open={open} setOpen={setOpen} />
            </>
        );
    };

    return WarperComponent;
}

export default withSignInFirst;
