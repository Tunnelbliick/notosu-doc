---
title: Playfield
description: Properties Methods and Functions for Playfields
---

The `Playfield` class primarily handles the visual elements of the game, including receptors, notes, and their animations. It offers a range of functions to manipulate these elements, such as moving, scaling, rotating, and adding effects.

## Properties

- `delta`: Represents the time difference for animations.
- `absoluteWidth`, `width`, `height`: Define the size of the playfield.
- `receptorWallOffset`: Offset for the receptor from the wall.
- `rotation`: Controls the rotation of elements in the playfield.
- `isColored`: Indicates if the notes should be colored.
- `starttime`, `endtime`: Define the time range for the playfield's activity.
- `noteStart`, `noteEnd`: Time range specifically for notes.
- `noteLayer`, `receptorLayer`: Storyboard layers for notes and receptors.
- `columns`: Dictionary mapping column types to their respective column objects.
- `effectReferenceByStartTime`: Stores effects by their start time.
- `columnNotes`: Maps notes to their respective columns and times.
- `fadeAtTime`: Manages fade effects at specific times.

## Initialization

- `InitializePlayField()`: Sets up the playfield with specified dimensions, time range, and layers.
- `InitializeNotes()`: Initializes notes based on given OsuHitObjects, BPM, and offset.

### InitializePlayField
Initializes the playfield with designated dimensions, layers, and the time range for its activity.

```csharp
public void InitializePlayField(StoryboardLayer receptors, StoryboardLayer notes, double starttime, double endtime, float initialWidth, float initialHeight, float receptorWallOffset);
```

**Parameters:**
- `receptors` (`StoryboardLayer`): The layer on which receptors are displayed.
- `notes` (`StoryboardLayer`): The layer on which notes are displayed.
- `starttime` (`double`): The starting time for the playfield's activity.
- `endtime` (`double`): The ending time for the playfield's activity.
- `initialWidth` (`float`): The initial width of the playfield.
- `initialHeight` (`float`): The initial height of the playfield.
- `receptorWallOffset` (`float`): The offset for receptors from the playfield's wall.

### InitializeNotes
Sets up notes in the playfield using a list of hit objects, bpm, and other musical elements.

```csharp
public void InitializeNotes(List<OsuHitObject> objects, double bpm, double offset, bool isColored = false, double msPerPart = 30);
```

**Parameters:**
- `objects` (`List<OsuHitObject>`): A list of hit objects to be converted into notes.
- `bpm` (`double`): The beats per minute, defining the rhythm of the notes.
- `offset` (`double`): The timing offset for syncing notes with the music.
- `isColored` (`bool`, optional): Indicates if notes should have distinct colors.
- `msPerPart` (`double`, optional): Timing precision for more complex notes like sliders or holds.

## Functions

- `Resize()`: Resizes the playfield and adjusts positions of receptors and origins.
- `ScaleOrigin()`, `ScaleReceptor()`: Scales either the origin or receptor elements.
- `MoveColumnRelative()`, `MoveColumnRelativeX()`, `MoveColumnRelativeY()`: Moves columns relative to their current position.
- `RotateReceptorRelative()`, `RotateReceptorAbsolute()`: Rotates receptors.
- `RotatePlayFieldStatic()`: Rotates the entire playfield while keeping receptors static. // Defunc class
- `Rotate()`: Rotates the playfield with dynamic receptor movement.
- `RotateColumn()`: Rotates a specific column.
- `MoveFieldX()`, `MoveFieldY()`, `MoveField()`: Moves the entire field along specified axes.

### Resize
Adjusts the size of the playfield and repositions elements to fit the new dimensions.

```csharp
public void Resize(OsbEasing easing, double starttime, double endtime, float width, float height);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function used for the resizing animation.
- `starttime` (`double`): The start time for the resizing effect.
- `endtime` (`double`): The end time for the resizing effect.
- `width` (`float`): The new width of the playfield.
- `height` (`float`): The new height of the playfield.

---

### ScaleOrigin, ScaleReceptor
Scales either the origin or receptor elements in the playfield.

```csharp
public void ScaleOrigin(OsbEasing easing, double starttime, double endtime, Vector2 scale, ColumnType type);
public void ScaleReceptor(OsbEasing easing, double starttime, double endtime, Vector2 scale, ColumnType type);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function for the scaling transition.
- `starttime` (`double`): The start time for the scaling effect.
- `endtime` (`double`): The end time for the scaling effect.
- `scale` (`Vector2`): The scale factor for the transformation.
- `type` (`ColumnType`): The type of column to which the scaling is applied.

---

### MoveColumnRelative
Moves columns in the playfield relative to their current position, useful for dynamic layout adjustments.

```csharp
public void MoveColumnRelative(OsbEasing easing, double starttime, double endtime, Vector2 offset, ColumnType type);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function for the movement transition.
- `starttime` (`double`): The start time for the movement effect.
- `endtime` (`double`): The end time for the movement effect.
- `offset` (`Vector2`): The amount and direction of the movement.
- `type` (`ColumnType`): The type of column to be moved.

---

### RotateReceptorRelative, RotateReceptorAbsolute
Rotates receptors in the playfield, either relative to their current orientation or to an absolute angle.

```csharp
public void RotateReceptorRelative(OsbEasing easing, double starttime, double endtime, double rotation, ColumnType type);
public void RotateReceptorAbsolute(OsbEasing easing, double starttime, double endtime, double rotation, ColumnType type);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function for the rotation transition.
- `starttime` (`double`): The start time for the rotation effect.
- `endtime` (`double`): The end time for the rotation effect.
- `rotation` (`double`): The angle of rotation (in radians).
- `type` (`ColumnType`): The type of column whose receptors will be rotated.

