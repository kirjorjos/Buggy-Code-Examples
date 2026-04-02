import copy

orig = [[1, 2, 3], [4, 5, 6]]
sh_copy = copy.copy(orig)

sh_copy[0][0] = 99
print(orig[0][0]) # Expected 1, but is 99
