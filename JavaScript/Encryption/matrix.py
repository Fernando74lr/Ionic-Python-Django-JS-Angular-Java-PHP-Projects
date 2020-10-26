import numpy as np

dictionary = {
    " " : "0",
    "a" : "1",
    "b" : "2",
    "c" : "3",
    "d" : "4",
    "e" : "5",
    "f" : "6",
    "g" : "7",
    "h" : "8",
    "i" : "9",
    "j" : "10",
    "k" : "11",
    "l" : "12",
    "m" : "13",
    "n" : "14",
    "o" : "15",
    "p" : "16",
    "q" : "17",
    "r" : "18",
    "s" : "19",
    "t" : "20",
    "u" : "21",
    "v" : "22",
    "w" : "23",
    "x" : "24",
    "y" : "25",
    "z" : "26" 
    }

def messageToCode(message):
    messageNumber = []
    for letter in message.lower():
        messageNumber.append(dictionary.get(letter))
    return messageNumber

def codeToMessage(code):
    codeMessage = []
    for num in code.split(','):
        for key, value in dictionary.items():
            if num == value:
                codeMessage.append(key)
    message = ''
    return message.join(codeMessage)

# Create vectors of the same # of rows
def makeVectors(code, size):
    vectors = []
    # print('Code size: ', len(code))
    # print('Columns size: ', size)
    # print(int(len(code)/size))
    s = ';' # Separate by rows
    for i in range(int(len(code)/size)):
        vectors.append(np.matrix(s.join(code[0:size])))
        del code[0:size]
    return vectors

def matrixTimesVectors(matrix, vectors):
    newVectors = []
    for vector in vectors:
        # print('\nMatrix: \n', matrix)
        # print('Vector: \n', vector)
        newVectors.append(np.dot(matrix, vector))
        # print('NewVector: \n', np.dot(matrix, vector), '\n')
    return newVectors

def getCode(newVectors):
    code = []
    s = ','
    for vector in newVectors:
        for row in vector:
            #for num in str(row):
            code.append(str(int(row)))
    return s.join(code)

def printVectors(vectors):
    for vector in vectors:
        print(vector, '\n')

class Matrix():
    def createMatrix(self, np):
        return np.matrix(str(input("\nMatrix ('1,2; 3,4; ...'): ")))

    def getDeterminant(self, np, matrix):
        return np.linalg.det(matrix)

    def getInverse(self, np, matrix):
        return np.linalg.inv(matrix)

m = Matrix()
# Create Matrix
# Read the inverse of the matrix
matrixText = str(input("\nMatrix ('1,2; 3,4; ...'): "))
# Create the inverse of the matrix
matrix = np.matrix(matrixText)
# Matrix dimensions
rows = len(matrix) 
columns = len(matrixText.split(';')[0].split(','))
# Get the inverse
# inverse = m.getInverse(np, matrix)
print('\n', matrix, '\n')
# Decision
option = int(input('Codificar (1) || Decodificar (2) || Decodificación simple (3): '))
if option == 1:
    # Get message and turn it into code
    code = messageToCode(input('\nMensaje a codificar: ')) # 'hola' -> [8,15,12,1]
    # Create vectors (separate)
    vectors = makeVectors(code, columns) # [[8,15], [12,1]]
    # Get the new vectors (encrypte)
    newVectors = matrixTimesVectors(matrix, vectors) # [[4,2], [6,7]]
    # Get all the code in one array
    messageEncrypted = getCode(newVectors) # [4,2,6,7]
    print('MESSAGE ENCRYPTED: ', messageEncrypted)
elif option == 2:
    code = input('\nCódigo: ') # '8,15,12,1,0,6,5,18'
    # Read the inverse of the matrix
    inverse = str(input("\nInversa ('1,2; 3,4; ...'): "))
    # Create the inverse of the matrix
    matrixInversed = np.matrix(inverse)
    # Num of columns
    colInverse = len(inverse.split(';')[0].split(','))
    vectors = makeVectors(code.split(','), colInverse)
    # Print vectors
    print('\n VECTORS \n')
    printVectors(vectors)
    messageDecrypted = matrixTimesVectors(matrixInversed, vectors)
    # Print decrypted vectors (result)
    print('\n DECRYPTED VECTORS (RESULTS) \n')
    printVectors(messageDecrypted)
    print('MESSAGE DECRYPTED: ', codeToMessage(getCode(messageDecrypted)))
elif option == 3:
    print(codeToMessage(str(input('Código: '))))

'''
TEST

original
1,-2,2;-1,1,3;1,-1,-4

inversa
-1,-10,-8;-1,-6,-5;0,-1,-1
'''
