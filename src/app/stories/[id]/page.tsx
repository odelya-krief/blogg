import { getStoryData } from "../../../lib/stories";

export default function StoryPage({ params }: any) {
  const storyData = getStoryData(params.id);
  return (
    <div>
      <p className="text-orange-800">{storyData.content.text}</p>
    </div>
  );
}
