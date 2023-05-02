//
//  ViewController.swift
//  OddOrEvenGame
//
//  Created by 김승찬의 M1 mac air on 2023/03/21.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var computerBallCountLbl: UILabel!//컨트롤키를 눌러서 매칭
    @IBOutlet weak var userBallCountLbl: UILabel!
    
    var comBallsCount: Int = 20 //기본 변수 선언
    var userBallsCount: Int = 20
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        computerBallCountLbl.text = String(comBallsCount)//남은 구술 갯수 상자의 텍스트를 표시
        userBallCountLbl.text = String(userBallsCount)
        
    }

    @IBAction func gameStartPressed(_ sender: Any) {
        print("게임시작! ")//버튼을 눌렀을 때 표시
    }
    
}

