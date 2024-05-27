from tkinter import *
from tkinter import messagebox


def myFunc():
    messagebox.showinfo("고양이 버튼", "고양이입니다.")


window = Tk()

photo = PhotoImage(file="./cat.gif")
button1 = Button(window, image=photo, command=myFunc)

button1.pack()

window.mainloop()
