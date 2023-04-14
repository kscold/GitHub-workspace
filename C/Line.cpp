#include "Line.h"
#include <iostream>

Line::Line()
{
    a = 0;
    b = 0;
}

Line::Line(float a, float b)
{
    this->a = a;
    this->b = b;
}

void Line::PrintLine()
{
    std::cout << "기울기(a): " << a << ", y절편(b): " << b << std::endl;
}

Line Line::CalLine(float x1, float y1, float x2, float y2)
{
    float a = (y2 - y1) / (x2 - x1);
    float b = y1 - a * x1;
    Line result(a, b);
    return result;
}

void Line::Intersection(Line &l, float &x, float &y)
{
    x = (l.b - b) / (a - l.a);
    y = a * x + b;
}

Line::~Line()
{
    std::cout << "delete Line (기울기(a): " << a << ", y절편(b): " << b << ")" << std::endl;
}
