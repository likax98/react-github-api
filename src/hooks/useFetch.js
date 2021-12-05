import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ძალიან ბევრჯერ წერა მიწევდა ამ სეტაპის, ამიტომ ესეთ სოლუშენამდე მივედი რისერჩების მერე
  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      setLoading(true);
      try {
        const username = 'likax';
        const password = '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';
        const headers = {
       
        };
        console.log(headers);

        const response = await fetch(url, {
          signal: controller.signal,
          headers,
        });
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        setData(data);
        setError(false);
      } catch (err) {
        setError('Could not fetch the corresponding data');
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, error, setData, setLoading, setError };
}

export { useFetch };
