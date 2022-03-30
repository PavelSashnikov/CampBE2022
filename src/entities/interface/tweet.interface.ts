export namespace ITweet {
  interface CommonFields {
    id: string;
    text: string;
    author: string;
    createdAt: Date;
  }

  export interface Tweet extends CommonFields {
    comments: Comment[];
    hashtags?: string;
  }

  export type Comment = CommonFields;
}
