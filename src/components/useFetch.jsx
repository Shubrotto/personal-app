import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const res = await response.json().then((data) => {
        setId(data.id);
        setTitle(data.title);
        setBody(data.body);
        setLoading(false);
      });
      return res;
    };
    getData();
  }, [url]);
  return [id, title, body, loading];
};

export default useFetch;
