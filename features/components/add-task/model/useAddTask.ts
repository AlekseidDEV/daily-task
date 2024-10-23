import {useTaskStore} from "~/entities/components/task/model/stores/store";
import {LocalStorage} from 'quasar'
import {taskExemplar} from "~/shared/utils/taskExemplar";

import type {Tasks} from "~/entities/components/task/model/interface/tasks";

export const useAddTask = (text: string) => {
    const store = useTaskStore()
    const newTask = {}

    let idTask = ''

    Object.assign(newTask, taskExemplar)

    for(let i = 0; i < 10; i++){
        const rnd = Math.floor(Math.random() * 16 + 1)
        const character = '1234567890abcdefg'

        idTask += character.charAt(rnd)
    }

    if(text !== ''){
        store.tasks.push({...newTask, id: idTask, title: text} as Tasks)
        LocalStorage.set("tasks", store.tasks)
    }
}