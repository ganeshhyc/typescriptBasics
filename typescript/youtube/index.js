var Youtube = /** @class */ (function () {
    function Youtube(video_url, video_title, video_views, video_date, video_duration, video_thumbnail) {
        var _this = this;
        this.video_url = video_url;
        this.video_title = video_title;
        this.video_views = video_views;
        this.video_date = video_date;
        this.video_duration = video_duration;
        this.video_thumbnail = video_thumbnail;
        this.setVideoViews = function (addViews) {
            _this.video_views += addViews;
        };
        this.getVideoViews = function () {
            return _this.video_views;
        };
        this.getVideoUrl = function () {
            return _this.video_url;
        };
        this.getVideoDate = function () {
            return _this.video_date;
        };
        this.getVideoDuration = function () {
            return _this.video_duration;
        };
        this.setVideoThumbnail = function (thumbnail) {
            _this.video_thumbnail = thumbnail;
        };
        this.getVideoThumbnail = function () {
            return _this.video_thumbnail;
        };
        this.video_url = video_url;
        this.video_title = video_title;
        this.video_views = video_views;
        this.video_date = video_date;
        this.video_duration = video_duration;
        this.video_thumbnail = video_thumbnail;
    }
    return Youtube;
}());
var channel1 = new Youtube("https://www.youtube.com/xyz123abcpqr", "Demo", 100203, "02/01/2018", "3m:14s", "https://www.google.com/images/xyz123abcpqr.jpg");
console.log("In the respective class Youtube, there are several private and public classes Such as video_url, video title etc.");
console.log("-> A construtor to intialize the value of certain, and getter and setters for declaring and recieving the certain values");
console.log("examples \n");
console.log("Views Before: ", channel1.getVideoViews());
channel1.setVideoViews(4);
console.log("Views After: ", channel1.getVideoViews());
