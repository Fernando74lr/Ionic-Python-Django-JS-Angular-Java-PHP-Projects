'''
    Remember to install Google API:
        pip install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib
'''

from __future__ import print_function
import datetime
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/calendar']


def main():
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    service = build('calendar', 'v3', credentials=creds)

    # CREATING EVENTS

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

if __name__ == '__main__':
    main()