type StoreMethods = 'getActiveTasks' | 'getCompleteTasks'

export interface ListType {
    name: string,
    methodForList: StoreMethods
}
