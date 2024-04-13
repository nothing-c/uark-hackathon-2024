package main

import (
	"fmt"
	"math"
	"os"
	"strconv"
	"strings"
)

type user struct {
	firstName string
	lastName  string
	gender    string
	age       int
	sport     string
	lvl       string
	dist      int
}

func read(db string) []user {
	var ret []user
	d, err := os.ReadFile(db)
	if err != nil {
		panic(err)
	}
	rows := strings.Split(string(d), "\n")
	for _, x := range rows {
		if len(strings.Trim(x, "\n")) == 0 {
			return ret
		}
		y := strings.Split(x, ",")
		age, _ := strconv.Atoi(y[4])
		dist, _ := strconv.Atoi(y[5])
		ret = append(ret, user{y[0], y[1], y[3], age, y[2], y[6], dist})
	}
	return ret
}

func stddump(u []user) {
	for _, x := range u {
		fmt.Printf("%s,%s,%s,%s,%d,%d,%s\n", x.firstName, x.lastName, x.sport, x.gender, x.age, x.dist, x.lvl)
	}
}

func fdump(u []user, f string) {
	out, err := os.OpenFile(f, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		panic(err)
	}
	for _, x := range u {
		_, err := fmt.Fprintf(out, "%s,%s,%s,%s,%d,%d,%s\n", x.firstName, x.lastName, x.sport, x.gender, x.age, x.dist, x.lvl)
		if err != nil {
			panic(err)
		}
	}
}

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
