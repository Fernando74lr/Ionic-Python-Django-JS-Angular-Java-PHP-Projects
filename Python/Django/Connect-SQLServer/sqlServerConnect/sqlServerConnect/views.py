from django.shortcuts import render
from sqlServerConnect.models import sqlServerConn
import pyodbc

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


    return render(request, 'index.html', {'sqlServerConn' : result})