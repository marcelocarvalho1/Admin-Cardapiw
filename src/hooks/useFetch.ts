import { useState, useEffect } from "react";

export function useFetch<T>(endpoint: string, url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${url}`)
      .then(res => res.json())
      .then(json => setData(json))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, isLoading };
}
