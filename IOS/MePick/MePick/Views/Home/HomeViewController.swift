//
//  HomeViewController.swift
//  MePick
//
//  Created by 김승찬 on 11/23/23.
//

import UIKit

class HomeViewController: UIViewController {

    @IBOutlet var mapImage: UIImageView!
    @IBOutlet var randomImage: UIImageView!

    override func viewDidLoad() {
        super.viewDidLoad()
        mapImage.image = #imageLiteral(resourceName: "two")
        randomImage.image = #imageLiteral(resourceName: "random")

        // 이미지에 탭 제스처 추가
        let tapGesture = UITapGestureRecognizer(target: self, action: #selector(mapImageTapped))
        mapImage.addGestureRecognizer(tapGesture)
        mapImage.isUserInteractionEnabled = true


        let randomTapGesture = UITapGestureRecognizer(target: self, action: #selector(randomImageTapped))
        randomImage.addGestureRecognizer(randomTapGesture)
        randomImage.isUserInteractionEnabled = true
    }

    // 이미지를 클릭할 때 실행될 함수
//    @objc func imageTapped() {
//        // print("Image tapped!") // 디버깅용 출력
//        if let mapViewController = storyboard?.instantiateViewController(withIdentifier: "mapViewControllerIdentifier") {
//            navigationController?.pushViewController(mapViewController, animated: true)
//        }
//    }
    
    // Function for mapImage tap
        @objc func mapImageTapped() {
            navigateToViewController(withIdentifier: "mapViewControllerIdentifier")
        }

        // Function for randomImage tap
        @objc func randomImageTapped() {
            navigateToViewController(withIdentifier: "randomViewControllerIdentifier")
        }

        // Function to navigate to the specified view controller
        func navigateToViewController(withIdentifier identifier: String) {
            if let viewController = storyboard?.instantiateViewController(withIdentifier: identifier) {
                navigationController?.pushViewController(viewController, animated: true)
            }
        }


}
