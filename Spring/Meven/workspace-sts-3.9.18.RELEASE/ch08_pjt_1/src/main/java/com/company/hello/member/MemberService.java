package com.company.hello.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
	
	@Autowired
	MemberDao memberDao;
	
	public int SignUpCofirm(MemberVo memberVo) {
		System.out.println("[MemberService] signUpConfirm()");
		
		System.out.println("m_id: " + memberVo.getM_id());
		System.out.println("m_pw: " + memberVo.getM_pw());
		System.out.println("m_id: " + memberVo.getM_mail());
		System.out.println("m_id: " + memberVo.getM_phone());
		
		memberDao.insertmember(memberVo);
		
		return 0;
	}
	
	public MemberVo SignInCofirm(MemberVo memberVo) {
		System.out.println("[MemberService] signInConfirm()");
		
		return null;
	}
}
