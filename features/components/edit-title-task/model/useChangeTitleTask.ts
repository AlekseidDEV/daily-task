import {useTaskStore} from "~/entities/components/task/model/stores/store";
import {LocalStorage} from "quasar";

export const useChangeTitleTask = (newValue: string, id: string) => {
    const store = useTaskStore()
    const taskIndex = store.tasks.findIndex(item => item.id === id)

    store.tasks[taskIndex].title = newValue

    LocalStorage.set('tasks', store.tasks)
}