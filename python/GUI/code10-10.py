from tkinter import *

window = Tk()

btnList = [None] * 3

for i in range(3):
    btnList[i] = Button(window, text="버튼" + str(i + 1))

for btn in btnList:
    # btn.pack(side=RIGHT)
    # btn.pack(side=TOP)
    # btn.pack(side=BOTTOM)
    # btn.pack(side=TOP, fill=X)
    # btn.pack(side=TOP, fill=X, padx=10, pady=10)  # 마진 설정
    # btn.pack(side=TOP, fill=X, ipadx=10, ipady=10)  # 패딩 설정
    btn.pack(side=TOP, fill=X, ipadx=10, ipady=10, padx=10, pady=10)  # 패딩 설정


window.mainloop()
