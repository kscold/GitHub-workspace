//
//  HomeViewController.swift
//  MePick
//
//  Created by 김승찬 on 11/23/23.
//

import UIKit

class HomeViewController: UIViewController {

    @IBOutlet var mapImage: UIImageView!


    override func viewDidLoad() {
        super.viewDidLoad()
        mapImage.image = #imageLiteral(resourceName: "slide1")

        // 이미지에 탭 제스처 추가
        let tapGesture = UITapGestureRecognizer(target: self, action: #selector(imageTapped))
        mapImage.addGestureRecognizer(tapGesture)
        mapImage.isUserInteractionEnabled = true
    }

    // 이미지를 클릭할 때 실행될 함수
    @objc func imageTapped() {
        // print("Image tapped!") // 디버깅용 출력
        if let mapViewController = storyboard?.instantiateViewController(withIdentifier: "mapViewControllerIdentifier") {
            navigationController?.pushViewController(mapViewController, animated: true)
        }
    }


}
