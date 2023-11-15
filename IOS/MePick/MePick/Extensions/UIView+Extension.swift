//
//  UIView+Extension.swift
//  MePick
//
//  Created by 김승찬 on 11/15/23.
//

import UIKit

extension UIView {
    @IBInspectable var cornerRadius: CGFloat {
        get { return cornerRadius }
        set {
            self.layer.cornerRadius = newValue
        }
    }
}
