---
title: ByAnchors
description: Renders notes via a set of defined anchor points
---

# DEPRECATED!

The `ByAnchors` renderer calculates and renders the movement of notes based on a set of defined anchor points. This approach provides a more dynamic and visually appealing representation of notes, especially in complex sequences. 

### Explanation of What the Renderer Does:

- **Movement Calculation**: The renderer calculates the movement of each note based on a series of anchor points. These anchors define the path that the note will follow during its animation.
- **Dynamic Rendering**: It renders notes dynamically, taking into account various parameters like easing, rotation, scale, and fade effects, to create a smooth and engaging animation sequence.
- **Support for Different Note Types**: The renderer can handle different types of notes, including sliders and regular hit notes, adapting their movement and appearance accordingly.
- **Rotation and Scaling**: Notes can be rotated to face receptors and scaled as they move along the path, enhancing the visual impact.
- **Easing and Timing**: The renderer applies easing functions to the movement, scaling, and rotation of notes, allowing for more natural and varied animations.

### Parameters Explained:

- `instance`: `DrawInstance` - The instance of the drawing, containing information like the playfield, time, easing, and other settings.
- `duration`: `double` - The duration over which the notes will be rendered.
- `type`: `PathType` (default: `PathType.line`) - The type of path the notes will follow, which can be a straight line, bezier curve, etc.

### What Can Be Changed:

- **Path Type**: The path type (`line`, `bezier`, etc.) determines how the notes will move between the anchor points.
- **Easing Functions**: Different easing functions can be applied to change the acceleration and deceleration of notes.
- **Duration and Timing**: Adjusting the duration and timing parameters will affect how long the notes are visible and how they sync with the music.
- **Rotation and Scale Settings**: These can be tweaked to change how notes rotate to face receptors and how their scale changes over time.
- **Fade In/Out Timings**: The fade-in and fade-out timings can be modified to alter the appearance and disappearance of notes.

