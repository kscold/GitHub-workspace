//
//  ViewController.swift
//  DatePicker
//
//  Created by 김승찬 on 11/16/23.
//

import UIKit

class ViewController: UIViewController {
    let interval = 1.0
    var count = 0

    @IBOutlet weak var lblCurrentTime: UILabel!
    @IBOutlet weak var lblPickerTime: UILabel!

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        Timer.scheduledTimer(timeInterval: interval, target: self, selector: #selector(self.updateTime), userInfo: nil, repeats: true)
    }

    @IBAction func changeDatePicker(_ sender: UIDatePicker) {
        let datePickerVeiw: UIDatePicker = sender

        let formatter: DateFormatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd HH:mm EEE"
        lblPickerTime.text = "선택시간: " + formatter.string(from: datePickerVeiw.date)
    }

    @objc func updateTime() {
        let date = Date()
        let formatter = DateFormatter()

        formatter.dateFormat = "yyyy-MM-dd HH:mm EEE"

        lblCurrentTime.text = "현재시간: " + formatter.string(from: date) + "\n경과시간(초): " + String(self.count)
        self.count = self.count + 1
    }


}

