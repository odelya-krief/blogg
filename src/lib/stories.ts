import fs from "fs";
import path from "path";
import { StoryContent, StoryData } from "../models/StoryData";

const storiesDirectory = path.join(process.cwd(), "public/stories");

export function getStoryData(id: string): StoryData {
  const fullPath = path.join(storiesDirectory, `${id}.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const jsonData = JSON.parse(fileContents);

  const storyContent: StoryContent = {
    title: jsonData.title,
    text: jsonData.text,
    images: jsonData.images,
  };

  return { id: id, content: { ...storyContent } };
}

export function getStories() {
  const fileNames = fs.readdirSync(storiesDirectory);
  const storiesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.json$/, "");
    const storyData = getStoryData(id);

    return storyData;
  });
  return storiesData;
}

export function getStoriesIds() {
  const fileNames = fs.readdirSync(storiesDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.json$/, ""),
      },
    };
  });
}
