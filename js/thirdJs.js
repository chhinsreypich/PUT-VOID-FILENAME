// object
var hotel = {
  name: "Quay",
  location: "PP",
  rating: 5,
  gym: true,
  price: 100,
  rooms: 100,
  booked: 40,
  roomType: ["Family", "Queen", "King"],
  availableRoom: function () {
    return this.rooms - this.booked
  },

};

var hname = hotel.name;
var elName = document.getElementById('name') ;
elName.textContent = "Hotel: " + hname;

var hRoomType = hotel.roomType;
var elRoomtype = document.getElementById('roomtype') ;
elRoomtype.textContent = "Room type: " + hRoomType[2];

var availableR = hotel.availableRoom();
var elA = document.getElementById('available') ;
elA.textContent = "Room Availabe: " + availableR;

var cname = document.getElementsByClassName("hot");
if (cname.length >= 2){
  var elName = cname[2];
  elName.className = 'cool';
}

/// if we want to change all class name use loop
var tname = document.getElementsByTagName("li");
if (tname.length > 0){
  var elTName = tname[2];
  elTName.className = 'cool';
}