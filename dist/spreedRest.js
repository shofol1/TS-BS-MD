"use strict";
//spreed
const friends = ["Akash", "shanto", "zobayer"];
const newFriend = ["Hridoy", "ashik"];
friends.push(...newFriend);
console.log(friends);
//rest
const bestFriends = (frnd1, frnd2) => console.log(`hi ${frnd1} and ${frnd2}`);
bestFriends("akash", "shanto");
const goodFrinds = (...friends) => 
//   friends.forEach((item: string) => console.log(item));
console.log(friends);
goodFrinds("akash", "sohan", "shanto");
const [closeFriend] = newFriend;
console.log("🚀 ~ file: spreedRest.ts:21 ~ closeFriend:", closeFriend);
const personDet = {
    name: "kasem",
    age: "54",
};
const { name: myFullName } = personDet; //name allias
console.log("🚀 ~ file: spreedRest.ts:29 ~ name:", myFullName);
