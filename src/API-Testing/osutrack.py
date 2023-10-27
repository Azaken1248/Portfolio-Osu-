import requests

def get_username(user_id, mode):
    url = f"https://osutrack-api.ameo.dev/update?user={user_id}&mode={mode}"
    response = requests.post(url)
    if response.status_code == 200:
        data = response.json()
        return data['username']
    else:
        print(f"Error retrieving data. Status code: {response.status_code}")
        return None

user_id = 22938255
mode = 0

username = get_username(user_id, mode)

if username is not None:
    print(f"Username for user ID {user_id}: {username}")
else:
    print("Failed to retrieve data.")
