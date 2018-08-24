class Facebook {
  constructor(public name:string, public profile_url:string, public birthday:string, private contact_no:string , private relationship_status:string, private friend_list:any,private profile_id:string, public posts:any, public profile_pic:string, public cover_pic:string, public about:any){
    this.name=name;
    this.profile_url=profile_url;
    this.birthday=birthday;
    this.contact_no=contact_no;
    this.relationship_status=relationship_status;
    this.friend_list=friend_list;
    this.profile_id=profile_id;
    this.posts=posts;
    this.profile_pic=profile_pic;
    this.cover_pic=cover_pic;
    this.about=about;
  }
  setName =(name: string)=>this.name=name;
  getName=() => this.name;

  getProfile_url=()=> this.profile_url;

  setBirthday=(bday:string)=>this.birthday=bday;
  getBirthday=()=> this.birthday;
  
  setContactNo=(contact_no:string)=>this.contact_no=contact_no;
  getContactNo=()=>this.contact_no;

  setRelationshipStatus=(status:string)=>this.relationship_status=status;
  getRelationshipStatus=()=>this.relationship_status;

  addFriends=(friendObj:object)=>this.friend_list.push(friendObj);
  getFriends=()=>this.friend_list;

  getProfileId=()=>this.profile_id;

  addPost=(postObj:object)=>this.posts.push(postObj);
  getPost=()=>this.posts;

  setProfilePic=(profile_pic:string)=>this.profile_pic=profile_pic;
  getProfilePic=()=>this.profile_pic;

  setCoverPic=(cover:string)=>this.cover_pic=cover;
  getCoverPic=()=>this.cover_pic;

  setAbout=(aboutObj:object)=>this.about=aboutObj;
  getAbout=()=>this.about;

}

let profile1 = new Facebook(
  "Ganesh Kumar",
  "https://www.facebook.com/ganesh_kumar",
  "01/05/1995",
  "+919876543210",
  "single",
  [
    {
      'Name': 'Shom Nath',
      'Profile_pic': 'https://www.facebook.com/images/shom.jpg',
      'birthday': '12/01/1995',
      'Relationship Status': 'single'
    }
  ],
  "12345",
  [],
  "https://www.facebook.com/images/ganesh.jpg",
  "https://www.facebook.com/images/ganeshCover.jpg",
  {
    'Name':'Ganesh Kumar',
    'Profile_pic':'https://www.facebook.com/images/ganesh.jpg',
    'birthday':'01/05/1995',
    'Relationship Status':'single'
  }
);
let profile2 = new Facebook(
  "Shom Nath",
  "https://www.facebook.com/shom_nath",
  "12/01/1995",
  "+919876543210",
  "single",
  [
    {
      'Name': 'Ganesh Kumar',
      'Profile_pic': 'https://www.facebook.com/images/ganesh.jpg',
      'birthday': '01/05/1995',
      'Relationship Status': 'single'
    }
  ],
  "12345",
  [],
  "https://www.facebook.com/images/shom.jpg",
  "https://www.facebook.com/images/shomCover.jpg",
  {
    'Name':'Shom Nath',
    'Profile_pic':'https://www.facebook.com/images/shom.jpg',
    'birthday':'12/01/1995',
    'Relationship Status':'single'
  }
);
let profile3 = new Facebook(
  "Chetna Kumari",
  "https://www.facebook.com/ganesh_kumar",
  "26/08/1995",
  "+919876543210",
  "single",
  [
    {
      'Name': 'Ganesh Kumar',
      'Profile_pic': 'https://www.facebook.com/images/ganesh.jpg',
      'birthday': '01/05/1995',
      'Relationship Status': 'single'
    }
  ],
  "12347",
  [],
  "https://www.facebook.com/images/chetna.jpg",
  "https://www.facebook.com/images/chetnaCover.jpg",
  {
    'Name':'Chetna Kumari',
    'Profile_pic':'https://www.facebook.com/images/chetna.jpg',
    'birthday':'26/08/1995',
    'Relationship Status':'single'
  }
);
console.log("In the respective class Facebook, there are several private and public classes Such as profil_id, name etc.");
console.log("-> A construtor to intialize the value of certain, and getter and setters for declaring and recieving the certain values");
console.log("examples \n");
profile3.addFriends(profile2.about);
profile2.addFriends(profile3.about);
console.log('profile3 Friends: ',profile3.getFriends());