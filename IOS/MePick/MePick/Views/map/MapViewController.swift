//
//  mapViewController.swift
//  MePick
//
//  Created by 김승찬 on 11/23/23.
//


import UIKit
import CoreLocation
import MapKit

struct KakaoPlace: Codable {
    let id: String
    let place_name: String
    let category_name: String
    let category_group_code: String
    let category_group_name: String
    let distance: String
    let phone: String
    let address_name: String
    let road_address_name: String?
    let x: String?
    let y: String?
    let place_url: String
}

struct KakaoPlacesResponse: Codable {
    let documents: [KakaoPlace]
    let meta: Meta

    enum CodingKeys: String, CodingKey {
        case documents
        case meta
    }
}

struct Meta: Codable {
    let is_end: Bool
    let pageable_count: Int
    let total_count: Int
}

class CustomAnnotation: NSObject, MKAnnotation {
    var coordinate: CLLocationCoordinate2D
    var title: String?

    init(coordinate: CLLocationCoordinate2D, title: String?) {
        self.coordinate = coordinate
        self.title = title
    }
}

class MapViewController: UIViewController, MKMapViewDelegate, CLLocationManagerDelegate, UIPickerViewDelegate, UIPickerViewDataSource {

    @IBOutlet var catergoryPickerView: UIPickerView!
    @IBOutlet var mapViewContainer: UIView!
    @IBOutlet var zoomInButton: UIButton!
    @IBOutlet var zoomOutButton: UIButton!

    var mapView: MKMapView!
    var locationManager: CLLocationManager!

    // 카테고리 데이터
    let categories = ["없음", "음식점", "카페"]
    var selectedCategory = "없음" // 기본값은 "없음"

    // 카카오 API 관련 상수
    let kakaoAPIKey = "8ffc297049f2cc47d0703e33b1879b2d"
    let kakaoSearchBaseUrl = "https://dapi.kakao.com/v2/local/search/category.json"

