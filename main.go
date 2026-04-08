package main

import (
	"fmt"

	"guardian-test/math"
)

func main() {
	fmt.Println("2 + 3 =", math.Add(2, 3))
	fmt.Println("4 * 5 =", math.Multiply(4, 5))
	fmt.Println("4 is even:", math.IsEven(4))
}
