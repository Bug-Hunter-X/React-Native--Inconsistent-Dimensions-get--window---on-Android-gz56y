# React Native Dimensions API Inconsistency on Android

This repository demonstrates a common issue encountered when using the `Dimensions` API in React Native on Android devices. The `Dimensions.get('window')` method may return inaccurate or zero dimensions immediately after the app starts or following an orientation change. This can lead to unexpected layout behavior and potential crashes.

## Problem

The core problem is the timing of when the `Dimensions` API provides accurate data.  The dimensions aren't always immediately available, resulting in incorrect calculations during layout. 

## Solution

The provided solution uses the `Dimensions.addEventListener` to listen for changes in screen dimensions. This ensures that the component using the dimensions updates whenever they change, fixing the inconsistency.