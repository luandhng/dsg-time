import { createClient } from "@/utils/supabase/server";

const Write = async () => {
  const supabase = createClient();
  let { data: notes } = await supabase.from("notes").select("*");

  return (
    <main className="h-full grid grid-cols-12">
      <div className="col-span-2 border-r border-neutral-400">
        {notes?.map((item, index) => (
          <div
            key={index}
            className="border-b border-neutral-400 hover:bg-neutral-200 p-3"
          >
            {item.topic}
          </div>
        ))}
      </div>

      <div className="col-span-10">
        {notes?.map(
          (item, index) =>
            item.topic === "become founder" && (
              <div key={index} className="p-3">
                {item.note}
              </div>
            )
        )}
      </div>
    </main>
  );
};

export default Write;
