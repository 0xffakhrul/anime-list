import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Dashboard } from "./pages/Dashboard";
import { TopAnime } from "./pages/TopAnime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimePage } from "./pages/Anime";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/top-anime",
    element: <TopAnime />,
  },
  {
    path: "/anime/:animeId",
    element: <AnimePage />,
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-background">
          <Sidebar />
          <RouterProvider router={router} />
          {/*<div>
            <Button>YOOO</Button>
          <ModeToggle />
          </div> */}
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
