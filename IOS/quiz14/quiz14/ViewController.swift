//
//  ViewController.swift
//  quiz14
//
//  Created by 김승찬 on 12/7/23.
//

import UIKit
import WebKit

class ViewController: UIViewController, UIPickerViewDelegate, UIPickerViewDataSource, WKNavigationDelegate {

    @IBOutlet var topPickerView: UIPickerView!
    @IBOutlet var topWebView: WKWebView!
    @IBOutlet var bottomWebView: WKWebView!

    let sites1 = [
        ["Google", "http://www.google.com"],
        ["Naver", "http://www.naver.com"],
        ["Daum", "http://www.daum.net"],
        ["Youtube", "http://www.youtube.com"]
    ]

    let sites2 = [
        ["소프트웨어학과", "http://software.smu.ac.kr"],
        ["e-campus", "http://ecampus.smu.ac.kr"],
        ["상명대", "http://www.smu.ac.kr"],
    ]

    var topWebViewLoaded = false
    var bottomWebViewLoaded = false

    override func viewDidLoad() {
        super.viewDidLoad()

        topPickerView.delegate = self
        topPickerView.dataSource = self

        topPickerView.selectRow(0, inComponent: 0, animated: false)
        topPickerView.selectRow(1, inComponent: 1, animated: false)

        loadWebsite(urlString: sites1[0][1], webView: topWebView)
        loadWebsite(urlString: sites2[0][1], webView: bottomWebView)
        
        
    }

    func numberOfComponents(in pickerView: UIPickerView) -> Int {
        return 2
    }

    func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
        if component == 0 {
            return sites1.count
        } else if component == 1 {
            return sites2.count
        }
        return 0
    }

    func pickerView(_ pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String? {
        if component == 0 {
            return sites1[row][0]
        } else if component == 1 {
            return sites2[row][0]
        }
        return nil
    }

    func pickerView(_ pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int) {
        let selectedSite: [String]
        if component == 0 {
            selectedSite = sites1[row]
        } else {
            selectedSite = sites2[row]
        }
        let urlString = selectedSite[1]

        if component == 0 {
            topWebViewLoaded = false
            loadWebsite(urlString: urlString, webView: topWebView)
        } else {
            bottomWebViewLoaded = false
            loadWebsite(urlString: urlString, webView: bottomWebView)
        }
    }

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        if webView == topWebView {
            topWebViewLoaded = true
        } else if webView == bottomWebView {
            bottomWebViewLoaded = true
        }

        if topWebViewLoaded && bottomWebViewLoaded {
            showAlertForRightPickerView()
        }
    }

    func loadWebsite(urlString: String, webView: WKWebView) {
        if let url = URL(string: urlString) {
            let request = URLRequest(url: url)
            webView.load(request)
        }
    }

    func showAlertForRightPickerView() {
        DispatchQueue.main.async {
            let alert = UIAlertController(title: "상명대 사이트로 이동", message: "상명대 사이트로 이동하시겠습니까?", preferredStyle: .alert)

            alert.addAction(UIAlertAction(title: "아니오", style: .default, handler: nil))
            alert.addAction(UIAlertAction(title: "소프트웨어학과", style: .default, handler: { _ in
                self.loadWebsite(urlString: self.sites2[0][1], webView: self.bottomWebView)
            }))
            alert.addAction(UIAlertAction(title: "상명대", style: .default, handler: { _ in
                self.loadWebsite(urlString: self.sites2[2][1], webView: self.bottomWebView)
            }))

            self.present(alert, animated: true, completion: nil)
        }
    }
}
