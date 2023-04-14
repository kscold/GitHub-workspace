#include <iostream>
#include "Line.h"
using namespace std;

int main()
{
    Line *lArr;
    lArr = new Line[2];
    lArr[0].PrintLine();

    float x1, y1, x2, y2;
    cout << "첫번째 좌표(x1, y1)를 입력하시오: ";
    cin >> x1 >> y1;
    cout << "두번째 좌표(x2, y2)를 입력하시오: ";
    cin >> x2 >> y2;

    Line l1;
    l1 = lArr[1].CalLine(x1, y1, x2, y2);
    l1.PrintLine();

    Line *l2 = new Line(2.0f, 3.0f);
    l2->PrintLine();
    float val = 3.0f;
    l2->calFunc(&val);
    cout << "1차 함수 f(3): " << val << endl;

    l2->Intersection(l1, x1, x2);
    cout << "두 직선의 교점 (x, y): (" << x1 << ", " << x2 << ")" << endl;

    delete[] lArr;
    delete l2;

    return 0;
}
