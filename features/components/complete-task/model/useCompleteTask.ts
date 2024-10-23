import {LocalStorage} from "quasar";
import {useTaskStore} from "~/entities/components/task/model/stores/store";
import {defaultNotify} from "~/shared/utils/defaultNotify";

export const useCompleteTask = (val: boolean, idTask: string) => {
    const store = useTaskStore()

    const taskIndex = store.tasks.findIndex((elem) => elem.id === idTask)

    store.tasks[taskIndex].complete = val
    LocalStorage.set('tasks', store.tasks)

    if(store.tasks[taskIndex].complete){
        defaultNotify('Задача выполнена!')
    }
}