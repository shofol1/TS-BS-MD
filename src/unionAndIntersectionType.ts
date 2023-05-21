type NoobDeveloper = {
  name: String;
};
// type JuniorDeveloper = {
//     name: String;
//   experience: Number;
//   position: String;
//   level: String;
// };

//intersection
type JuniorDeveloper = NoobDeveloper & {
  name: String;
  experience: Number;
  position: String;
  level: String;
};
//Union
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Shafol",
  experience: 1,
  position: "Junior",
  level: "mid" || "junior" || "senior",
};

//enum
enum Level {
  junior = "junior",
  mid = "mid",
  senior = "senior",
}
//intersection
type NextLevelDevloper = JuniorDeveloper & {
  leaderShip: Number;
  level: Level;
};

const nextLevelDeveloper: NextLevelDevloper = {
  leaderShip: 1,
  name: "Shafol",
  experience: 2,
  level: Level.mid,
  position: "Next Level",
};
