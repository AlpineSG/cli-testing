package com.test;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class MathServiceTest {
    private final MathService math = new MathService();

    @Test
    void addsNumbers() {
        assertEquals(5, math.add(2, 3));
    }

    @Test
    void multipliesNumbers() {
        assertEquals(20, math.multiply(4, 5));
    }

    @Test
    void checksEven() {
        assertTrue(math.isEven(4));
        assertFalse(math.isEven(3));
    }
}
