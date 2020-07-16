from res.functions import createEvent, deleteEvent, readEvent, updateEvent, quickAdd
from res.connection import service

def main():
    # CREATE
     createEvent(service)

    # READ
     readEvent(service)

    # UPDATE
     updateEvent(service)

    # DELETE
     deleteEvent(service)
    
    # QUICK EVENT
     quickAdd(service)

if __name__ == '__main__':
    main()
