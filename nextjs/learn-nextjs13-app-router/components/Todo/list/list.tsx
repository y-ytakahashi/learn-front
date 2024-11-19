import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/database.types";
import { cookies } from "next/headers";
import TodoItem from "@/components/Todo/item/item";

const List = async () => {
  new Promise((resolve) => setTimeout(resolve, 6000));
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: todos } = await supabase.from("todos").select().order("created_at", { ascending: true });

  return (
    <div>
      <ul>
        {todos?.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </div>
  );
};
export default List;