---

### Rotate
Rotates the playfield dynamically, adjusting the position of receptors accordingly.

```csharp
public void Rotate(OsbEasing easing, double starttime, double endtime, double radians, CenterType centerType = CenterType.middle);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function for the rotation.
- `starttime` (`double`): The start time for the rotation effect.
- `endtime` (`double`): The end time for the rotation effect.
- `radians` (`double`): The angle of rotation in radians.
- `centerType` (`CenterType`, optional): The center around which the rotation occurs.

---

### RotateColumn
Specifically rotates a single column in the playfield.

```csharp
public void RotateColumn(OsbEasing easing, double starttime, double endtime, double radians, ColumnType columnType, CenterType centerType = CenterType.middle);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function for the rotation.
- `starttime` (`double`): The start time for the rotation effect.
- `endtime` (`double`): The end time for the rotation effect.
- `radians` (`double`): The angle of rotation in radians.
- `columnType` (`ColumnType`): Specifies which column to rotate.
- `centerType` (`CenterType`, optional): The center around which the rotation occurs.

---

### MoveFieldX, MoveFieldY, MoveField
Moves the entire field along specified axes.

```csharp
public void MoveFieldX(OsbEasing easing, double starttime, double endtime, float amount);
public void MoveFieldY(OsbEasing easing, double starttime, double endtime, float amount);
public void MoveField(OsbEasing easing, double starttime, double endtime, float amountX, float amountY);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function for the movement.
- `starttime` (`double`): The start time for the movement effect.
- `endtime` (`double`): The end time for the movement effect.
- `amount`, `amountX`, `amountY` (`float`): The amount of movement along the X or Y axis.

---

## Utility Functions

### EffectType Enumeration
This is an enumeration that specifies different types of effects that can be applied to the playfield.

```csharp
public enum EffectType
{
    RenderPlayFieldUntil,
    RenderPlayFieldFrom
}
```

**Members:**
- `RenderPlayFieldUntil`: Used to render the playfield up to a certain point in time.
- `RenderPlayFieldFrom`: Used to start rendering the playfield from a specific point in time.

---

### AddEffect
Adds a specified effect to the playfield, taking into account the effect type and a reference.

```csharp
public void AddEffect(double starttime, double endtime, EffectType type, string reference)
```

**Parameters:**
- `starttime` (`double`): The start time when the effect begins.
- `endtime` (`double`): The end time when the effect ends.
- `type` (`EffectType`): The type of effect to be added, as defined in the `EffectType` enum.
- `reference` (`string`): A reference identifier for the specific effect.

---

### AddEffectWithValue
Similar to `AddEffect`, but this function also includes a value parameter for effects that require a numerical input.

```csharp
public void AddEffectWithValue(double starttime, double endtime, EffectType type, string reference, float value)
```

**Parameters:**
- `starttime` (`double`): The start time for the effect.
- `endtime` (`double`): The end time for the effect.
- `type` (`EffectType`): The type of effect, as defined in the `EffectType` enum.
- `reference` (`string`): A reference string for the effect.
- `value` (`float`): An additional value that might be needed for the effect.

Continuing with additional utility functions in the `Playfield` class:

---

### FadeAt
Applies a fade effect at a specific time or over a time range, which is essential for creating dynamic visual transitions.

```csharp
public void FadeAt(double time, float fade)
public void FadeAt(double time, double endtime, OsbEasing easing, float fade)
```

**Parameters:**
- `time` (`double`): The time at which the fade effect starts.
- `endtime` (`double`): The end time for the fade effect (used in the second variant).
- `easing` (`OsbEasing`): The easing function for the fade transition (second variant).
- `fade` (`float`): The target fade value or intensity.

---

### FindFadeAtTime
Retrieves the fade effect value at a given time, useful for synchronizing other effects with existing fades.

```csharp
public float FindFadeAtTime(double time)
```

**Parameters:**
- `time` (`double`): The specific time at which to retrieve the fade value.

---

### GetColumnWidth
Calculates the width of a single column based on the current playfield width. This function is essential for consistent spacing and alignment of game elements.

```csharp
public float GetColumnWidth()
public float GetColumnWidth(float width)
```

**Parameters:**
- `width` (`float`): The width of the playfield (used in the second variant).

---

### CalculateOffset
Determines the offset needed to center the playfield within the absolute width of the storyboard. This function is key for ensuring that the playfield is properly aligned in the game space.

```csharp
public float CalculateOffset()
public float CalculateOffset(float width)
```

**Parameters:**
- `width` (`float`): The width of the playfield (used in the second variant).

---

### CalculatePlayFieldCenter
Computes the center point of the playfield at a specific time, which is crucial for positioning and rotating elements around the playfield’s center.

```csharp
public Vector2 CalculatePlayFieldCenter(double currentTime)
```

**Parameters:**
- `currentTime` (`double`): The time at which to calculate the center of the playfield.
