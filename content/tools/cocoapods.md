---
title: "CocoaPods"
date: 2026-04-08T00:00:00Z
draft: false
description: "Dependency manager for Swift and Objective-C Cocoa projects, simplifying the integration of third-party libraries."
categories: ["tools"]
tags: ["cocoapods", "ios", "macos", "swift", "objective-c", "dependency-manager"]
---

## Overview

CocoaPods is a dependency manager for Swift and Objective-C Cocoa projects. It simplifies the process of integrating third-party libraries (known as "pods") into your Xcode projects, handling versioning and transitive dependencies.

## Installation

CocoaPods is built with Ruby and can be installed using the default Ruby available on macOS.

```bash
# Install CocoaPods
sudo gem install cocoapods

# Install a pre-release version
sudo gem install cocoapods --pre
```

## Basic Workflow

### Podfile
A `Podfile` is a specification that describes the dependencies of a project.

```bash
# Create a Podfile in your project's root directory
pod init
```

An example `Podfile`:
```ruby
platform :ios, '15.0'

target 'MyApp' do
  # Comment the next line if you don't want to use dynamic frameworks
  use_frameworks!

  # Pods for MyApp
  pod 'Alamofire', '~> 5.4'
  pod 'SnapKit'
end
```

### Installing Dependencies

```bash
# Install dependencies from Podfile
pod install
```
This command creates an `.xcworkspace` file. You should use this file to open your project in Xcode from now on.

### Updating Dependencies

```bash
# Update all pods to the newest versions allowed by your Podfile
pod update

# Update a specific pod
pod update [POD_NAME]
```

## Common Commands

### Managing Pods
```bash
# Search for a pod
pod search [POD_NAME]

# Check for outdated pods
pod outdated

# Show the path to a pod's source files
pod try [POD_NAME]
```

### Repository Management
```bash
# Update the local spec repo
pod repo update

# Add a private spec repo
pod repo add [REPO_NAME] [REPO_URL]

# Remove a spec repo
pod repo remove [REPO_NAME]
```

### Project Integration
```bash
# Remove CocoaPods from your Xcode project
pod deintegrate

# Lint a podspec
pod lib lint

# Lint a podspec from a remote repo
pod spec lint [POD_NAME]
```

## Quick Reference

```bash
# Initialize a Podfile
pod init

# Install dependencies
pod install

# Update all dependencies
pod update

# Update a specific dependency
pod update [POD_NAME]

# Search for a pod
pod search [POD_NAME]

# Check for outdated pods
pod outdated

# Remove CocoaPods from a project
pod deintegrate
```

## See Also

- [Official CocoaPods Website](https://cocoapods.org/)
- [CocoaPods Guides](https://guides.cocoapods.org/)
- [Podfile Syntax Reference](https://guides.cocoapods.org/syntax/podfile.html)
