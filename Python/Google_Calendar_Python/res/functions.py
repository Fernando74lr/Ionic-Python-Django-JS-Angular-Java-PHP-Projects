import datetime

# QUICK EVENT
def quickAdd(service):
    created_event = service.events().quickAdd(calendarId='primary', text='Appointment at Somewhere 11:20pm-11:25pm').execute()
    # Message return execution.
    print('Added quick event:', created_event['id'])

# CREATING EVENTS
def createEvent(service):
    event_title = input('Event title: ')
    s_dateTime = input('Date and time start: ') # 2020-07-01T19:00:00
    e_dateTime = input('Date and time end: ')

    # Define time zone.
    GMT_OFF = '-05:00' # PDT/MST/GMT-5
    s_dateTime += GMT_OFF
    e_dateTime += GMT_OFF

    # Set the event.
    EVENT = {
        'summary':event_title,
        'start': {'dateTime': s_dateTime},
        'end': {'dateTime': e_dateTime}
    }

    # Add new event.
    e = service.events().insert(calendarId='primary', sendNotifications=True, body=EVENT).execute()

    # Message return execution.
    print('')
    print(
        ''' %r event added:
        Start: %s
        End:   %s''' % (e['summary'].encode('utf-8'),
        e['start']['dateTime'], e['end']['dateTime']))

# READ EVENTS
def readEvent(service):
    # Get the current time.
    now = datetime.datetime.utcnow().isoformat() + 'Z' # 'Z' indicates UTC time

    # Get all the first 10 events.
    events_result = service.events().list(calendarId='primary', timeMin=now, maxResults=10, singleEvents=True, orderBy='startTime').execute()
    # Put events in an array.
    events = events_result.get('items', [])

    # Display events if there exist.
    if not events:
        print('No upcoming events found.')
    for event in events:
        start = event['start'].get('dateTime', event['start'].get('date'))
        print(start, event['summary'], '| id: ', event['id'])

# UPDATE EVENTS
def updateEvent(service):
    # Get the event we want to update by id.
    event = service.events().get(calendarId='primary', eventId='p7j16fs6atoprrege13ulj51a4').execute()

    # Set the new title summary.
    event['summary'] = 'Update'
    # Update event.
    updated_event = service.events().update(calendarId='primary', eventId=event['id'], body=event).execute()

    # Message return execution.
    print('UPDATED COMPLETE: ', updated_event['updated'])

# DELETING EVENTS
def deleteEvent(service):
    # Get and delete the event we want by id.
    service.events().delete(calendarId='primary', eventId='53q40id6ljtcujvak2o1d2o5o9').execute()

    # Message return execution.
    print('DELETED')

