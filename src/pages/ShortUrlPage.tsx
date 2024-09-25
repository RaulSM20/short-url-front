import { Spinner } from "@/components/spinner";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ShortUrlPage = () => {
  const param = useParams();
  const urlApi = "http://localhost:3000/" + param.shorturl;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(urlApi)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res;
      })
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        if (!data) return;

        setIsLoading(false);
        setTimeout(() => {
          window.location.href = data;
        }, 2000);
      })
      .catch(() => {
        setIsLoading(false);
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      });
  }, [urlApi]);

  return (
    <>
      {isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div className="mx-auto my-48">
          <Spinner />
        </div>
      )}
    </>
  );
};
