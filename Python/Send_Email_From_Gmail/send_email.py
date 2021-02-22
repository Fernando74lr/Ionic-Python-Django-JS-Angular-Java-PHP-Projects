import smtplib
import config


def send_email(subject, msg):
    EMAIL_ADRESS = ''
    PASSWORD = ''
    try:
        server = smtplib.SMTP('smtp.gmail.com:587')
        server.ehlo()
        server.starttls()
        server.login(EMAIL_ADRESS, PASSWORD)
        message = 'Subject: {}\n\n{}'.format(subject, msg)
        server.sendmail(EMAIL_ADRESS, EMAIL_ADRESS, message)
        server.quit()
        print('Success: Email sent!')
    except:
        print('Email failed to send.')

subject = 'This is the subject'
msg = 'Hello there! How are you today?'

send_email(subject, msg)
