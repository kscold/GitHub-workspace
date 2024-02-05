package org.example.customer;


import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class CookingTest {
    @DisplayName("메뉴에 해당하는 음식을 만든다.")
    @Test
    void makeCookTest() {
        Cooking cooking = new Cooking(); // 요리사 인스턴스 생성
        MeniItem meniItem = new MeniItem("돈까스", 5000); // 메뉴 인스턴스 생성

        Cook cook = cooking.makeCook(meniItem); // 메뉴를 요리사 메서드에 위임

        assertThat(cook).isEqualTo(new Cook("돈까스", 5000));
    }
}
