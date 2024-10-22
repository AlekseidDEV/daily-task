import {useTaskStore} from "~/entities/components/task/model/stores/store";
import {LocalStorage} from 'quasar'

export const useAddTask = (text: string) => {
    const store = useTaskStore()

    let idTask = ''

    for(let i = 0; i < 10; i++){
        const rnd = Math.floor(Math.random() * 16 + 1)
        const character = '1234567890abcdefg'

        idTask += character.charAt(rnd)
    }

    if(text !== ''){
        store.tasks.push({title: text, complete: false, id: idTask})
        LocalStorage.set("tasks", store.tasks)
    }
}