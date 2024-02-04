package org.example.gradeCalculator;

import java.util.List;

public class GradeCalculator {
    private final Courses courses;


    /*public GradeCalculator(List<Course> courses) {
        this.courses = new Courses(courses);
    }*/

    public GradeCalculator(Courses courses) {
        this.courses = courses;
    }

    /*
     * 요구사항
     * 평균학점 계산 방법 = (학점수x교과목 평점)의 합계 / 수강신청 총학점 수
     * 3 * A+
     * 일급 컬렉션 사용
     */
    public double calculateGrade() {
        // (학점수 x 교과목 평점(성적))의 합계
        double totoalMultipliedCreditAndCourseGrade = courses.multiplyCreditAndCourseGrade();

        // 수강신청 총학점 수
        int totalCompletedCredit = courses.calculateTotalComplatedCredit();


        return totoalMultipliedCreditAndCourseGrade / totalCompletedCredit;
    }
}
