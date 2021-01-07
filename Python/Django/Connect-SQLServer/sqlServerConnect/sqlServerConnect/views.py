from django.shortcuts import render
from sqlServerConnect.models import sqlServerConn
import pyodbc

def connSql(request):
    conn = pyodbc.connect('Driver={sql server};'
                          'Server=DESKTOP-60ILFM6\COMPAC;'
                          'Database=adCOM_GRUPO_SANTA_MARIA_SA;'
                          'Trusted_Connection=yes;')
    cursor = conn.cursor()
    cursor.execute("SELECT CIDCLIENTEPROVEEDOR CRAZONSOCIAL CRFC FROM admClientes")
    result = cursor.fetchall()
    return render(request, 'index.html', {'sqlServerConn' : result})