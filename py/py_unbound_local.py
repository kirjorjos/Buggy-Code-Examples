x = 10

def increment():
    x = x + 1 # UnboundLocalError
    print(x)

increment()
