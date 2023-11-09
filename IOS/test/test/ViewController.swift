
//  ViewController.swift

// 뷰 설정를 하는 페이지
import UIKit

class ViewController: UIViewController {


    @IBOutlet weak var computerBallCountLbl: UILabel!
    @IBOutlet weak var userBallCountLbl: UILabel!

    var comBallsCount: Int = 20
    var userBallsCount: Int = 20

    override func viewDidLoad() {
        super.viewDidLoad()

        computerBallCountLbl.text = String(comBallsCount)
        userBallCountLbl.text = String(userBallsCount)
    }



}

