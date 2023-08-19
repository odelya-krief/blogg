import { getStories } from "@/lib/stories";
import { StoryData } from "@/models/StoryData";
import Link from "next/link";

export default function Home() {
  const stories = getStories();

  return (
    <div>
      {stories.map((story: StoryData) => {
        return (
          <div key={story.id}>
            <Link className="text-orange-800" href={`stories/${story.id}`}>
              <div>{story.id}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
