def add_item(item, list_=[]):
    list_.append(item)
    return list_

print(add_item(1)) # [1]
print(add_item(2)) # Expected [2], but is [1, 2]
