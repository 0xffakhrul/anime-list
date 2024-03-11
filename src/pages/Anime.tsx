import { fetchDataById } from "@/api/anime-list";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Anime } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import { useParams } from "react-router-dom";

export const AnimePage = () => {
  const params = useParams<{ animeId: string }>();

  const {
    isLoading,
    data: anime,
    error,
  } = useQuery({
    queryKey: ["anime", params.animeId],
    queryFn: () => (params.animeId ? fetchDataById(params.animeId) : undefined),
  });
  console.log(anime);

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="pl-28 pt-5">
      {isLoading ? (
        <div className="flex min-h-screen items-center justify-center">
          <LoaderCircle className="animate-spin h-14 w-14" />
        </div>
      ) : (
        <div className="max-w-5xl mx-auto flex gap-10 py-28">
          <img
            src={anime?.images.webp?.image_url}
            alt=""
            className="rounded-md h-full"
          />
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-3xl font-semibold">{anime?.title}</p>
              <p className="text-muted-foreground text-sm">{anime?.rating}</p>
            </div>
            <Separator />
            <div className="space-y-3">
              <p className="text-lg font-medium">Synopsis</p>
              <p className="">{anime?.synopsis}</p>
            </div>
            <Separator />
            <div className="space-y-1">
              <p>
                <span className="font-semibold">Aired:</span>{" "}
                {anime?.aired.from.slice(0, 10)}
              </p>
              <p>
                <span className="font-semibold">Episodes:</span>{" "}
                {anime?.episodes}
              </p>
              <p>
                <span className="font-semibold">Types:</span> {anime?.type}
              </p>
              <p>
                <span className="font-semibold">Status:</span> {anime?.status}
              </p>
              <p className="space-x-2">
                <span className="font-semibold">Genres:</span>
                {anime?.genres.map((genre) => (
                  <Badge variant="outline">{genre.name}</Badge>
                ))}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
