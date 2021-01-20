from django.shortcuts import render
from sqlServerConnect.models import sqlServerConn
import pyodbc
import os
from datetime import datetime

def formatDateToFilename():
    date = getDate()
    return date.replace(':', '.').replace(' ', '_')

def getDate():
    # Current Date
    return str(datetime.now()).split('.')[0]

def createCache(data):
    file = open(f'sqlServerConnect/cache/{formatDateToFilename()}.txt', 'w')
    file.write(prepareFile(data))
    file.close()
    print('\nFILE CREATED\n')

def prepareFile(data):
    # Each row represent an enterprise
    res = ''
    for i, enterprise in enumerate(data):
        for client in enterprise:
            res += str(client)
        if i + 1 != len(data):
            res += '\n'
    return res

def connSql(request):
    enterprises = [
        'adCOM_GRUPO_SANTA_MARIA_SA',
        'adCOM_KL_13_SERVICIOS_SA',
        'adCOM_YUNESGO_ASOCIADOS_S'
    ]
    
    server = 'DESKTOP-60ILFM6\\COMPAC' 
    # database = 'adCOM_GRUPO_SANTA_MARIA_SA' 
    username = 'sa' 
    password = 'Contpaqi1$'

    result = []

    for database in enterprises:
        conn = pyodbc.connect('DRIVER={sql server};'+
                            'SERVER=' + server + ';'+
                            'DATABASE=' + database + ';'+
                            'UID=' + username + ';'+
                            'PWD=' + password + ';')
        cursor = conn.cursor()
        cursor.execute("SELECT CIDCLIENTEPROVEEDOR, CRAZONSOCIAL, CRFC FROM admClientes")
        result.append(cursor.fetchall())

    print(result)
    createCache(result)

    return render(request, 'index.html', {'sqlServerConn' : result})