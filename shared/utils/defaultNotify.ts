import {Notify} from "quasar";

export const defaultNotify = (mess: string) => {
    Notify.create({
        color: 'grey-9',
        message: mess,
        icon: 'help',
        classes: 'hell'
    })
}