---
title: Utility Methods
description: A comprehensive guide to utility functions in StorybrewScripts for storyboard scripting in rhythm games.
---

The `Utility` class in StorybrewScripts serves as a toolbox of essential functions for storyboard scripting. These functions offer a wide range of calculations and manipulations, facilitating complex animations and dynamic storyboard elements.

## Key Functions

### Geometric Transformations
- **`PivotPoint`**: Rotates a given point around a specified center by a certain angle in radians.
  ```csharp
  public static Vector2 PivotPoint(Vector2 point, Vector2 center, double radians);
  ```

### Waveform Calculations
- **`SineWaveValue`**, **`CosWaveValue`**, **`TanValue`**: Calculates the waveform value (sine, cosine, tangent) for a given time, amplitude, and frequency.
  ```csharp
  public static double SineWaveValue(double amplitude, double frequency, double t);
  ```

### Distance Calculation
- **`CalculateDistance`**: Computes the Euclidean distance between two points.
  ```csharp
  public static float CalculateDistance(Vector2 firstPoint, Vector2 secondPoint);
  ```

### Smooth Amplitude Calculation
- **`SmoothAmplitudeByTime`** and **`SmoothAmplitudeByProgress`**: Interpolates a value smoothly over time or progress between a start and an end value.
  ```csharp
  public static float SmoothAmplitudeByTime(double currentTime, double starttime, double endtime, double startValue, double endValue, float defaultValue = 0);
  ```

## Functionality and Usage

1. **Geometric Transformations**:
   - `PivotPoint` is crucial for rotating storyboard elements around a specific point, enabling complex animations and transitions.

2. **Waveform Calculations**:
   - These functions are ideal for creating oscillating effects, such as moving elements in a waveform pattern or creating rhythmic visual effects in sync with music.

3. **Distance Calculation**:
   - `CalculateDistance` can be used to determine spatial relationships or trigger events based on the proximity of storyboard elements.

4. **Smooth Amplitude Calculation**:
   - `SmoothAmplitudeByTime` and `SmoothAmplitudeByProgress` assist in creating smooth transitions and easing effects, enhancing the visual appeal of storyboards.