import requests
import json
response = requests.get('https://api.thedogapi.com/v1/breeds')
response_info = response.json()
response_info
with open('C:\\Users\\Virat Reddy\\Desktop\\GUVI_ASSIGNMENT\\API_DATA.txt', 'w') as file_list:
    file_list.write(str(response_info))
    
