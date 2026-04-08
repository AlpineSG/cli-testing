package math

import "testing"

func TestAdd(t *testing.T) {
	if got := Add(2, 3); got != 5 { t.Errorf("got %d want 5", got) }
}
func TestMultiply(t *testing.T) {
	if got := Multiply(4, 5); got != 20 { t.Errorf("got %d want 20", got) }
}
