from PIL import Image
from io import BytesIO

import pytesseract
import sys
import json
import requests

response = requests.get(sys.argv[1])

json_string = pytesseract.image_to_string(Image.open(BytesIO(response.content)))

json_data = {
    "image_data": json_string
}

with open("data.json", "w") as f:
    json.dump(json_data, f)