import type {Ref} from "vue";
import type {Tasks} from "~/entities/components/task/model/interface/tasks";
import {LocalStorage} from "quasar";

export const useTaskStore = defineStore('tasks', () => {
    const tasks: Ref<Tasks[]> = ref([]);
    const selectedTask: Ref<Tasks | null> = ref(null)

    const getList = () => {
        Object.assign(tasks.value, LocalStorage.getItem('tasks'))
    }

    const getTaskById = (id: string) => {
        return tasks.value.find(item => item.id === id)
    }

    const selectTask = (id: string) => {
        selectedTask.value = getTaskById(id) as Tasks
    }

    const getTasks = computed(() => tasks.value)
    const getActiveTasks = computed(() => tasks.value.filter(item => !item?.complete))
    const getCompleteTasks = computed(() => tasks.value.filter(item => item?.complete))
    // const getDeferredTasks = computed(() => tasks.value.filter(item => item?.status === 'deferred'))
    // const getPlanTasks = computed(() => tasks.value.filter(item => item?.status === 'plan'))

    return {
        tasks,
        getList,
        getActiveTasks,
        getCompleteTasks,
        getTasks,
        selectedTask,
        selectTask
    }
})