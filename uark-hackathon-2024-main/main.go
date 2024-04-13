package main

import (
	"math"
)

type testuser struct {
	firstName string
	lastName  string
	gender    string
	age       int
	sport     string
	lvl       string
	dist      int
}

func isSimilar(u1 testuser, u2 user, ageThresh, distThresh int) bool {
	ageDiff := math.Abs(float64(u1.age - u2.age))
	distDiff := math.Abs(float64(u1.dist - u2.dist))

	return u1.sport == u2.sport && (u1.lvl == u2.lvl || (ageDiff <= float64(ageThresh) && distDiff <= float64(distThresh)))

}

func matchedData(u []user, testUs testuser, age int, dist int) []user {
	var similarUsers []user
	for _, i := range u {
		if isSimilar(testUs, i, age, dist) {
			similarUsers = append(similarUsers, i)
		}
	}

	return similarUsers
}

func main() {
	ageThresh := 5
	distThresh := 80
	test := testuser{
		firstName: "Mike",
		lastName:  "Hunter",
		gender:    "Male",
		age:       29,
		sport:     "Baseball",
		lvl:       "Professional",
		dist:      90,
	}
	users := read("fake2.csv")

	simUser := matchedData(users, test, ageThresh, distThresh)

	stddump(simUser)
}
