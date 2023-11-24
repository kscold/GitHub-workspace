//
//  mapViewController.swift
//  MePick
//
//  Created by 김승찬 on 11/23/23.
//



//import UIKit
//import KakaoMaps
//
//class MapViewController: UIViewController {
//
//    override func viewDidLoad() {
//        super.viewDidLoad()
//        showKakaoMap()
//    }
//
//    func showKakaoMap() {
//        let mapView = MTMapView(frame: CGRect(x: 0, y: 0, width: view.frame.size.width, height: view.frame.size.height))
//
//        mapView.delegate = self
//
//        view.addSubview(mapView)
//    }
//}
//
//extension MapViewController: MTMapViewDelegate {
//    // 카카오맵 로드 완료 시 호출됨
//    func mapView(_ mapView: MTMapView!, onMapLoadFinished finish: Bool) {
//        if finish {
//            let marker = MTMapPOIItem()
//            marker.markerType = .customImage
//            marker.customImageName = "your_custom_marker_image.png"
//            marker.customImageAnchorPointOffset = MTMapImageOffset(offsetX: 30, offsetY: 0)
//            marker.mapPoint = MTMapPoint(geoCoord: .init(latitude: 37.5665, longitude: 126.9780))
//            marker.showAnimationType = .springFromGround
//            marker.draggable = false
//
//            mapView.addPOIItems([marker])
//
//            mapView.fitAreaToShowAllPOIItems()
//        }
//    }
//}


//import UIKit
//
//class MapViewController: UIViewController, MTMapViewDelegate {
//    
//    @IBOutlet var mapView: MKMapView!
//    
//    override func viewDidLoad() {
//        super.viewDidLoad()
//        mapView = MTMapView(frame: self.view.bounds)
//       
//        if let mapView = mapView {
//            mapView.delegate = self
//            mapView.baseMapType = .standard
//            self.view.addSubview(mapView)
//        }
//    }
//}
//


//import UIKit
//
//class MapViewController: UIViewController, MTMapViewDelegate {
//
//    @IBOutlet var mapViewContainer: UIView! // 스토리보드에서 뷰에 아웃렛 연결
//
//    var mapView: MTMapView!
//
//    override func viewDidLoad() {
//        super.viewDidLoad()
//
//        // 특정 영역을 갖는 맵뷰 생성
//        mapView = MTMapView(frame: mapViewContainer.bounds)
//
//        if let mapView = mapView {
//            mapView.delegate = self
//            mapView.baseMapType = .standard
//            mapViewContainer.addSubview(mapView)
//        }
//    }
//}

