# Server Fetching

## Loading state while fetching data

add `loading to app/loading.tsx`

## With Supabase

```
import { supabase } from "@/supabase";

const fetchData = async () => {
  let { data: watchlist } = await supabase.from("watchlist").select("*");

  return watchlist;
};

export default async function Home() {
  const watchList = await fetchData();
  return (
    <main>
      {watchList?.map((item, index) => (
        <div key={index}>{item.show}</div>
      ))}
    </main>
  );
}
```
