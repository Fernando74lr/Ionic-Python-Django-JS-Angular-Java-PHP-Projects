import datetime

# CRUD FUNCTIONS

# QUICK EVENT
def quickAdd(service, event):
    created_event = service.events().quickAdd(calendarId='primary', text=event).execute()
    # Message return execution.
    print('Added quick event:', created_event['id'])

# CREATE EVENTS
def createEvent(service, eventTitle, startDateTime, endDateTime):
    # Define time zone.
    GMT_OFF = '-05:00' # PDT/MST/GMT-5
    startDateTime += GMT_OFF
    endDateTime += GMT_OFF

    # Set the event.
    EVENT = {
        'summary':eventTitle,
        'start': {'dateTime': startDateTime},
        'end': {'dateTime': endDateTime}
    }

    # Add new event.
    e = service.events().insert(calendarId='primary', sendNotifications=True, body=EVENT).execute()

# READ EVENTS
def readEvents(service):
    # Get the current time.
    now = datetime.datetime.utcnow().isoformat() + 'Z' # 'Z' indicates UTC time

    # Get all the first 10 events.
    events_result = service.events().list(calendarId='primary', timeMin=now, maxResults=10, singleEvents=True, orderBy='startTime').execute()
    # Put events in an array.
    events = events_result.get('items', [])

    return events
    # Display events if there exist.
    '''
    if not events:
        print('No upcoming events found.')
    for event in events:
        start = event['start'].get('dateTime', event['start'].get('date'))
        print(start, event['summary'])
    '''

# UPDATE EVENTS
def updateEvent(service, event_id, titleUpdate):
    # Get the event we want to update by id.
    event = service.events().get(calendarId='primary', eventId=event_id).execute()

    # Set the new title summary.
    event['summary'] = titleUpdate
    # Update event.
    updated_event = service.events().update(calendarId='primary', eventId=event['id'], body=event).execute()

    # Message return execution.
    print('UPDATED COMPLETE: ', updated_event['updated'])

# DELETE EVENTS
def deleteEvent(service, event_id):
    # Get and delete the event we want by id.
    service.events().delete(calendarId='primary', eventId=event_id).execute()

    # Message return execution.
    print('DELETED')
