package org.example.calculate.logic;

public class DivisionOperator implements NewArithmeticOperator {
    @Override
    public boolean supports(String opearator) {
        return "/".equals(opearator);
    }

    @Override
    public int calculate(PositiveNumber operand1, PositiveNumber operand2) {

        return operand1.toInt() / operand2.toInt();
    }

}
