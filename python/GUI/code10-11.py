from tkinter import *
from PIL import Image, ImageTk
from random import *

btnList = [None] * 9
fnameList = []
for i in range(1, 10):
    fnameList.append(f"./apple/{i}.gif")

shuffle(fnameList)
print(fnameList)
photoList = [None] * 9
i, k = 0, 0
xPos, yPos = 0, 0
num = 0

window = Tk()
window.geometry("210x210")


# 이미지 크기 고정 설정
img_width, img_height = 70, 70

for i in range(0, 9):
    img = Image.open(fnameList[i])
    img = img.resize((img_width, img_height), Image.LANCZOS)
    photoList[i] = ImageTk.PhotoImage(img)
    btnList[i] = Button(window, image=photoList[i], bg="white")

for i in range(0, 3):
    for k in range(0, 3):
        btnList[num].place(x=xPos, y=yPos)
        num += 1
        xPos += img_width
    xPos = 0
    yPos += img_height

window.mainloop()
