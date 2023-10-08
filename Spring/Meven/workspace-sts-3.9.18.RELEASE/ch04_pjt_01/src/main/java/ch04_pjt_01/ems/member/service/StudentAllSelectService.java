package ch04_pjt_01.ems.member.service;

public class StudentAllSelectService {
	public void calculate(int fNum, int sNum, PringStudemtInformationService calculator) {
		// ICalculator 객체 주입
		int value = calculator.doOperation(fNum, sNum); // 연산 실행
		System.out.println("result : " + value);
	}
}