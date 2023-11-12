---
title: NoteOrigin
description: Properties, Methods, and Functions for Note Origin Objects in a Playfield
---

The `NoteOrigin` class in a playfield is responsible for managing the origin points from where the notes appear. It handles the positioning, scaling, and rotation of these points, offering functionalities to move and animate them in sync with the game.

## Properties

- `receptorSpritePath`: `string` - Path to the sprite used for the note origin.
- `layer`: `StoryboardLayer` - The storyboard layer where the note origin is rendered.
- `originSprite`: `OsbSprite` - The actual sprite object of the note origin.
- `positionX`, `positionY`: `SortedDictionary<double, float>` - Tracks the X and Y positions over time.
- `bpmOffset`, `bpm`: `double` - BPM and offset for timing the appearance of notes.
- `debug`: `OsbSprite` - A debug sprite, used for development and testing.
- `rotation`: `double` - Rotation of the note origin in radians.
- `deltaIncrement`: `double` - Increment value used for easing calculations.

## Constructor

### NoteOrigin
Initializes a note origin with specified properties, setting up its sprite and animations.

```csharp
public NoteOrigin(String receptorSpritePath, double rotation, StoryboardLayer layer, CommandScale scale, double starttime, double delta);
```

**Parameters:**
- `receptorSpritePath` (`String`): Path to the sprite used for the note origin.
- `rotation` (`double`): Initial rotation of the note origin in radians.
- `layer` (`StoryboardLayer`): The layer on which the note origin is rendered.
- `scale` (`CommandScale`): Scale of the note origin sprite.
- `starttime` (`double`): The start time for initializing animations.
- `delta` (`double`): Increment value for easing and other animation calculations.

## Methods

### Render
Handles the rendering of the note origin sprite over a specified duration.

```csharp
public void Render(double starttime, double endTime);
```

**Parameters:**
- `starttime` (`double`): The start time for the rendering.
- `endTime` (`double`): The end time for the rendering.

---

### Movement Methods
Includes methods for moving the note origin absolutely or relatively within the playfield.

```csharp
public void MoveOriginAbsolute(double starttime, Vector2 endPos);
public void MoveOriginAbsolute(OsbEasing ease, double starttime, double endtime, Vector2 startPos, Vector2 endPos);
```

**Parameters:**
- `starttime`, `endtime` (`double`): Start and end times for the movement.
- `ease` (`OsbEasing`): The easing function for the movement transition.
- `startPos`, `endPos` (`Vector2`): Starting and ending positions for the absolute movement.

---

### Scale and Rotate
Methods for adjusting the scale and rotation of the note origin.

```csharp
public void ScaleReceptor(OsbEasing ease, double starttime, double endtime, Vector2 newScale);
public void RotateReceptor(OsbEasing ease, double starttime, double endtime, double rotation);
```

**Parameters:**
- `ease` (`OsbEasing`): The easing function for scaling or rotation transitions.
- `starttime`, `endtime` (`double`): Start and end times for the scaling or rotation effect.
- `newScale` (`Vector2`): New scale vector for the note origin.
- `rotation` (`double`): The angle of rotation in radians.

---

### Utility Methods
Include additional methods for handling specific properties like position, scale, and rotation at different times.

```csharp
public Vector2 PositionAt(double time);
public float RotationAt(double time);
public Vector2 ScaleAt(double time);
```

**Utility Method Descriptions:**
- `PositionAt`: Retrieves the current position of the note origin at a specified time.
- `RotationAt`: Provides the rotation angle of the note origin at a given time.
- `ScaleAt`: Returns the scale of the note origin at a specific time.

These utility methods are vital for managing the dynamic movement and appearance of note origins, ensuring they align with the game's rhythm and enhance player interaction.