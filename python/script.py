from PIL import Image

import pytesseract
import sys
import json

json_string = pytesseract.image_to_string(Image.open(sys.argv[1]))

json_data = {
    "image_data": json_string
}

with open("data.json", "w") as f:
    json.dump(json_data, f)