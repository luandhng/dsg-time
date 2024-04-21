"use client";

import { useNotesDataStore } from "@/stores/notesDataStore";
import { useSelectedTopicStore } from "@/stores/selectedTopicStore";

export const Notes = () => {
  const { selectedTopic, setSelectedTopic } = useSelectedTopicStore();
  const { data } = useNotesDataStore();

  return (
    <div className="col-span-10">
      {data?.map(
        (item: any, index: number) =>
          item.topic === selectedTopic && (
            <div key={index} className="">
              <input
                onChange={(e) => {}}
                defaultValue={item.topic}
                className=" p-3 border-b w-full border-neutral-400 font-semibold"
              ></input>
              <div className="p-3">{item.note}</div>
            </div>
          )
      )}
    </div>
  );
};
