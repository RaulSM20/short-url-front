import { UrlForm } from "@/components/UrlForm";
import { ClipboardList, SearchCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const HomePage = () => {
  return (
    <>
      <div className="mx-auto flex flex-col gap-5 mt-16 w-96 xl:w-[850px] ">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-5xl ">Short URL</CardTitle>
            <CardDescription className="text-2xl">
              Paste the URL to be shortened
            </CardDescription>
          </CardHeader>
          <CardContent>
            <UrlForm />
          </CardContent>
          <CardFooter className=" text-wrap">
            <p>
              ShortURL is a free tool to shorten URLs and generate short links
              URL shortener allows to create a shortened link making it easy to
              share.
            </p>
          </CardFooter>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-3xl">
              Want More? Try to register!
            </CardTitle>
            <CardDescription className="text-2xl">
              Custom short links, powerful dashboard, detailed analytics.
            </CardDescription>
          </CardHeader>
        </Card>
        <div className="grid xl:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 items-center">
            <SearchCheck size={48} />
            <h2 className="text-3xl font-bold">Simple and fast!</h2>
            <p className="text-center">
              ShortURL allows to shorten long links from Instagram, Facebook,
              YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and sites.
              Just paste the long URL and click the Shorten URL button. On the
              next page, copy the shortened URL and share it on sites, chat and
              emails. After shortening the URL, check how many clicks it
              received.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <ClipboardList size={48} />
            <h2 className="text-3xl font-bold">Shorten, share</h2>
            <p className="text-center">
              Your shortened URLs can be used in publications, documents,
              advertisements, blogs, forums, instant messages, and other
              locations. Track statistics for your business and projects by
              monitoring the number of hits from your URL with our click
              counter.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
