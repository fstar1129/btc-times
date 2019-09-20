import {Deserializable} from './deserializable.interface';

export class News implements Deserializable {
  id: number;
  title: string;
  content: string;
  updatedAt: Date;
  createdAt: Date;
  editorName: string;
  thumbnailUrl: string;

  constructor(news: any = {}) {
    this.id = news.id;
    this.title = news.title || '';
    this.content = news.content || '';
    this.updatedAt = news.updatedAt || new Date();
    this.createdAt = news.createdAt || new Date();
    this.editorName =  '';
    this.thumbnailUrl = '';
  }
  
  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
