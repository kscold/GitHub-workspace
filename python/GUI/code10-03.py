from tkinter import *

window = Tk()

label1 = Label(window, text="COOKBOOK ~~ Python을")
label2 = Label(window, text="열심히", font=("궁서체", 30), fg="blue")
label3 = Label(
    window, text="공부 중입니다.", bg="magenta", width=20, height=5, anchor=SE
)

label1.pack()  # pack의 경우 개발자가 맘대로 설정할 수가 없음
label2.pack()
label3.pack()

window.mainloop()
