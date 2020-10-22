
# Matrix
print('\nDimensiones de la matriz\n')
m = int(input('m:'))
n = int(input('n:'))

matrix = []

def fillMatrix():
    for i in range(m):
        matrix.append([0]*n)

    for i in range(m):
        for j in range(n):
            num = input('(' + str(i+1) + ',' + str(j+1) + '): ')
            matrix[i][j] = int(num)

def showMatrix():
    print("\nMatriz\n")
    for row in matrix:
        for num in row:
            print("\t", num, end=" ")
        print()

'''
def getDeterminant():
    for i in range(m):
        for j in range(n):
            if (i > 0 and matrix[i][j] != 0):

            # matrix[i][j] = int(num)
'''
fillMatrix()
showMatrix()







