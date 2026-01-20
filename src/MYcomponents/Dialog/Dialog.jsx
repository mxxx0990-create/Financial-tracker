import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDispatch } from 'react-redux'
import { setBalance } from '../Theme/Users'

export function DialogDemo() {
    const { register, handleSubmit, reset } = useForm()
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        dispatch(setBalance(Number(data.balans)));
        reset();
    }



    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">ДОБАВИТ СУММУ</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogHeader>
                        <DialogTitle>Добавить сумму</DialogTitle>
                        <DialogDescription>
                            Добавьте вашу общую сумму чтобы сделать покупки
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name-1">Сумма</Label>
                            <Input
                                id="name-1"
                                placeholder="Введите вашу сумму"
                                className="mb-5"
                                type='number'
                                {...register("balans")}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Отменить</Button>
                        </DialogClose>
                        <DialogClose>
                            <Button type="submit" >Добавить</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default DialogDemo
