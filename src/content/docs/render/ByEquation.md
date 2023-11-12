---
title: ByEquation
description: Renders notes via a passed Equation
---

### Components:

1. **`EquationParameters` Class**: This class encapsulates all the parameters needed for the equation. These include the position, time, progress of the animation, the sprite representing the note, and additional information about the note and its column.

2. **`EquationFunction` Delegate**: This delegate defines the signature for the equation functions. It takes an `EquationParameters` object and returns a `Vector2` representing the new position of the note.

3. **`ByEquation` Class**: This class contains the method `drawViaEquation`, which uses the provided equation function to animate notes.

### `drawViaEquation` Method Explained:

- **Parameters**:
  - `instance`: The current drawing instance with settings and context.
  - `duration`: The duration for which the notes are to be animated.
  - `equation`: The custom equation function that defines the note's movement.
  - `renderReceptor`: A flag to indicate whether the receptor should be rendered.

- **Process**:
  - Iterates through each column and each note.
  - Calculates the position, scale, and rotation of each note based on the equation function.
  - Applies these transformations to the notes.

### Understanding `EquationParameters`

The `EquationParameters` class serves as a container for various properties that are relevant to the computation of a note's position or transformation during animation. These properties include:

1. **`position` (Vector2)**: Represents the current position of the note.
2. **`time` (double)**: The specific time at which the note's position is being calculated. This is crucial for time-dependent transformations.
3. **`progress` (float)**: A value between 0 and 1 indicating the progress of the note's movement or animation.
4. **`sprite` (OsbSprite)**: The sprite associated with the note. This allows for direct manipulation of the note's visual representation.
5. **`part` (SliderParts)**: If the note is part of a slider, this contains information about that specific part of the slider.
6. **`note` (Note)**: The note object itself, containing all its properties and states.
7. **`column` (Column)**: The column in which the note resides. This is useful for determining positional context within the playfield.
8. **`isHoldBody` (bool)**: A flag indicating whether the current note is part of a hold/slider body, as opposed to being an individual note.

### Example `NoteFunction`

Let's create a simple `NoteFunction` that makes notes move in a horizontal wave pattern as they approach their target position. This function will utilize the `progress` and `time` parameters to create the wave effect.

```csharp
Vector2 WaveNoteFunction(EquationParameters parameters)
{
    // Extracting necessary parameters
    var position = parameters.position;
    var progress = parameters.progress;
    var time = parameters.time;

    // Defining the amplitude and frequency of the wave
    float amplitude = 10f; // The height of the wave
    float frequency = 2f; // How many waves per second

    // Calculating the wave's offset based on time
    float waveOffset = (float)Math.Sin(time * frequency) * amplitude;

    // Adjusting the X position based on the progress and wave offset
    // The wave effect diminishes as the note gets closer to its target (progress approaches 1)
    position.X += waveOffset * (1 - progress);

    return position;
}
```

### Explanation of the `WaveNoteFunction`

- The function takes `EquationParameters` as its input, providing context for the note's movement.
- We extract the `position`, `progress`, and `time` from the `EquationParameters`.
- The wave pattern is defined by its `amplitude` (height) and `frequency` (speed).
- We calculate the horizontal offset (`waveOffset`) for the note using the sine function, which creates a smooth wave motion.
- The note's horizontal position (`X`) is then adjusted by this offset, scaled down as the note progresses towards its target (i.e., as `progress` approaches 1, the wave effect diminishes).
- The function returns the new position, creating a dynamic wave movement for each note.