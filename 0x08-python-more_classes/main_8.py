#!/usr/bin/python3
Rectangle = __import__('1-rectangle').Rectangle

try:
    my_rectangle = Rectangle(2, 3)
    print("Width:", my_rectangle.width)
    print("Height:", my_rectangle.height)
except Exception as e:
    print("[{}] {}".format(e.__class__.__name__, e))

try:
    my_rectangle = Rectangle(-2, 3)
    print("Width:", my_rectangle.width)
    print("Height:", my_rectangle.height)
except Exception as e:
    print("[{}] {}".format(e.__class__.__name__, e))