//import UIKit
//import CoreLocation
//
//class MapViewController: UIViewController, MTMapViewDelegate, CLLocationManagerDelegate {
//
//    @IBOutlet var mapViewContainer: UIView!
//    var mapView: MTMapView!
//    var locationManager: CLLocationManager!
//
//    override func viewDidLoad() {
//        super.viewDidLoad()
//
//        // 위치 관리자 초기화
//        locationManager = CLLocationManager()
//        locationManager.delegate = self
//
//        // 위치 서비스를 사용할 수 있는 상태인지 체크
//        checkUserDeviceLocationServiceAuthorization()
//
//        // 맵뷰 생성 및 설정
//        mapView = MTMapView(frame: mapViewContainer.bounds)
//        if let mapView = mapView {
//            mapView.delegate = self
//            mapView.baseMapType = .standard // 기본 지도로 설정
//            mapViewContainer.addSubview(mapView)
//        }
//
//        // 위치 새로고침 버튼 생성 및 설정
//        let refreshButton = UIButton(type: .system)
//        refreshButton.frame = CGRect(x: 10, y: 10, width: 100, height: 40)
//        refreshButton.setTitle("위치 새로고침", for: .normal)
//        refreshButton.addTarget(self, action: #selector(refreshLocation), for: .touchUpInside)
//        mapViewContainer.addSubview(refreshButton)
//    }
//
//    func checkUserDeviceLocationServiceAuthorization() {
//        DispatchQueue.global(qos: .background).async {
//            // 위치 서비스가 활성화 상태인지 확인합니다.
//            guard CLLocationManager.locationServicesEnabled() else {
//                // 위치 서비스를 활성화할 수 있도록 사용자를 유도하는 알림을 보여줍니다.
//                self.showRequestLocationServiceAlert()
//                return
//            }
//
//            // 위치 서비스가 활성화된 경우, 앱에 대한 위치 접근 권한 상태를 확인합니다.
//            let authorizationStatus: CLAuthorizationStatus
//
//            if #available(iOS 14.0, *) {
//                authorizationStatus = self.locationManager.authorizationStatus
//            } else {
//                authorizationStatus = CLLocationManager.authorizationStatus()
//            }
//
//            self.checkUserCurrentLocationAuthorization(authorizationStatus)
//        }
//    }
//
//    func showRequestLocationServiceAlert() {
//        let alert = UIAlertController(title: "위치 정보 필요", message: "이 기능을 사용하기 위해서는 위치 정보가 필요합니다. '설정'에서 위치 서비스를 활성화해주세요.", preferredStyle: .alert)
//
//        let settingsAction = UIAlertAction(title: "설정으로 이동", style: .default) { (_) in
//            if let url = URL(string: UIApplication.openSettingsURLString) {
//                UIApplication.shared.open(url, options: [:], completionHandler: nil)
//            }
//        }
//
//        let cancelAction = UIAlertAction(title: "취소", style: .cancel, handler: nil)
//
//        alert.addAction(settingsAction)
//        alert.addAction(cancelAction)
//
//        present(alert, animated: true, completion: nil)
//    }
//
//    func checkUserCurrentLocationAuthorization(_ status: CLAuthorizationStatus) {
//        switch status {
//        case .notDetermined:
//            // 위치 서비스 요청 전에 allowsBackgroundLocationUpdates 설정
//            locationManager.allowsBackgroundLocationUpdates = true
//            locationManager.requestWhenInUseAuthorization()
//        case .restricted, .denied:
//            showRequestLocationServiceAlert()
//        case .authorizedAlways, .authorizedWhenInUse:
//            locationManager.startUpdatingLocation()
//        @unknown default:
//            print("Unknown authorization status")
//        }
//    }
//
//    // 위치가 업데이트되었을 때 호출되는 메서드
//    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
//        if let coor = manager.location?.coordinate {
//            print("업데이트된 위치 - 위도: \(coor.latitude), 경도: \(coor.longitude)")
//            let mapPoint = MTMapPoint(geoCoord: MTMapPointGeo(latitude: coor.latitude, longitude: coor.longitude))
//            mapView.setMapCenter(mapPoint, zoomLevel: 2, animated: true)
//            locationManager.stopUpdatingLocation()
//        }
//    }
//
//    // 위치 새로고침 버튼 클릭 시 호출되는 메서드
//    @objc func refreshLocation() {
//        locationManager.startUpdatingLocation()
//    }
//
//    // MTMapViewDelegate 메서드 - 위치 정보 수신
//    func mapView(_ mapView: MTMapView!, updateCurrentLocation location: MTMapPoint!, withAccuracy accuracy: MTMapLocationAccuracy) {
//        let currentLocationPointGeo = location.mapPointGeo
//        print("MTMapView updateCurrentLocation (\(currentLocationPointGeo().latitude), \(currentLocationPointGeo().longitude)) accuracy (\(accuracy))")
//    }
//
//    // MTMapViewDelegate 메서드 - 디바이스 방향 정보 수신
//    func mapView(_ mapView: MTMapView!, updateDeviceHeading headingAngle: MTMapRotationAngle) {
//        print("MTMapView updateDeviceHeading (\(headingAngle)) degrees")
//    }
//}


import UIKit
import CoreLocation
import MapKit

class MapViewController: UIViewController, MKMapViewDelegate, CLLocationManagerDelegate {

    @IBOutlet var mapViewContainer: UIView!
    var mapView: MKMapView!
    var locationManager: CLLocationManager!

    override func viewDidLoad() {
        super.viewDidLoad()

        // 위치 관리자 초기화
        locationManager = CLLocationManager()
        locationManager.delegate = self

        // 위치 서비스를 사용할 수 있는 상태인지 체크
//        checkUserDeviceLocationServiceAuthorization()

        // 맵뷰 생성 및 설정
        mapView = MKMapView(frame: mapViewContainer.bounds)
        if let mapView = mapView {
            mapView.delegate = self
            mapViewContainer.addSubview(mapView)
        }

        // 위치 새로고침 버튼 생성 및 설정
        let refreshButton = UIButton(type: .system)
        refreshButton.frame = CGRect(x: 10, y: 10, width: 100, height: 40)
        refreshButton.setTitle("위치 새로고침", for: .normal)
        refreshButton.addTarget(self, action: #selector(refreshLocation), for: .touchUpInside)
        mapViewContainer.addSubview(refreshButton)
    }

    // 생략...

    // 위치가 업데이트되었을 때 호출되는 메서드
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        if let coor = manager.location?.coordinate {
            print("업데이트된 위치 - 위도: \(coor.latitude), 경도: \(coor.longitude)")
            let region = MKCoordinateRegion(center: coor, latitudinalMeters: 1000, longitudinalMeters: 1000)
            mapView.setRegion(region, animated: true)
            locationManager.stopUpdatingLocation()
        }
    }

    // 위치 새로고침 버튼 클릭 시 호출되는 메서드
    @objc func refreshLocation() {
        locationManager.startUpdatingLocation()
    }
}
