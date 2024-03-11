import { fetchData } from "@/api/anime-list";
import { ListCards } from "@/components/ListCards";
import Title from "@/components/Title";
import { Input } from "@/components/ui/input";
import { Anime } from "@/utils/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { LoaderCircle, Search } from "lucide-react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const {
    isLoading,
    data: animes,
    error,
  } = useQuery({ queryKey: ["animes"], queryFn: fetchData });

  if (error) return "An error has occurred: " + error.message;

  const animeList = animes?.data;
  const firstFiveAnimes = animeList?.slice(0, 5);
  const remainingAnimes = animeList?.slice(5);

  console.log("Animes:", animeList);

  return (
    <div className="pl-28 pt-5">
      {isLoading ? (
        <div className="flex min-h-screen items-center justify-center">
          <LoaderCircle className="animate-spin h-14 w-14" />
        </div>
      ) : (
        <>
          <div className="relative">
            <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search for animes" className="pl-8 w-96" />
          </div>
          <Title title="Trending" />
          <ListCards className=" ">
            {firstFiveAnimes.map((anime: Anime) => (
              <Link
                to={`/anime/${anime.mal_id}`}
                className="overflow-hidden rounded-md"
              >
                <img
                  src={anime.images.webp?.image_url}
                  alt=""
                  className="h-80 hover:transition-transform duration-200 ease-in-out hover:scale-110"
                />
              </Link>
            ))}
          </ListCards>
          <Title title="Recommended for you" />
          <ListCards>
            {remainingAnimes.map((anime: Anime) => (
              <Link to={`/anime/${anime.mal_id}`}>
                <div
                  key={anime.mal_id}
                  className="flex flex-col items-start space-y-1"
                >
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={anime.images.webp?.image_url}
                      alt=""
                      className="rounded-md w-52 h-72 hover:transition-transform duration-200 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div className="flex gap-2 text-muted-foreground">
                    <p>{anime.aired.from.slice(0, 4)} •</p>
                    <p>{anime.type}</p>
                  </div>
                  <p className="font-medium ">{anime.title}</p>
                </div>
              </Link>
            ))}
          </ListCards>
        </>
      )}
    </div>
  );
};
