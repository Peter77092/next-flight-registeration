import BlogSlider from "@/components/BlogSlider/page";
import MostFavoriteBlogs from "@/components/MostFavoriteBlogs/page";
import SearchBar from "@/components/SearchBar/page";
import SeasonalDestination from "@/components/SeasonalDestination/page";
import TrendingDestinations from "@/components/TrendingDestinations/page";
import Image from "next/image";

export default function Home() {
  return (
    // flex min-h-screen flex-col items-center justify-between p-24
    <main>
      <SearchBar />
      <BlogSlider />
      <MostFavoriteBlogs />
      <TrendingDestinations />
      <SeasonalDestination />
    </main>
  );
}
