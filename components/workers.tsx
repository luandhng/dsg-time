import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { supabase } from "../utils/supabase";

export const Workers = () => {
  const [workers, setWorkers] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      let { data: workers } = await supabase.from("workers").select("*");
      setWorkers(workers);
    };

    fetchData();
  }, []);

  return (
    <View>
      {workers?.map((item: any, index: number) => (
        <Text key={index}>{item.name}</Text>
      ))}
    </View>
  );
};
