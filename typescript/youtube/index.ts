class Youtube {
  constructor(private video_url:string, public video_title:string, public video_views:number, private video_date:string, private video_duration:string, public video_thumbnail:string){
    this.video_url=video_url;
    this.video_title=video_title;
    this.video_views=video_views;
    this.video_date=video_date;
    this.video_duration=video_duration;
    this.video_thumbnail=video_thumbnail;
  }
  setVideoViews=(addViews:number)=>{
    this.video_views+=addViews;
  }
  getVideoViews=()=>{
    return this.video_views;
  }
  getVideoUrl=()=>{
    return this.video_url;
  }
  getVideoDate=()=>{
    return this.video_date;
  }
  getVideoDuration=()=>{
    return this.video_duration;
  }
  setVideoThumbnail=(thumbnail:"string")=>{
    this.video_thumbnail=thumbnail;
  }
  getVideoThumbnail=()=>{
    return this.video_thumbnail;
  }
}
let channel1 = new Youtube("https://www.youtube.com/xyz123abcpqr","Demo",100203,"02/01/2018","3m:14s","https://www.google.com/images/xyz123abcpqr.jpg");
console.log("In the respective class Youtube, there are several private and public classes Such as video_url, video title etc.");
console.log("-> A construtor to intialize the value of certain, and getter and setters for declaring and recieving the certain values");
console.log("example \n");
console.log("Views Before: ",channel1.getVideoViews());
channel1.setVideoViews(4);
console.log("Views After: ", channel1.getVideoViews());