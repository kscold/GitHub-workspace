package ch04_pjt_01.ems.utils;

import ch04_pjt_01.ems.member.service.PrintStudentInformationService;

public class InitSampleData {
//	private String[] sNums = { "hbs001", "hbs002", "hbs003", "hbs004", "hbs005" };
	private String[] sNums;
//	private String[] sIds = { "rabbit", "hippo", "raccoon", "elephant", "lion" };
	private String[] sIds;
//	private String[] sPws = { "96539", "64875", "15284", "48765", "28661" };
	private String[] sPws;
//	private String[] sNames = { "agatha", "barbara", "chris", "doris", "elva" };
	private String[] sNames;
//	private int[] sAges = { 19, 22, 20, 27, 19 };
	private int[] sAges;
//	private char[] sGenders = { 'M', 'W', 'W', 'M', 'M' };
	private char[] sGenders;
//	private String[] sMajors = { "English Literature", "Korean Language and Literature",
//			"French Language and Literature", "Philosophy", "History", };
	private String[] sMajors;
	
	public String[] getsNums() {
		return sNums;
	}
	public void setsNums(String[] sNums) {
		this.sNums = sNums;
	}
	
	public String[] getsIds() {
		return sIds;
	}
	public void setsIds(String[] sIds) {
		this.sIds = sIds;
	}
	
	public String[] getsPws() {
		return sPws;
	}
	public void setsPws(String[] sPws) {
		this.sPws = sPws;
	}
	
	public String[] getsNames() {
		return sNames;
	}
	public void setsNames(String[] sNames) {
		this.sNames = sNames;
	}
	
	public int[] getsAges() {
		return sAges;
	}
	public void setsAges(int[] sAges) {
		this.sAges = sAges;
	}
	
	public char[] getsGenders() {
		return sGenders;
	}
	public void setsGenders(char[] sGenders) {
		this.sGenders = sGenders;
	}
	
	public String[] getsMajors() {
		return sMajors;
	}
	public void setsMajors(String[] sMajors) {
		this.sMajors = sMajors;
	}
	
}