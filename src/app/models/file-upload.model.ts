export class  FileUpload {
  key!: string;
  name!: string;
  url!: string;
  file: File;
  desc! :string;
  title! :string;
  userID! :string

  constructor(file: File, desc: string, title: string,userId:string) {
    this.file = file;
    this.desc = desc;
    this.title = title;
    this.userID = userId
  }
}
