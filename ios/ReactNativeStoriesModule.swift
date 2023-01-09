//
//  ReactNativeStoriesModule.swift
//  ReactNativeStoriesModule
//
//  Copyright © 2022 Surya Nune. All rights reserved.
//

import Foundation

@objc(ReactNativeStoriesModule)
class ReactNativeStoriesModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
