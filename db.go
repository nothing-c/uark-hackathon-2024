type user struct {
    firstName string
    lastName string
    gender string
    age int
    sport string
    lvl string
    dist int
}


/*
Dump (stdout + file) - done
Read - done
*/

func read (db string) []user {
    var ret []user
    d, err := os.ReadFile(db)
    if err != nil {panic(err)}
    rows := s.Split(string(d),"\n")
    for _,x := range rows {
        if len(s.Trim(x,"\n")) == 0 { return ret}
        y := s.Split(x,",")
        age,_ := strconv.Atoi(y[4])
        dist,_ := strconv.Atoi(y[5])
        ret = append(ret,user{y[0],y[1],y[3],age,y[2],y[6],dist})
    }
    return ret
}

func stddump (u []user) {
    for _, x := range u {fmt.Printf("%s,%s,%s,%s,%d,%d,%s\n", x.firstName,x.lastName,x.sport,x.gender,x.age,x.dist,x.lvl)}
}

func fdump (u []user, f string) {
    out, err := os.OpenFile(f, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
    if err != nil { panic(err) }
    for _, x := range u {
        _,err:=fmt.Fprintf(out,"%s,%s,%s,%s,%d,%d,%s\n", x.firstName,x.lastName,x.sport,x.gender,x.age,x.dist,x.lvl)
        if err != nil { panic(err) }
    }
}
