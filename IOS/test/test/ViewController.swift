
//  ViewController.swift

// 뷰 설정를 하는 페이지
import UIKit

class ViewController: UIViewController {

    // 제목 설정하는 코드
    var titleLabel: UILabel = {
        let label = UILabel()
        label.text = "헬로루 월드!!!"
        label.textAlignment = .center
        label.font = UIFont.boldSystemFont(ofSize: 50)
        label.textColor = .white
        
        return label
    }()

    @IBOutlet weak var lBlHello: UILabel!
    @IBOutlet weak var txtName: UITextField!

    override func viewDidLoad() {
        super.viewDidLoad()
       
        view.backgroundColor = .red
        view.addSubview(titleLabel)
        
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
    }

    @IBAction func btnSend(_ sender: UIButton) {
        lBlHello.text = "Hello, " + txtName.text!
    }
    
   
}

