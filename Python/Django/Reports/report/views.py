from django.shortcuts import render
from .models import SqlServerConn
from .data.secret.credentials import server, username, password
import pyodbc

query_cache = []

def reports(request):
    # clients = get_clients(request)
    return render(request, 'report/reports.html')#, {'SqlServerConn' : clients})

def get_clients(request):
    enterprises = [
        'adCOM_GRUPO_SANTA_MARIA_SA',
        'adCOM_KL_13_SERVICIOS_SA',
        'adCOM_YUNESGO_ASOCIADOS_S'
    ]

    global query_cache
    result = []

    if len(query_cache) == 0:
        print("\nGETTING DATA\n")

        for database in enterprises:
            conn = pyodbc.connect('DRIVER={sql server};'+
                                'SERVER=' + server + ';'+
                                'DATABASE=' + database + ';'+
                                'UID=' + username + ';'+
                                'PWD=' + password + ';')
            cursor = conn.cursor()
            cursor.execute("SELECT "+
                        "CIDCLIENTEPROVEEDOR, CRAZONSOCIAL, CRFC,"+
                        "CFECHAALTA, CESTATUS, CIDAGENTEVENTA "+
                        "FROM admClientes")
            temp = []
            for query in cursor.fetchall():            
                query = list(query)
                query.insert(0, database.replace('adCOM_', '').replace('_', ' '))
                query.insert(0, database)
                temp.append(query)
            result.append(temp)
        
        query_cache = result
    else:
        print("\nUSING CACHE\n")
        result = query_cache
    
    if len(result) == 3:
        print("\nALL RIGHT\n")
    else:
        print("SOMETHING WENT WRONG")

    # return result
    return render(request, 'report/reports.html', {'SqlServerConn' : result})