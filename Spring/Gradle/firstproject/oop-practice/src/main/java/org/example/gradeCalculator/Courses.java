package org.example.gradeCalculator;

import java.util.List;

public class Courses {
    private final List<Course> courses;

    public Courses(List<Course> courses) {
        this.courses = courses;
    }


    // 학점 * 성적의 총합을 구하는 메서드
    public double multiplyCreditAndCourseGrade() {
        return courses.stream() // 스트림을 통해 내부 반복을 이용한 방법
                .mapToDouble(Course::multiplyCreditAndCourseGrade)
                .sum();

        // 외부 반복을 이용한 방법
        /*double mutipliedCreditAndCourseGrade = 0;
        for (Course course : courses) { // courses(과목 객체 리스트)를 순회
            mutipliedCreditAndCourseGrade += course.multiplyCreditAndCourseGrade(); // cousrse의 학점과 성적을 곱한 값을 반환
        }
        return mutipliedCreditAndCourseGrade;*/
    }


    // 수강신청 총 학점수를 구하는 메서드
    public int calculateTotalComplatedCredit() {
        return courses.stream() // 스트림으로 변환
                .mapToInt(Course::getCredit)// Course 객체를 Stream으로 바꾸고 getCredit(학점)를 호출해서 getCredit를 int로 변경
                .sum(); // 이후 더함
    }
}
