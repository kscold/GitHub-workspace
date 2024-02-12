package org.example;

import org.example.RequsetLine;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class RequsetLineTest {

    @Test
    void create() {
        RequsetLine requestLine = new RequsetLine("GET /calculate?operand1=11&operator=*&operand2=55 HTTP/1.1");

        assertThat(requestLine).isNotNull();
        assertThat(requestLine).isEqualTo(new RequsetLine("GET", "/calculate", "operand1=11&operator=*&operand2=55"));

    }
}
