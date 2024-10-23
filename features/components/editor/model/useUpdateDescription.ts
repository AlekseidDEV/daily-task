import {useTaskStore} from "~/entities/components/task/model/stores/store";
import {LocalStorage} from "quasar";

export const useUpdateDescription = (html: string, id: string) => {
    const store = useTaskStore()
    const taskIndex = store.tasks.findIndex(item => item.id === id)

    store.tasks[taskIndex].description = html
    LocalStorage.set('tasks', store.tasks)
}