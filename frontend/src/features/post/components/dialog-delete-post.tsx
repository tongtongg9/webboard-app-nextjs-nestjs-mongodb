import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '~/components/ui/alert-dialog';
import { Button } from '~/components/ui/button';
import { usePostStore } from '../store/post.store';
import { useDeletePost } from '../hooks/use-post';
import Spinner from '~/components/ui/spinner';

export default function DialogDeletePost() {
    const { deletePost, setDeletePost } = usePostStore((state) => state);
    const { mutate: mutateDeletePost, isPending } = useDeletePost();

    const onDelete = () => {
        mutateDeletePost(deletePost.id);
    };

    return (
        <AlertDialog
            open={deletePost.open}
            onOpenChange={(open) => {
                if (!open) setDeletePost('', open);
                else setDeletePost(deletePost.id, open);
            }}
        >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Please confirm if you wish to delete the post</AlertDialogTitle>
                    <AlertDialogDescription>
                        Are you sure you want to delete the post? Once deleted, it cannot be recovered.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
                    <Button variant="destructive" onClick={onDelete} asChild disabled={isPending}>
                        <AlertDialogAction>
                            {isPending && <Spinner className="mr-2" />}
                            Delete
                        </AlertDialogAction>
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
