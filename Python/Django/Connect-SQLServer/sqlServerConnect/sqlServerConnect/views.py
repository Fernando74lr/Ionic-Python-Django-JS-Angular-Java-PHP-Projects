from django.shortcuts import render
from sqlServerConnect.models import sqlServerConn
import pyodbc

def connSql(request):
    server = 'DESKTOP-60ILFM6\\COMPAC' 
    database = 'adCOM_GRUPO_SANTA_MARIA_SA' 
    username = 'sa' 
    password = 'Contpaqi1$' 
    conn = pyodbc.connect('DRIVER={sql server};'+
                          'SERVER=' + server + ';'+
                          'DATABASE=' + database + ';'+
                          'UID=' + username + ';'+
                          'PWD=' + password + ';')
    cursor = conn.cursor()
    cursor.execute("SELECT CIDCLIENTEPROVEEDOR, CRAZONSOCIAL, CRFC FROM admClientes")
    result = cursor.fetchall()
    return render(request, 'index.html', {'sqlServerConn' : result})