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
<<<<<<< HEAD
    # deleteEvent(service)

=======
    deleteEvent(service)
    
>>>>>>> d284e008146331b5e74e6fd6634d0e15dd45be27
    # QUICK EVENT
    quickAdd(service)

if __name__ == '__main__':
    main()
