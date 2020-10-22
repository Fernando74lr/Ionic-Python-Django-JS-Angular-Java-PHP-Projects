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

def makeVectors(code, size):
    vectors = []
    print('Code size: ', len(code))
    print('Columns size: ', size)
    print(int(len(code)/size))
    s = ';' # Separate by rows
    for i in range(int(len(code)/size)):
        vectors.append(np.matrix(s.join(code[0:size])))
        del code[0:size]
    return vectors

def getNumOfColumns(row):
    i = 0
    for column in str(row):
        if column.isnumeric():
            i+=1
    return i

def matrixTimesVectors(matrix, vectors):
    newVectors = []
    for vector in vectors:
        # print('\nMatrix: \n', matrix)
        # print('Vector: \n', vector)
        newVectors.append(np.dot(matrix, vector))
        print('NewVector: \n', np.dot(matrix, vector), '\n')
    return newVectors

def getCode(newVectors):
    code = []
    s = ','
    for vector in newVectors:
        for row in vector:
            #for num in str(row):
            code.append(str(int(row)))
    return s.join(code)

class Matrix():
    def createMatrix(self, np):
        return np.matrix(str(input("\nMatrix ('1,2; 3,4; ...'): ")))

    def getDeterminant(self, np, matrix):
        return np.linalg.det(matrix)

    def getInverse(self, np, matrix):
        return np.linalg.inv(matrix)

m = Matrix()
matrix = m.createMatrix(np)
inverse = m.getInverse(np, matrix)
code = messageToCode('pasame la cinco') # '8,15,12,1,0,6,5,18'
# print(matrix)
rows = len(matrix)
columns = getNumOfColumns(matrix[0])
vectors = makeVectors(code, columns)

newVectors = matrixTimesVectors(matrix, vectors)
print(getCode(newVectors))
codeA = getCode(newVectors)


Inversaaa = str(input("\nMatrix ('1,2; 3,4; ...'): "))
matrixInversed = np.matrix(Inversaaa)
theOnes = makeVectors(codeA.split(','), len(Inversaaa.split(';')[0].split(',')))
vectoress = matrixTimesVectors(matrixInversed, theOnes)


for vector in vectoress:
    print(vector, '\n')

print(getCode(vectoress))
print('MESSAGE: ', codeToMessage(getCode(vectoress)))
'''
for vector in newVectors:
    print(vector, '\n')
'''
#print('\n', inverse)

'''
TEST

original
1,-2,2;-1,1,3;1,-1,-4

inversa (arreglar problema flotantes)
-1,-10,-8;-1,-6,-5;0,-1,-1
'''