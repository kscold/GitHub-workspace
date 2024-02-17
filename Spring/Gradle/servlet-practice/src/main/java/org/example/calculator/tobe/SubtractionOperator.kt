package org.example.calculator.tobe

import org.example.calculator.domain.PositiveNumber

class SubtractionOperator : ArithmeticOperator {
    override fun supports(operator: String): Boolean {
        return "-" == operator
    }

    override fun calculate(operand1: PositiveNumber, operand2: PositiveNumber): Int {
        return operand1.toInt() - operand2.toInt()
    }
}