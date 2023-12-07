//
//  ViewController.swift
//  quiz
//
//  Created by 김승찬 on 11/30/30.
//


import UIKit

class ViewController: UIViewController, UIPickerViewDelegate, UIPickerViewDataSource {
    @IBOutlet weak var topLbl: UILabel!
    @IBOutlet weak var btmLbl: UILabel!
    @IBOutlet weak var topImg: UIImageView!
    @IBOutlet weak var btmImg: UIImageView!
    @IBOutlet weak var topPicker: UIPickerView!
    @IBOutlet weak var btmPicker: UIPickerView!
    
    var imgDatas: [String? : [String?]] = [
        "20231101" : ["010101", "020101", "030101"],
        "20231103" : ["010101", "010201", "010301", "160201", "190201", "200201", "220201"],
        "20231110" : ["140103", "170103"]
    ]
    
    var before: [String] = []
    var after: [String] = []
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        topLbl.text = "오전 없음"
        btmLbl.text = "오후 없음"
        topPicker.delegate = self
        btmPicker.delegate = self
    }

    @IBAction func datePicker(_ sender: UIDatePicker) {
        before.removeAll()
        after.removeAll()
        let datePickerView: UIDatePicker = sender
        
        let formatterDate:DateFormatter = DateFormatter()
        formatterDate.dateFormat = "yyyyMMdd"
        
        let pickerDate = formatterDate.string(from : datePickerView.date)
        
        if (imgDatas[pickerDate] != nil){
            for item in imgDatas[pickerDate]! {
                if((item != nil) && ((item)! < "120000")){
                    before.append(pickerDate+"_"+item!+".jpg")
                } else {
                    after.append(pickerDate+"_"+item!+".jpg")
                }
            }

        }
        if before.count != 0 {
            topLbl.text = "오전 " + String(1) + "장"
            topImg.image = UIImage(named: before[0])
        } else {
            topLbl.text = "오전 없음"
        }
        
        if after.count != 0 {
            btmLbl.text = "오전 " + String(1) + "장"
            btmImg.image = UIImage(named: after[0])
        } else {
            btmLbl.text = "오전 없음"
        }
        topPicker.reloadComponent(0)
        btmPicker.reloadComponent(0)
    }
    
    func numberOfComponents(in pickerView: UIPickerView) -> Int {
        return 1
    }
    
    func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int{
        if(pickerView == topPicker){
            return before.count
        }
        return after.count
    }
    
    func pickerView(_ pickerView: UIPickerView, viewForRow row: Int, forComponent component: Int, reusing view: UIView?) -> UIView {
        if(pickerView == topPicker) {
            let imgView = UIImageView(image: UIImage(named: before[row]))
            imgView.frame = CGRect(x: 0, y: 0, width: 100, height: 150)
            return imgView
        }
        let imgView = UIImageView(image: UIImage(named: after[row]))
        imgView.frame = CGRect(x: 0, y: 0, width: 100, height: 150)
        return imgView
    }
    
    func pickerView(_ pickerView: UIPickerView, rowHeightForComponent component: Int) -> CGFloat {
        return 40.0
    }
    
    func pickerView(_ pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int) {
        if pickerView == topPicker {
            if before.count != 0 {
                topLbl.text = "오전 " + String(row+1) + "장"
                topImg.image = UIImage(named: before[row])
            } else {
                topLbl.text = "오전 없음"
            }
        } else if pickerView == btmPicker {
            if after.count != 0 {
                btmLbl.text = "오후 " + String(row+1) + "장"
                btmImg.image = UIImage(named: after[row])
            } else {
                btmLbl.text = "오후 없음"
            }
        }
    }

}

