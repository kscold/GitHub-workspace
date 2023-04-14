#pragma once

class Line
{
private:
    float a; // 기울기
    float b; // y절편

public:
    Line();                                               // 기본 생성자
    Line(float a, float b);                               // 기울기(a), y절편(b) 값을 초기화하는 생성자
    void PrintLine();                                     // 1차 함수 정보를 출력하는 함수
    void calFunc(float *x) { *x = a * (*x) + b; }         // 함수 결과를 계산하여 x에 저장하는 inline 함수 | 주소에 의한 호출
    Line CalLine(float x1, float y1, float x2, float y2); // 두 점을 입력받아 1차 함수식을 계산하여 Line 클래스 객체로 반환하는 함수 선언
    void Intersection(Line &l, float &x, float &y);       // 두 직선의 교점을 계산하는 함수
    ~Line();                                              // 소멸자
};