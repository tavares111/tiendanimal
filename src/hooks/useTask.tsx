import { keepPreviousData, useQuery } from "@tanstack/react-query"

export type Task = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

async function getTasks(page = 1): Promise<Task[]> {
    await new Promise(res => setTimeout(res, 1000))
    return fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=3`).then(
        (res) => {
            if (!res.ok) {
                // make the promise be rejected if we didn't get a 2xx response
                throw new Error("Not 2xx response", {cause: res});
            } else {
                 return res.json();
            }
        }
      )
}

export default function useTask({ page }: { page: number}) {
    const { data: tasks, isLoading, isError, isPlaceholderData, isFetched } = useQuery({
        queryKey: ['todos', page],
        queryFn: () => getTasks(page),
        placeholderData: keepPreviousData,
    });

    return { tasks, isLoading, isError, isPlaceholderData, isFetched }
}