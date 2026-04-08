from app.utils import add, is_even, multiply


def test_add() -> None:
    assert add(2, 3) == 5
    assert add(0, 0) == 0
    assert add(-1, 1) == 0


def test_multiply() -> None:
    assert multiply(4, 5) == 20
    assert multiply(5, 0) == 0


def test_is_even() -> None:
    assert is_even(4) is True
    assert is_even(3) is False
    assert is_even(0) is True
