---
title: OriginToReceptor
description: Renders notes from note origin to receptor in a straight line
---

# DEPRECATED!

The `OriginToReceptor` renderer is designed to create a dynamic visualization of notes moving from their origin point to the receptor. This rendering style is common in rhythm games, where notes travel along a path to a fixed target that the player interacts with.

### Functionality of the Renderer:

- **Path Creation**: It creates a path for each note from its starting position (origin) to its destination (receptor).
- **Dynamic Rendering**: The notes are rendered dynamically, considering various factors like the time of appearance, duration, easing, and visual effects like scaling and rotation.
- **Note Types Handling**: The renderer can manage different types of notes, including normal notes and hold notes (sliders), and can selectively hide them based on settings.
- **Visual Effects**: It includes effects such as fade-in, fade-out, rotation, and scaling to make the notes' movement visually appealing and intuitive.

### Parameters Explained:

- `instance`: `DrawInstance` - This is the instance of the drawing process, containing all necessary information like the playfield instance, note visibility settings, and animation parameters.
- `duration`: `double` - The duration over which the notes will be rendered.
- `renderReceptor`: `bool` (default: `true`) - A flag to determine whether the receptor (the target where notes end) should be rendered.

### Customizable Aspects:

- **Note Visibility**: You can choose to hide normal notes or hold notes based on the gameplay requirements.
- **Animation Duration and Timing**: The duration for how long the notes are visible and their synchronization with the music can be adjusted.
- **Easing and Movement Style**: The easing function can be changed to alter how the notes move along the path. The renderer can also adapt the movement style (linear, bezier, etc.).
- **Rotation and Scaling**: Adjustments can be made to how notes rotate to face the receptor and how they scale during their movement.
- **Fade Effects**: The timing and style of fade-in and fade-out effects can be modified.
