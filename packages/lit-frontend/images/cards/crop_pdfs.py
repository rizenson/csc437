
from PyPDF2 import PdfWriter, PdfReader
from pdf2image import convert_from_path
import os 

def cropImage(topX, bottom_y, bottomX, top_y):
    page.mediabox.lower_left = (topX, bottom_y)
    page.mediabox.lower_right = (bottomX, bottom_y)
    page.mediabox.upper_left = (topX, top_y)
    page.mediabox.upper_right = (bottomX, top_y)
    filename = "6_skeleton_" + '{0:06b}'.format(binaryNum)[::-1] + ".png"
    output.add_page(page)
    with open("out.pdf", "wb") as out_f:
        output.write(out_f)
    images = convert_from_path('out.pdf', 700)
    for i, image in enumerate(images):
        image.save(filename)
    os.remove("out.pdf")

with open("6_skeleton.pdf", "rb") as in_f:
    num = 6
    input1 = PdfReader(in_f)
    output = PdfWriter()

    numPages = len(input1.pages)
    print ("document has %s pages." % numPages)
    binaryNum = 1
    for i in range(numPages):
        page = input1.pages[i]
        
        if(binaryNum != 2**num):
            topX = 14
            bottom_y = 575
            bottomX = topX + 171
            top_y = bottom_y + 250
            cropImage(topX, bottom_y, bottomX, top_y)
            binaryNum += 1
        if(binaryNum != 2**num):
            topX = 200
            bottom_y = 575
            bottomX = topX + 171
            top_y = bottom_y + 250
            cropImage(topX, bottom_y, bottomX, top_y)
            binaryNum += 1
        if(binaryNum != 2**num):
            topX = 386
            bottom_y = 575
            bottomX = topX + 171
            top_y = bottom_y + 250
            cropImage(topX, bottom_y, bottomX, top_y)
            binaryNum += 1
        if(binaryNum != 2**num):
            topX = 14
            bottom_y = 325
            bottomX = topX + 171
            top_y = bottom_y + 250
            cropImage(topX, bottom_y, bottomX, top_y)
            binaryNum += 1
        if(binaryNum != 2**num):
            topX = 200
            bottom_y = 325
            bottomX = topX + 171
            top_y = bottom_y + 250
            cropImage(topX, bottom_y, bottomX, top_y)
            binaryNum += 1
        if(binaryNum != 2**num):
            topX = 386
            bottom_y = 325
            bottomX = topX + 171
            top_y = bottom_y + 250
            cropImage(topX, bottom_y, bottomX, top_y)
            binaryNum += 1
        if(binaryNum != 2**num):
            topX = 14
            bottom_y = 75
            bottomX = topX + 171
            top_y = bottom_y + 250
            cropImage(topX, bottom_y, bottomX, top_y)
            binaryNum += 1
        if(binaryNum != 2**num):
            topX = 200
            bottom_y = 75
            bottomX = topX + 171
            top_y = bottom_y + 250
            cropImage(topX, bottom_y, bottomX, top_y)
            binaryNum += 1
        if(binaryNum != 2**num):
            topX = 386
            bottom_y = 75
            bottomX = topX + 171
            top_y = bottom_y + 250
            cropImage(topX, bottom_y, bottomX, top_y)
            binaryNum += 1
