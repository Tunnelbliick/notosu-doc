---
title: Stutter
description: Renders notes with a stuttering movement from their origin to the receptor
---

# DEPRECATED!

The `Stutter` renderer introduces a unique and dynamic way to visualize notes in game. It is characterized by its stuttering movement, where notes move in a jerky fashion from their origin to the receptor. This style creates an engaging visual effect that adds to the rhythmic complexity of the game.

### Functionality of the Renderer:

- **Stuttered Movement**: Implements a stuttering effect for each note, creating a jerky and discontinuous movement from the origin to the receptor.
- **Note Type Handling**: Manages different types of notes including normal notes and holds (hold notes), with options to selectively render them.
- **Dynamic Rendering**: Notes are rendered dynamically, taking into account factors like appearance time, duration, easing, and additional visual effects.

### Parameters Explained:

- `instance`: `DrawInstance` - The context for the drawing process, encompassing information like the playfield instance, settings for note visibility, and animation parameters.
- `duration`: `double` - The time period over which the notes will be rendered with the stutter effect.
- `renderReceptor`: `bool` (default: `true`) - Indicates whether the receptor (the target endpoint for notes) should be visually rendered.

### Customizable Aspects:

- **Note Visibility**: Allows hiding of either normal notes or holds based on gameplay needs.
- **Animation Duration and Timing**: The duration of the notes' visibility and their synchronization with the music are adjustable.
- **Easing and Movement Style**: The easing function can be modified to change the nature of the stutter movement. Different movement styles can be implemented to suit the gameplay.
- **Rotation and Scaling**: The renderer offers flexibility in adjusting how notes rotate towards the receptor and their scaling during the stutter movement.
- **Fade Effects**: Customization options for the timing and style of fade-in and fade-out effects are available.

### Additional Features:

- **Synchronized Stutter Effect**: The renderer calculates the timing of the next note to hit, synchronizing the stutter effect across multiple notes for a cohesive visual experience.
- **Hold Note Handling**: Special consideration is given to hold notes, ensuring their movement and scaling align with the stutter effect.