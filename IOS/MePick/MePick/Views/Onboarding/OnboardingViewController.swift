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

    var currentPage = 0

    override func viewDidLoad() {
        super.viewDidLoad()

        slides = [
            OnboardingSlide(title: "제목 1", description: "내용1", image: #imageLiteral(resourceName: "slide1.png")),
            OnboardingSlide(title: "제목 2", description: "내용2", image: #imageLiteral(resourceName: "slide2.png")),
            OnboardingSlide(title: "제목 3", description: "내용3", image: #imageLiteral(resourceName: "slide3"))
        ]



    }


    @IBAction func nextBtnClicked(_ sender: UIButton) {
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

