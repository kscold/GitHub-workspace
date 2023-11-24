//
//  OnboardingViewController.swift
//  MePick
//
//  Created by 김승찬 on 11/15/23.
//

import UIKit

class OnboardingViewController: UIViewController {

    @IBOutlet weak var collectionView: UICollectionView!
    @IBOutlet weak var nextBtn: UIButton!
    @IBOutlet weak var pageControl: UIPageControl!

    var slides: [OnboardingSlide] = []

    var currentPage = 0 {
        didSet {
            pageControl.currentPage = currentPage
            if currentPage == slides.count - 1 {
                nextBtn.setTitle("시작하기", for: .normal)
            } else {
                nextBtn.setTitle("다음", for: .normal)
            }
        }
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        slides = [
            OnboardingSlide(title: "음식점 랜덤 추천", description: "늘 같은 음식, 뭐를 먹을지 모르겠어 ㅠ, 우리동네에서 뭐먹지?\n고민하지 말고 버튼을 눌러 추천 음식점을 확인해보세요!", image: #imageLiteral(resourceName: "random")),
            OnboardingSlide(title: "디테일적인 내용", description: "앞서 랜덤으로 뽑은 음식점에 대한 정보들을 보고 싶다면?\nMePick은 이름뿐만 아니라 카테고리와\n그 음식점에 대한 정보들도 보여드려요!", image: #imageLiteral(resourceName: "detail")),
            OnboardingSlide(title: "내 주변 음식점, 카페 확인", description: "내 주변에는 어떤 음식점과 카페가 있지?\n일일이 확인하지 말고 바로 지도로 확인하세요!", image: #imageLiteral(resourceName: "map")),
            
        ]

        pageControl.numberOfPages = slides.count


    }


    @IBAction func nextBtnClicked(_ sender: UIButton) {
        if currentPage == slides.count - 1 {
//            print("Go to the next page")
            let controller = storyboard?.instantiateViewController(identifier: "HomeNC") as! UINavigationController
            controller.modalPresentationStyle = .fullScreen
            controller.modalTransitionStyle = .flipHorizontal

            present(controller, animated: true, completion: nil)
        } else {
            currentPage += 1
            let indexPath = IndexPath(item: currentPage, section: 0)
            collectionView.scrollToItem(at: indexPath, at: .centeredHorizontally, animated: true)
        }
    }

}

extension OnboardingViewController: UICalendarViewDelegate,
    UICollectionViewDataSource,
    UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection secttion: Int) -> Int {
        return slides.count
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: OnboardingCollectionViewCell.identifier, for: indexPath) as! OnboardingCollectionViewCell

        cell.setup(slides[indexPath.row])
        return cell
    }

    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        return CGSize(width: collectionView.frame.width, height: collectionView.frame.height)
    }

    func scrollViewDidEndDecelerating(_ scrollView: UIScrollView) {
        let width = scrollView.frame.width
        let currentPage = Int(scrollView.contentOffset.x / width)

        pageControl.currentPage = currentPage
    }
}

