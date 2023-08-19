export class StoryData {
  id: string;
  content: StoryContent;

  constructor(id: string, title: string, text: string, images: string[]) {
    this.id = id;
    this.content = { title: title, text: text, images: images };
  }
}
export class StoryContent {
  title: string;
  text: string;
  images: string[];

  constructor(title: string, text: string, images: string[]) {
    this.title = title;
    this.text = text;
    this.images = images;
  }
}
