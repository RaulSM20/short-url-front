import { UrlForm } from "@/components/urlForm";

export const HomePage = () => {
  return (
    <>
      <div className="mx-auto flex flex-col gap-5">
        <h2 className="text-5xl font-bold">Short URL</h2>
        <UrlForm />
      </div>
    </>
  );
};
