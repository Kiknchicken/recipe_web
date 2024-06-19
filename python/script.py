from PIL import Image

import pytesseract
import sys 

string = pytesseract.image_to_string(Image.open(sys.argv[1]))