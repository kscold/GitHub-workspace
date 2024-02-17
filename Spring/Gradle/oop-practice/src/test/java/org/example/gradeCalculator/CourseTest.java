package org.example.gradeCalculator;


import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThatCode;

public class CourseTest {

    @DisplayName("과목(코스)를 생성한다.")
    @Test
    void createTest() {
        assertThatCode(() -> new Course("OOP", 3, "A+")) // 교과목 객체를 설계, 교과목 이름, 몇학점, 성적
                .doesNotThrowAnyException(); // 해당 테스트에서는 어떠한 오류도 발생하지 않음


    }
}
