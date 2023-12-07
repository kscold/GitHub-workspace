//
//  ViewController.swift
//  Web
//
//  Created by 김승찬 on 12/6/23.
//

import UIKit
import WebKit

class ViewController: UIViewController, WKNavigationDelegate {
    @IBOutlet var txtUrl: UITextField!
    @IBOutlet var myWebView: WKWebView!
    @IBOutlet var myActivityIndiactor: UIActivityIndicatorView!

    func loadWebPage(_ url: String) {
        let myUrl = URL(string: url)
        let myRequest = URLRequest(url: myUrl!)

        myWebView.load(myRequest)
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.

        myWebView.navigationDelegate = self
        self.loadWebPage("http://www.google.com")
    }

    func webView(_ webView: WKWebView, didCommit navigation: WKNavigation!) {
        myActivityIndiactor.startAnimating()
        myActivityIndiactor.isHidden = false
    }

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        myActivityIndiactor.stopAnimating()
        myActivityIndiactor.isHidden = true
    }

    func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
        myActivityIndiactor.stopAnimating()
        myActivityIndiactor.isHidden = true
    }

    func checkUrl(_ url: String) -> String {
        var strUrl = url
        let flag = strUrl.hasPrefix("http://")

        if !flag {
            strUrl = "http://" + strUrl
        }

        return strUrl
    }

    @IBAction func btnGotoUrl(_ sender: UIButton) {
        let myUrl = self.checkUrl(txtUrl.text!)

        txtUrl.text = ""
        loadWebPage(myUrl)
    }

    @IBAction func btnGoSite1(_ sender: UIButton) {
        loadWebPage("http://www.smu.ac.kr")
    }

    @IBAction func btnGoSite2(_ sender: UIButton) {
        loadWebPage("http://software.smu.ac.kr")
    }

    @IBAction func btnLoadHtmlString(_ sender: UIButton) {
        let htmlString = """
<h1> HTML String </h1>
<p> HTML String을 이용한 웹 페이지 </p>
<p><a href=\"http://www.smu.ac.kr\">상명대학교</a>로 이동</p>
<p><a href=\"http://software.smu.ac.kr\">상명대학교</a>로 이동</p>
"""
        myWebView.loadHTMLString(htmlString, baseURL: nil)
    }

    @IBAction func btnLoadHtmlFile(_ sender: UIButton) {
        let filePath = Bundle.main.path(forResource: "htmlView", ofType: "html")
        let myUrl = URL(fileURLWithPath: filePath!)
        let myRequest = URLRequest(url: myUrl)
        
        myWebView.load(myRequest)
    }

    @IBAction func btnStop(_ sender: UIBarButtonItem) {
        myWebView.stopLoading()
    }

    @IBAction func btnReload(_ sender: UIBarButtonItem) {
        myWebView.reload()
    }

    @IBAction func btnGoBack(_ sender: UIBarButtonItem) {
        myWebView.goBack()
    }

    @IBAction func btnGoForward(_ sender: UIBarButtonItem) {
        myWebView.goForward()
    }

}

