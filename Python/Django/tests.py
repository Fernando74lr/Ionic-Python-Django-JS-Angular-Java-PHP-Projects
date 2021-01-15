import locale
import time
import datetime

def formatDate():
    months = {
        '01' : 'Enero',
        '02' : 'Febrero',
        '03' : 'Marzo',
        '04' : 'Abril',
        '05' : 'Mayo',
        '06' : 'Junio',
        '07' : 'Julio',
        '08' : 'Agosto',
        '09' : 'Septiembre',
        '10' : 'Octubre',
        '11' : 'Noviembre',
        '12' : 'Diciembre'
    }

    today = datetime.datetime.now()
    date = today.strftime('%d')
    month = str(today.strftime('%m'))

    for key, value in months.items():
        if key == month:
            month = value

    year = today.strftime('%Y')
    return f'{date} DE {month.upper()} DEL {year}'

print('\n' + formatDate())

# # ID CLIENTE | CORPORACIÓN | RAZÓN SOCIAL | RFC | ID | AGENTE VENTA | FECHA ALTA | ESTATUS | BASE DE DATOS
# dimensions = [9.57, 22.43, 65, 15.43, 16.14, 16.43, 7.86, 31,86]