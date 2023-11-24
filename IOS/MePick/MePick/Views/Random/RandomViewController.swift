//
//  RandomViewController.swift
//  MePick
//
//  Created by 김승찬 on 11/24/23.
//

import UIKit

class RandomViewController: UIViewController {

    @IBOutlet var randomBtn: UIButton!
    @IBOutlet var recommendLbl: UILabel!
    @IBOutlet var logText: UITextView!

    // 카카오 API 관련 상수
    let kakaoAPIKey = "8ffc297049f2cc47d0703e33b1879b2d"
    let kakaoSearchBaseUrl = "https://dapi.kakao.com/v2/local/search/category.json"

    // 이전에 추천받은 음식점을 저장할 배열
    var previousRecommendations: [String] = []

    override func viewDidLoad() {
        super.viewDidLoad()
    }

    @IBAction func randomButtonTapped(_ sender: Any) {
        // 랜덤 음식점 추천
        recommendRandomRestaurant()
    }

    func recommendRandomRestaurant() {
        guard let userLocation = getUserLocation() else {
            // 위치 정보를 가져올 수 없는 경우
            showAlert(message: "위치 정보를 가져올 수 없습니다.")
            return
        }

        // API 호출을 위한 파라미터 설정
        let categoryCode = "FD6"  // "음식점" 카테고리 코드
        let radius = "1000"       // 반경 1km

        let parameters: [String: String] = [
            "category_group_code": categoryCode,
            "y": "\(userLocation.latitude)",
            "x": "\(userLocation.longitude)",
            "radius": radius
        ]

        // API 호출
        callKakaoAPI(parameters: parameters) { [weak self] result in
            switch result {
            case .success(let places):
                // 랜덤 음식점 추천
                if let randomPlace = places.randomElement() {
                    self?.displayRecommendation(place: randomPlace)
                }
            case .failure(let error):
                print("API 호출 오류: \(error)")
                self?.showAlert(message: "음식점을 추천할 수 없습니다.")
            }
        }
    }

    func getUserLocation() -> (latitude: Double, longitude: Double)? {
        // 사용자의 현재 위치를 가져오는 코드 작성 (이미지에 누락됨)
        // 위치를 가져올 수 없는 경우 nil 반환
        return nil
    }

    func callKakaoAPI(parameters: [String: String], completion: @escaping (Result<[KakaoPlace], Error>) -> Void) {
        // API 호출 및 결과를 처리하는 코드 작성 (이미지에 누락됨)
        // 성공 시 places 배열 반환, 실패 시 오류 반환
    }

    func displayRecommendation(place: KakaoPlace) {
        // 추천된 음식점을 UI에 표시하는 코드
        recommendLbl.text = place.place_name

        // 이전에 추천된 음식점 배열에 추가
        previousRecommendations.append(place.place_name)

        // 이전에 추천된 음식점 목록을 로그에 표시
        logText.text += "\(place.place_name)\n"
    }

    func showAlert(message: String) {
        let alert = UIAlertController(title: "알림", message: message, preferredStyle: .alert)
        let okAction = UIAlertAction(title: "확인", style: .default, handler: nil)
        alert.addAction(okAction)
        present(alert, animated: true, completion: nil)
    }
}
