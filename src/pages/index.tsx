import Button from "@/components/Button";
import Heading from "@/components/Heading";
import NewTaskModal from "@/components/NewTaskModal";
import TaskCard from "@/components/TaskCard";
import useTask from "@/hooks/useTask";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  const [showPortal, setShowPortal] = useState(false);
  const { tasks, isPlaceholderData, isFetched , isLoading} = useTask({ page });

  return (
    <div className="max-w-7xl mx-auto px-[18px] pt-[38px] pb-3">
      <Heading title="Mis tareas" />
      <div className="flex flex-col gap-4 mt-[20px] mb-12">
        { !isFetched &&
          <>
            <TaskCard loadingData={true} />
            <TaskCard loadingData={true} />
            <TaskCard loadingData={true} />
          </>
        }
        { isFetched && tasks?.map((task) =>  <TaskCard key={task.id} id={task.id} title={task.title} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, ac elementum ultrices mauris. Cursus urna vehicula nisi aliquam pulvinar sit interdum eget ac. Rhoncus et nunc, aliquam, ac faucibus odio porta diam lorem. Dictum amet malesuada dictum tristique sollicitudin sed sagittis." />)}
      </div>
      <div className="mt-4 mb-12 flex justify-between items-center">
      
        <Button
          onClick={() => setPage(old => Math.max(old - 1, 1))}
          disabled={page === 1 || isLoading}
          variant="ghost"
          title="Previous Page"
          style={{ width : 'fit-content'}}
        />
        <span className="text-sm font-bold text-[#555555]">{`page: ${page}`}</span>
        <Button
          onClick={() => {
              setPage(old => old + 1)
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={isPlaceholderData || (tasks && tasks.length < 3) || isLoading}
          variant="ghost"
          title="Next Page"
          style={{ width : 'fit-content'}}
        />
      </div>
      <Button onClick={() => setShowPortal(true)} title="Añadir tarea" />
      <NewTaskModal show={showPortal} onClose={() => setShowPortal(false)} />
    </div>
  );
}
