//
//  RandomViewController.swift
//  MePick
//
//  Created by 김승찬 on 11/24/23.
//

import UIKit
import CoreLocation

class RandomViewController: UIViewController {


    @IBOutlet var recommendLbl: UILabel!
    @IBOutlet var logText: UITextView!

    // 카카오 API 관련 상수
    let kakaoAPIKey = "8ffc297049f2cc47d0703e33b1879b2d"
    let kakaoSearchBaseUrl = "https://dapi.kakao.com/v2/local/search/category.json"

    // 이전에 추천받은 음식점을 저장할 배열
    var previousRecommendations: [String] = []

    // 위치 관리자
    var locationManager: CLLocationManager!

    override func viewDidLoad() {
        super.viewDidLoad()

        // 위치 관리자 초기화
        locationManager = CLLocationManager()
        locationManager.delegate = self

        // 위치 서비스 권한 요청
        requestLocationAuthorization()
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
        let categoryCode = "FD6" // "음식점" 카테고리 코드
        let radius = "1000" // 반경 1km

        let parameters: [String: String] = [
            "category_group_code": categoryCode,
            "y": "\(userLocation.latitude)",
            "x": "\(userLocation.longitude)",
            "radius": radius
        ]

        print(parameters)

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
        guard let userLocation = locationManager.location?.coordinate else {
            print("사용자 위치 정보를 가져올 수 없습니다.")
            return nil
        }
        return (userLocation.latitude, userLocation.longitude)
    }

    func callKakaoAPI(parameters: [String: String], completion: @escaping (Result<[KakaoPlace], Error>) -> Void) {
        guard let url = URL(string: kakaoSearchBaseUrl) else {
            completion(.failure(NSError(domain: "Invalid URL", code: 0, userInfo: nil)))
            return
        }

        var components = URLComponents(url: url, resolvingAgainstBaseURL: false)
        components?.queryItems = parameters.map { URLQueryItem(name: $0.key, value: $0.value) }

        guard let finalURL = components?.url else {
            completion(.failure(NSError(domain: "Invalid URL", code: 0, userInfo: nil)))
            return
        }

        var request = URLRequest(url: finalURL)
        request.httpMethod = "GET"
        request.allHTTPHeaderFields = ["Authorization": "KakaoAK \(kakaoAPIKey)"]

        URLSession.shared.dataTask(with: request) { (data, response, error) in
            if let error = error {
                completion(.failure(error))
                return
            }

            guard let data = data else {
                completion(.failure(NSError(domain: "No data", code: 0, userInfo: nil)))
                return
            }

            do {
                let decoder = JSONDecoder()
                let result = try decoder.decode(KakaoPlacesResponse.self, from: data)
                print(result.documents)
                completion(.success(result.documents))
            } catch {
                completion(.failure(error))
            }
        }.resume()
    }

    func requestLocationAuthorization() {
        let authorizationStatus = CLLocationManager.authorizationStatus()

        switch authorizationStatus {
        case .notDetermined:
            locationManager.requestWhenInUseAuthorization()
        case .authorizedWhenInUse, .authorizedAlways:
            locationManager.startUpdatingLocation()
        case .denied, .restricted:
            showAlert(message: "위치 서비스가 비활성화되어 있습니다. 설정에서 활성화해주세요.")
        @unknown default:
            break
        }
    }

    func displayRecommendation(place: KakaoPlace) {
        // 추천된 음식점을 UI에 표시하는 코드
        DispatchQueue.main.async { [weak self] in
            self?.recommendLbl.text = place.place_name
        }

        // 이전에 추천된 음식점 배열에 추가
        self.previousRecommendations.append(place.place_name)

        // 이전에 추천된 음식점 목록을 로그에 표시
        DispatchQueue.main.async { [weak self] in
            if let logText = self?.logText {
                logText.text += "\(place.place_name)\n"
            }

            self?.showAlert(message: "추천된 음식점: \(place.place_name)")
        }
    }

    func showAlert(message: String) {
        let alert = UIAlertController(title: "알림", message: message, preferredStyle: .alert)
        let okAction = UIAlertAction(title: "확인", style: .default, handler: nil)
        alert.addAction(okAction)
        present(alert, animated: true, completion: nil)
    }
}

extension RandomViewController: CLLocationManagerDelegate {
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        guard let location = locations.last?.coordinate else {
            print("업데이트된 위치 정보가 없습니다.")
            return
        }

        print("업데이트된 위치 - 위도: \(location.latitude), 경도: \(location.longitude)")
        // You can use the location data as needed.
        locationManager.stopUpdatingLocation()
    }
}
