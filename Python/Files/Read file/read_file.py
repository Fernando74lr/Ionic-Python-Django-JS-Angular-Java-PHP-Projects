from random import randint
from io import open

letras = ['a', 'b', 'c', 'd', 'e']
randomletra = letras[randint(0,4)]


print("Letra random: ", randomletra)
print("")


archivo=open("final.txt", "r+")
texto = archivo.readlines()
numletra = 0
for linea in range(len(texto)):
    for letra in texto[linea]:
      if (letra == randomletra):
        numletra = numletra + 1

archivo.close()

print("La letra '", randomletra, "' se repite", numletra, "veces")
print("")
print("------------------------------- TEXTO ---------------------------")

if (numletra >= 0 and numletra <= 6):
  # Primeras 4 líneas
  for linea in range(4):
    print(texto[linea])
elif (numletra >= 7 and numletra <= 10):
  # Primeras 8 líneas
    for linea in range(8):
      print(texto[linea])
else:
  # Todo el texto
  for linea in range(len(texto)):
    print(texto[linea])
