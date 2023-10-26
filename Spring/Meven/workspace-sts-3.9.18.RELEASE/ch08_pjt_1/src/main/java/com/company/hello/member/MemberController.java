package com.company.hello.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MemberController {
	
	@Autowired
	MemberService memberService;

	@RequestMapping("/signUp")
	public String signUp() {
		return "sign_up";
	}

	@RequestMapping("/signIn")
	public String signIn() {
		return "sign_in";
	}
	
	@RequestMapping("/signUpConfirm")
	public String signUpConfirm(MemberVo memberVo) {
		System.out.println("[MemberController] signUpconfirm()");
		
		System.out.println("m_id: " + memberVo.getM_id());
		System.out.println("m_pw: " + memberVo.getM_pw());		
		System.out.println("m_mail: " + memberVo.getM_mail());
		System.out.println("m_phone: " + memberVo.getM_phone());
		
		memberService.SignUpCofirm(memberVo);

		return "sign_up_ok";
	}
	
	@RequestMapping("/signInConfirm")
	public String signInConfirm(MemberVo memberVo) {
		System.out.println("[MemberController] signInConfirm()");
		
		MemberVo signInedMember = memberService.SignInCofirm(memberVo);
		
		return null;
	}
}
