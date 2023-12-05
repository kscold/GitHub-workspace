//
//  ViewController.swift
//  imageView
//
//  Created by 김승찬 on 11/9/23.
//

//import UIKit
//
//class ViewController: UIViewController {
//    var isZoom = false
//    var imgOn: UIImage?
//    var imgOff: UIImage?
//
//    @IBOutlet weak var imgView: UIImageView!
//    @IBOutlet weak var btnResize: UIButton!
//    override func viewDidLoad() {
//        super.viewDidLoad()
//        // Do any additional setup after loading the view.
//
//        imgOn = UIImage(named: "lamp_on.png")
//        imgOff = UIImage(named: "lamp_off.png")
//        imgView.image = imgOn
//    }
//
//
//    @IBAction func btnResizeImage(_ sender: UIButton) {
//        let scale: CGFloat = 2.0
//        var newWidth: CGFloat, newHeight: CGFloat
//
//        if isZoom {
//            newWidth = imgView.frame.width / scale
//            newHeight = imgView.frame.height / scale
//            btnResize.setTitle("확대", for: .normal)
//        } else {
//            newWidth = imgView.frame.width * scale
//            newHeight = imgView.frame.height * scale
//            btnResize.setTitle("축소", for: .normal)
//        }
//        imgView.frame.size = CGSize(width: newWidth, height: newHeight)
//        isZoom = !isZoom
//    }
//
//    @IBAction func switchImageOnOff(_ sender: UISwitch) {
//        if sender.isOn {
//            imgView.image = imgOn
//        } else {
//            imgView.image = imgOff
//        }
//    }
//}
//


import UIKit
import WebKit

class ViewController: UIViewController, WKNavigationDelegate {
    @IBOutlet var txtUrl: UITextField!
    @IBOutlet var myWebView: WKWebView!
    @IBOutlet var myActivityIndicater: UIActivityIndicatorView!

    func loadWebPage(_ url: String) {
        let myUrl = URL(string: url)
        let myRequest = URLRequest(url: myUrl!)
        myWebView.load(myRequest)

        myWebView.load(myRequest)
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        myWebView.navigationDelegate = self
        self.loadWebPage("http://www.google.com")
    }

    func webView(_ webView: WKWebView, didCommit navigation: WKNavigation!) {
        myActivityIndicater.stopAnimating()
        myActivityIndicater.isHidden = false
    }
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        myActivityIndicater.stopAnimating()
        myActivityIndicater.isHidden = true
    }

    func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
        myActivityIndicater.stopAnimating()
        myActivityIndicater.isHidden = true
    }

    func checkurl(_ url: String) -> String {
        var strUrl = url
        let flag = strUrl.hasPrefix("http://")

        if !flag {
            strUrl = "http://" + strUrl
        }
        return strUrl
    }


    @IBAction func btnGotoUrl(_ sender: UIButton) {
        let myUrl = self.checkurl(txtUrl.text!)
        txtUrl.text = ""
        loadWebPage (myUrl)
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
        <p><a href=/"http://www.smu.ac.kr\">상명대학교</a〉로 이동</p> </a>
        <p><a href=/"http://software.smu.ac.kr/">상명대학교 소프트웨어학과로 이동</p></a>
        """
        myWebView.loadHTMLString(htmlString, baseURL: nil)
    }

    @IBAction func btnLoadHtmlFile(_ sender: UIButton) {
        let filePath = Bundle.main.path(forResource: "htmlView", ofType: "html")
        let myUrl = URL(fileURLWithPath: filePath!)
        let myRequest = URLRequest(url: myUrl)
        
        myWebView.load (myRequest)
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

