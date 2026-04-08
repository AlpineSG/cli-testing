package math

import "testing"

func TestAdd(t *testing.T) {
	tests := []struct {
		a, b, want int
	}{
		{2, 3, 5},
		{0, 0, 0},
		{-1, 1, 0},
	}
	for _, tt := range tests {
		if got := Add(tt.a, tt.b); got != tt.want {
			t.Errorf("Add(%d, %d) = %d, want %d", tt.a, tt.b, got, tt.want)
		}
	}
}

func TestMultiply(t *testing.T) {
	if got := Multiply(4, 5); got != 20 {
		t.Errorf("Multiply(4, 5) = %d, want 20", got)
	}
}

func TestIsEven(t *testing.T) {
	if !IsEven(4) {
		t.Error("expected 4 to be even")
	}
	if IsEven(3) {
		t.Error("expected 3 to be odd")
	}
}
