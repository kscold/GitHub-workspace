from tkinter import *
from tkinter import messagebox

window = Tk()


def myFunc():
    if chk.get() == 0:
        messagebox.showinfo("", "체크버튼이 꺼졌어요.")
    else:
        messagebox.showinfo("", "체크버튼이 켜졌어요.")


chk = IntVar()  # 정수형 타입의 변수 생성함수
cb1 = Checkbutton(window, text="클릭하세요", variable=chk, command=myFunc)

cb1.pack()

window.mainloop()
