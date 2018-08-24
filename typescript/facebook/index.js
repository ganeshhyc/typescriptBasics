var Facebook = /** @class */ (function () {
    function Facebook(name, profile_url, birthday, contact_no, relationship_status, friend_list, profile_id, posts, profile_pic, cover_pic, about) {
        var _this = this;
        this.name = name;
        this.profile_url = profile_url;
        this.birthday = birthday;
        this.contact_no = contact_no;
        this.relationship_status = relationship_status;
        this.friend_list = friend_list;
        this.profile_id = profile_id;
        this.posts = posts;
        this.profile_pic = profile_pic;
        this.cover_pic = cover_pic;
        this.about = about;
        this.setName = function (name) { return _this.name = name; };
        this.getName = function () { return _this.name; };
        this.getProfile_url = function () { return _this.profile_url; };
        this.setBirthday = function (bday) { return _this.birthday = bday; };
        this.getBirthday = function () { return _this.birthday; };
        this.setContactNo = function (contact_no) { return _this.contact_no = contact_no; };
        this.getContactNo = function () { return _this.contact_no; };
        this.setRelationshipStatus = function (status) { return _this.relationship_status = status; };
        this.getRelationshipStatus = function () { return _this.relationship_status; };
        this.addFriends = function (friendObj) { return _this.friend_list.push(friendObj); };
        this.getFriends = function () { return _this.friend_list; };
        this.getProfileId = function () { return _this.profile_id; };
        this.addPost = function (postObj) { return _this.posts.push(postObj); };
        this.getPost = function () { return _this.posts; };
        this.setProfilePic = function (profile_pic) { return _this.profile_pic = profile_pic; };
        this.getProfilePic = function () { return _this.profile_pic; };
        this.setCoverPic = function (cover) { return _this.cover_pic = cover; };
        this.getCoverPic = function () { return _this.cover_pic; };
        this.setAbout = function (aboutObj) { return _this.about = aboutObj; };
        this.getAbout = function () { return _this.about; };
        this.name = name;
        this.profile_url = profile_url;
        this.birthday = birthday;
        this.contact_no = contact_no;
        this.relationship_status = relationship_status;
        this.friend_list = friend_list;
        this.profile_id = profile_id;
        this.posts = posts;
        this.profile_pic = profile_pic;
        this.cover_pic = cover_pic;
        this.about = about;
    }
    return Facebook;
}());
var profile1 = new Facebook("Ganesh Kumar", "https://www.facebook.com/ganesh_kumar", "01/05/1995", "+919876543210", "single", [
    {
        'Name': 'Shom Nath',
        'Profile_pic': 'https://www.facebook.com/images/shom.jpg',
        'birthday': '12/01/1995',
        'Relationship Status': 'single'
    }
], "12345", [], "https://www.facebook.com/images/ganesh.jpg", "https://www.facebook.com/images/ganeshCover.jpg", {
    'Name': 'Ganesh Kumar',
    'Profile_pic': 'https://www.facebook.com/images/ganesh.jpg',
    'birthday': '01/05/1995',
    'Relationship Status': 'single'
});
var profile2 = new Facebook("Shom Nath", "https://www.facebook.com/shom_nath", "12/01/1995", "+919876543210", "single", [
    {
        'Name': 'Ganesh Kumar',
        'Profile_pic': 'https://www.facebook.com/images/ganesh.jpg',
        'birthday': '01/05/1995',
        'Relationship Status': 'single'
    }
], "12345", [], "https://www.facebook.com/images/shom.jpg", "https://www.facebook.com/images/shomCover.jpg", {
    'Name': 'Shom Nath',
    'Profile_pic': 'https://www.facebook.com/images/shom.jpg',
    'birthday': '12/01/1995',
    'Relationship Status': 'single'
});
var profile3 = new Facebook("Chetna Kumari", "https://www.facebook.com/ganesh_kumar", "26/08/1995", "+919876543210", "single", [
    {
        'Name': 'Ganesh Kumar',
        'Profile_pic': 'https://www.facebook.com/images/ganesh.jpg',
        'birthday': '01/05/1995',
        'Relationship Status': 'single'
    }
], "12347", [], "https://www.facebook.com/images/chetna.jpg", "https://www.facebook.com/images/chetnaCover.jpg", {
    'Name': 'Chetna Kumari',
    'Profile_pic': 'https://www.facebook.com/images/chetna.jpg',
    'birthday': '26/08/1995',
    'Relationship Status': 'single'
});
console.log("In the respective class Facebook, there are several private and public classes Such as profil_id, name etc.");
console.log("-> A construtor to intialize the value of certain, and getter and setters for declaring and recieving the certain values");
console.log("examples \n");
profile3.addFriends(profile2.about);
profile2.addFriends(profile3.about);
console.log('profile3 Friends: ', profile3.getFriends());
