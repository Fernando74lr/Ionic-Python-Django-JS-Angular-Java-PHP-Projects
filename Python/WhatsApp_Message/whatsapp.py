from selenium import webdriver
import time

# This will open Chrome
driver = webdriver.Chrome("C:/Users/Fer/.wdm/drivers/chromedriver/win32/87.0.4280.88/chromedriver.exe")
# Get the URL 
driver.get('https://web.whatsapp.com/')

# Get the date from the user that we want to post
name = "Test" #input('Enter the name of user or group: ')
# Get the message
message = input('Enter your message: ')
# How many time do I want to send the message
count = 10 #int(input('Enter the count: '))

input('Enter anything after scanning QR code')

user = driver.find_element_by_xpath('//span[@title = "{}"]'.format(name))
user.click()

msg_box = driver.find_element_by_class_name('DuUXI')

for i in range(count):
    msg_box.send_keys(message)
    # button = driver.find_elements_by_tag_name('button')[5]
    driver.find_element_by_class_name('_2Ujuu').click()