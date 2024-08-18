import { useState } from 'react';
import { useAuthStore } from '../store/auth.store';
import AlertSignInFirst from '../components/alert-sign-in-first';

/**
 *
 * @param callback
 * @example
 * const MyComponent = () => {
 *     const handleClick = () => {
 *         console.log('click working');
 *     };
 *
 *     const { handleAction, AlertComponent } = useSignInFirst(handleClick);
 *
 *     return (
 *         <>
 *             <button onClick={handleAction}> Click Me!</button>
 *             {AlertComponent}
 *         </>
 *     );
 * };
 */
export const useSignInFirst = (callback: () => void) => {
    const [open, setOpen] = useState(false);
    const is_authenticated = useAuthStore((state) => state.is_authenticated);

    const handleAction = () => {
        if (!is_authenticated) {
            setOpen(true);
        } else {
            callback();
        }
    };

    return {
        handleAction,
        AlertComponent: <AlertSignInFirst open={open} setOpen={setOpen} />,
    };
};
