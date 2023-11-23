//
//  ViewController.swift
//  quiz
//
//  Created by 김승찬 on 11/22/23.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var pickImageLbl: UILabel!
    @IBOutlet var imageView: UIImageView!
    @IBOutlet var datePicker: UIDatePicker!

    override func viewDidLoad() {
        super.viewDidLoad()
        datePicker.addTarget(self, action: #selector(changeDatePicker(_:)), for: .valueChanged)
    }

    @objc func changeDatePicker(_ sender: UIDatePicker) {
        displaySelectedDateImage(sender.date)
    }

    func displaySelectedDateImage(_ selectedDate: Date) {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyyMMdd"

        formatter.locale = Locale(identifier: "ko_KR")

        let imageName = formatter.string(from: selectedDate) + "_010101.jpg"

        if let image = UIImage(named: imageName) {
            imageView.image = image
            pickImageLbl.text = "선택된 이미지: \(imageName)"
        } else {
            imageView.image = nil
            pickImageLbl.text = nil
        }
    }
}


