
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

    # Execute command.
    e = service.events().insert(calendarId='primary', sendNotifications=True, body=EVENT).execute()

    # Show return of execution.
    print('')
    print(
        ''' %r event added:
        Start: %s
        End:   %s''' % (e['summary'].encode('utf-8'),
        e['start']['dateTime'], e['end']['dateTime']))