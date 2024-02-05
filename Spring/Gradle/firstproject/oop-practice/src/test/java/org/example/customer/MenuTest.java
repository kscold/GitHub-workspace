package org.example.customer;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.awt.*;
import java.util.List;

public class MenuTest {
    @DisplayName("메뉴이름에 해당하는 메뉴를 반환한다.")
    @Test
    void chooseTest() {
        Menu menu = new Menu(List.of(new MeniItem("돈까스", 5000), new MeniItem("돈까스", 5000)));
    }
}
