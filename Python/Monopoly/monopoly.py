import numpy as np

p = np.poly1d([1,1,1,1])
p2 = np.polyder(p)

print(p2)