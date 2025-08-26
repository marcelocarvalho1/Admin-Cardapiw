import { useState, useEffect } from "react";

export function useFetch<T>(fetchFunction: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchFunction()
      .then((res) => setData(res))
      .finally(() => setLoading(false));
  }, [fetchFunction]);

  return { data, isLoading };
}