    override func viewDidLoad() {
        super.viewDidLoad()

        // 위치 관리자 초기화
        locationManager = CLLocationManager()
        locationManager.delegate = self

        // 위치 서비스 권한 요청
        requestLocationAuthorization()

        // 맵뷰 생성 및 설정
        mapView = MKMapView(frame: mapViewContainer.bounds)
        if let mapView = mapView {
            mapView.delegate = self
            mapView.showsUserLocation = true
            mapViewContainer.addSubview(mapView)
        }

        // 위치 새로고침 버튼 생성 및 설정
        let refreshButton = UIButton(type: .system)
        refreshButton.frame = CGRect(x: 10, y: 10, width: 100, height: 40)
        refreshButton.setTitle("위치 새로고침", for: .normal)
        refreshButton.addTarget(self, action: #selector(refreshLocation), for: .touchUpInside)
        mapViewContainer.addSubview(refreshButton)


        // 확대 버튼 설정
        zoomInButton.addTarget(self, action: #selector(zoomInButtonTapped), for: .touchUpInside)

        // 축소 버튼 설정
        zoomOutButton.addTarget(self, action: #selector(zoomOutButtonTapped), for: .touchUpInside)


        // 피커 뷰 설정
        catergoryPickerView.delegate = self
        catergoryPickerView.dataSource = self


    }

    // 확대 버튼 탭 시 실행
    @objc func zoomInButtonTapped() {
        changeMapRegion(zoomFactor: 2) // 확대를 원하는 정도로 조절
    }

    // 축소 버튼 탭 시 실행
    @objc func zoomOutButtonTapped() {
        changeMapRegion(zoomFactor: -2) // 축소를 원하는 정도로 조절
    }

    func changeMapRegion(zoomFactor: Double) {
        guard let currentRegion = mapView?.region else {
            return
        }

        // 현재의 맵 영역에서 zoomFactor를 적용하여 새로운 영역을 계산
        let newLatitudeDelta = max(min(currentRegion.span.latitudeDelta * exp(zoomFactor), 180), 0.0001)
        let newLongitudeDelta = max(min(currentRegion.span.longitudeDelta * exp(zoomFactor), 180), 0.0001)
        
        let span = MKCoordinateSpan(latitudeDelta: newLatitudeDelta, longitudeDelta: newLongitudeDelta)
        let newRegion = MKCoordinateRegion(center: currentRegion.center, span: span)

        // 새로운 영역을 맵뷰에 적용
        mapView?.setRegion(newRegion, animated: true)
    }

    func requestLocationAuthorization() {
        let authorizationStatus = CLLocationManager.authorizationStatus()

        switch authorizationStatus {
        case .notDetermined:
            locationManager.requestWhenInUseAuthorization()
        case .authorizedWhenInUse, .authorizedAlways:
            locationManager.startUpdatingLocation()
        case .denied, .restricted:
            showRequestLocationServiceAlert()
        @unknown default:
            break
        }
    }

    func showRequestLocationServiceAlert() {
        let alert = UIAlertController(title: "위치 정보 필요", message: "이 기능을 사용하기 위해서는 위치 정보가 필요합니다. '설정'에서 위치 서비스를 활성화해주세요.", preferredStyle: .alert)

        let settingsAction = UIAlertAction(title: "설정으로 이동", style: .default) { (_) in
            if let url = URL(string: UIApplication.openSettingsURLString) {
                UIApplication.shared.open(url, options: [:], completionHandler: nil)
            }
        }

        let cancelAction = UIAlertAction(title: "취소", style: .cancel, handler: nil)

        alert.addAction(settingsAction)
        alert.addAction(cancelAction)

        present(alert, animated: true, completion: nil)
    }

    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        guard let location = locations.last?.coordinate else {
            print("업데이트된 위치 정보가 없습니다.")
            return
        }

        print("업데이트된 위치 - 위도: \(location.latitude), 경도: \(location.longitude)")

        let region = MKCoordinateRegion(center: location, latitudinalMeters: 1000, longitudinalMeters: 1000)
        mapView.setRegion(region, animated: true)
        locationManager.stopUpdatingLocation()
    }

    @objc func refreshLocation() {
        locationManager.startUpdatingLocation()
    }

    func mapView(_ mapView: MKMapView, didUpdate userLocation: MKUserLocation) {
        let location = userLocation.coordinate
        print("사용자 위치 업데이트 - 위도: \(location.latitude), 경도: \(location.longitude)")
    }

//    func mapView(_ mapView: MKMapView, viewFor annotation: MKAnnotation) -> MKAnnotationView? {
//        guard let annotationView = mapView.dequeueReusableAnnotationView(withIdentifier: "customAnnotation") as? MKPinAnnotationView else {
//            let newAnnotationView = MKPinAnnotationView(annotation: annotation, reuseIdentifier: "customAnnotation")
//            newAnnotationView.canShowCallout = true
//            print("Annotation data: \(annotation.title ?? "")")
//            return newAnnotationView
//        }
//
//        annotationView.annotation = annotation
//        return annotationView
//    }

//    func mapView(_ mapView: MKMapView, viewFor annotation: MKAnnotation) -> MKAnnotationView? {
//        var annotationView = mapView.dequeueReusableAnnotationView(withIdentifier: "customAnnotation")
//
//        if annotationView == nil {
//            annotationView = MKAnnotationView(annotation: annotation, reuseIdentifier: "customAnnotation")
//            annotationView!.canShowCallout = true
//            annotationView!.image = UIImage(systemName: "mappin.and.ellipse") // 초록 핀 이미지 설정
//        } else {
//            annotationView!.annotation = annotation
//        }
//
//        return annotationView
//    }

    func mapView(_ mapView: MKMapView, viewFor annotation: MKAnnotation) -> MKAnnotationView? {
        if annotation is MKUserLocation {
            var annotationView = mapView.dequeueReusableAnnotationView(withIdentifier: "userLocation")
            if annotationView == nil {
                annotationView = MKAnnotationView(annotation: annotation, reuseIdentifier: "userLocation")
                annotationView!.image = UIImage(systemName: "location.fill")?.withTintColor(.blue) // 사용자 위치 핀 이미지 설정
            } else {
                annotationView!.annotation = annotation
            }
            return annotationView
        } else {
            var annotationView = mapView.dequeueReusableAnnotationView(withIdentifier: "customAnnotation")
            if annotationView == nil {
                annotationView = MKAnnotationView(annotation: annotation, reuseIdentifier: "customAnnotation")
                annotationView!.canShowCallout = true

                // 사용자 정의 마커 이미지 설정 (예: 빨간색 마커)
                let customMarkerImage = UIImage(systemName: "mappin.and.ellipse")?.withTintColor(.red)
                annotationView!.image = customMarkerImage
            } else {
                annotationView!.annotation = annotation
            }
            return annotationView
        }
    }


    func numberOfComponents(in pickerView: UIPickerView) -> Int {
        return 1
    }

    func pickerView(_ pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String? {
        return categories[row]
    }

    func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
        return categories.count
    }

    func pickerView(_ pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int) {
        let selectedCategoryCode: String
        switch row {
        case 0: selectedCategoryCode = "" // "없음"에 해당하는 카테고리 코드
        case 1: selectedCategoryCode = "FD6" // "음식점"에 해당하는 카테고리 코드
        case 2: selectedCategoryCode = "CE7" // "카페"에 해당하는 카테고리 코드
        default: return
        }
        searchAndDisplayCategoryPlaces(categoryCode: selectedCategoryCode)
    }


//    func addMarkersForSelectedCategory(places: [KakaoPlace]) {
//        DispatchQueue.main.async { // 메인 스레드에서 실행
//            self.mapView.removeAnnotations(self.mapView.annotations)
//
//            for place in places {
//                if let xString = place.x, let yString = place.y,
//                    let latitude = Double(xString), let longitude = Double(yString) {
//                    print("Adding annotation at \(latitude), \(longitude)")
//                    let annotation = MKPointAnnotation()
//                    annotation.coordinate = CLLocationCoordinate2D(latitude: latitude, longitude: longitude)
//                    annotation.title = place.place_name
//                    self.mapView.addAnnotation(annotation)
//                }
//            }
//        }
//    }

    func addMarkersForSelectedCategory(places: [KakaoPlace]) {
        DispatchQueue.main.async {
            self.mapView.removeAnnotations(self.mapView.annotations)

            for place in places {
                if let xString = place.x, let yString = place.y,
                    let longitude = Double(xString), let latitude = Double(yString) {

                    let annotation = CustomAnnotation(coordinate: CLLocationCoordinate2D(latitude: latitude, longitude: longitude), title: place.place_name)
                    self.mapView.addAnnotation(annotation)
                }
            }
        }
    }


    func searchAndDisplayCategoryPlaces(categoryCode: String) {
        guard let userLocation = locationManager.location?.coordinate else {
            print("사용자 위치 정보를 가져올 수 없습니다.")
            return
        }

        let headers = ["Authorization": "KakaoAK \(kakaoAPIKey)"]
        var parameters: [String: String] = [
            "category_group_code": categoryCode,
            "y": "\(userLocation.latitude)",
            "x": "\(userLocation.longitude)",
            "radius": "1000"
        ]

        print(parameters)

        if !categoryCode.isEmpty {
            parameters["category_group_code"] = categoryCode
        }

        var components = URLComponents(string: kakaoSearchBaseUrl)
        components?.queryItems = parameters.map { URLQueryItem(name: $0.key, value: $0.value) }

        guard let url = components?.url else { return }
        var request = URLRequest(url: url)
        request.httpMethod = "GET"
        request.allHTTPHeaderFields = headers

        URLSession.shared.dataTask(with: request) { [self] (data, response, error) in
            if let error = error {
                print("Error in data task: \(error)")
                return
            }

            if let response = response as? HTTPURLResponse {
                print("HTTP Status Code: \(response.statusCode)")
            }

            do {
                let decoder = JSONDecoder()
                let result = try decoder.decode(KakaoPlacesResponse.self, from: data!)
                print(result.documents)
                self.addMarkersForSelectedCategory(places: result.documents)
            } catch {
                print("Error decoding JSON: \(error)")
                if let jsonString = String(data: data!, encoding: .utf8) {
                    print("Received JSON: \(jsonString)")
                } else {
                    print("Received data is not a valid UTF-8 string.")
                }
            }

            if let data = data {
                self.handleCategorySearchResult(data: data)
            }
        }.resume()
    }




    func handleCategorySearchResult(data: Data) {
        do {
            let decoder = JSONDecoder()
            let result = try decoder.decode(KakaoPlacesResponse.self, from: data)
            print(result.documents)

            // UI 업데이트를 메인 스레드에서 실행
            DispatchQueue.main.async {
                self.addMarkersForSelectedCategory(places: result.documents)
            }
        } catch {
            print("Error decoding JSON: \(error)")
            if let jsonString = String(data: data, encoding: .utf8) {
                print("Received JSON: \(jsonString)")
            } else {
                print("Received data is not a valid UTF-8 string.")
            }
        }
    }
}
