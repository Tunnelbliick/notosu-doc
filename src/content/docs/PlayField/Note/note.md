---
title: Note
description: Properties, Methods, and Functions for Note Objects in a Rhythm Game Playfield
---

![Note](../../../../assets/images/Playfield/note.jpg)

The `Note` class in a playfield is crucial for managing the individual notes that players interact with. It controls the display, movement, and animations of notes, providing various functionalities to synchronize them with the musics rhythm.

## Properties

- `noteType`: `int` - Indicates the type of note based on rhythm.
- `layer`: `StoryboardLayer` - The layer on which the note is rendered.
- `noteSprite`: `OsbSprite` - The sprite representation of the note.
- `hitObject`: `OsuHitObject` - The hit object data from the Osu! map.
- `renderStart`, `renderEnd`, `renderDuration`: `double` - Control the rendering timing of the note.
- `isSlider`: `bool` - Flag to indicate if the note is a slider.
- `starttime`, `endtime`: `double` - Start and end times of the note.
- `columnType`: `ColumnType` - The column type to which the note belongs.
- `sliderPositions`: `List<SliderParts>` - List of positions for parts of a slider.
- `sliderParts`: `int` - Number of parts in a slider.
- `appliedTransformation`: `string` - Tracks applied transformations on the note.

## Methods

### Render
Renders the note with optional fading and rotation effects based on the note's properties and external parameters.

```csharp
public void Render(double starttime, double endtime, OsbEasing easing, double initialFade, double fadeInTime = 50, double fadeOutTime = 10);
```

**Parameters:**
- `starttime` (`double`): The time when the note starts appearing.
- `endtime` (`double`): The time when the note finishes displaying.
- `easing` (`OsbEasing`): Easing effect for the fade.
- `initialFade` (`double`): Initial fade level.
- `fadeInTime` (`double`): Duration of the fade-in effect.
- `fadeOutTime` (`double`): Duration of the fade-out effect.

### ApplyHitLightingToNote
Applies hit lighting effects to a note, simulating the visual feedback of hitting a note in gameplay.

```csharp
public string ApplyHitLightingToNote(double starttime, double endtime, double fadeOutTime, Column column, double iterationRate = 10);
```

**Parameters:**
- `starttime` (`double`): When the hit lighting effect starts.
- `endtime` (`double`): When the hit lighting effect ends.
- `fadeOutTime` (`double`): Time to fade out after the effect ends.
- `column` (`Column`): Column of the note.
- `iterationRate` (`double`): Rate at which the effect updates.

### RenderTransformed
Changes the note's appearance by applying a predefined transformation, altering the sprite based on gameplay events.

```csharp
public void RenderTransformed(double starttime, double endTime, string reference, double fadeInTime = 50, double fadeOutTime = 0);
```

**Parameters:**
- `starttime` (`double`): Start time for the transformation.
- `endTime` (`double`): End time for the transformation.
- `reference` (`string`): Identifier for the transformation type.
- `fadeInTime` (`double`): Duration of the fade-in effect.
- `fadeOutTime` (`double`): Duration of the fade-out effect.

---


### UpdateTransformed
Updates the transformation of a note if it hasn't been applied already. This method is useful for dynamically changing the appearance of the note during gameplay based on specific conditions.

```csharp
public void UpdateTransformed(double starttime, double endtime, string reference, double fadeOutTime = 0);
```

**Parameters:**
- `starttime` (`double`): The time at which the update begins.
- `endtime` (`double`): The time at which the update ends.
- `reference` (`string`): Identifier for the transformation to apply.
- `fadeOutTime` (`double`, optional): Duration of the fade-out effect after the end time.

---

### Update
This method is designed to apply transformations at a specific moment, making adjustments based on gameplay feedback or other triggers.

```csharp
public string update(double currentTime, string reference, double easetime, double fadeOutTime = 0);
```

**Parameters:**
- `currentTime` (`double`): The current time at which the update is checked.
- `reference` (`string`): The transformation identifier to apply.
- `easetime` (`double`): The time over which easing effects should be applied.
- `fadeOutTime` (`double`): Duration to apply fade-out effects after transformations.

**Returns:**
- (`string`): A debug message indicating the status or outcome of the update.

---

### Invisible
Makes the note sprite completely invisible at a specified time. This can be used to hide notes from the player's view, typically after they have been hit or as part of a visual effect.

```csharp
public void invisible(double time);
```

**Parameters:**
- `time` (`double`): The exact time at which the note should become invisible.

---

### Move
Animates the movement of the note from one position to another over a specified duration, applying an easing function.

```csharp
public void Move(double starttime, double duration, OsbEasing easing, Vector2 startPosition, Vector2 endPosition);
```

**Parameters:**
- `starttime` (`double`): The start time of the movement.
- `duration` (`double`): The duration over which the movement occurs.
- `easing` (`OsbEasing`): The easing function applied to the movement.
- `startPosition` (`Vector2`): The starting position of the note.
- `endPosition` (`Vector2`): The ending position of the note.

---

### MoveAbsolute
Directly moves the note from one absolute position to another, using an easing function over a specified time range.

```csharp
public void MoveAbsolute(double starttime, double endTime, OsbEasing easing, Vector2 startPosition, Vector2 endPosition);
```

**Parameters:**
- `starttime` (`double`): The time at which the movement begins.
- `endTime` (`double`): The time at which the movement ends.
- `easing` (`OsbEasing`): The easing function used.
- `startPosition` (`Vector2`): The absolute starting position of the note.
- `endPosition` (`Vector2`): The absolute ending position of the note.

---

### Rotate
Rotates the note over a specified duration, from a starting angle to an ending angle, with an easing function.

```csharp
public void Rotate(double starttime, double duration, OsbEasing easing, double from, double to);
```

**Parameters:**
- `starttime` (`double`): The start time for the rotation.
- `duration` (`double`): The duration over which the rotation takes place.
- `easing` (`OsbEasing`): The easing function applied to the rotation.
- `from` (`double`): The starting angle in radians.
- `to` (`double`): The ending angle in radians.

---

### Scale
Changes the scale of the note smoothly from one vector scale to another over a specified time interval.

```csharp
public void Scale(double starttime, double endtime, OsbEasing easing, Vector2 before, Vector2 after);
```

**Parameters:**
- `starttime` (`double`): When the scaling begins.
- `endtime` (`double`): When the scaling ends.
- `easing` (`OsbEasing`): The easing function used for the scale transition.
- `before` (`Vector2`): The initial scale of the note.
- `after` (`Vector2`): The final scale of the note.

---


### ScaleDirect
Directly adjusts the scale of the note from one vector to another over a specified duration, with an easing function applied.

```csharp
public void ScaleDirect(double starttime, double duration, OsbEasing easing, Vector2 before, Vector2 after);
```

**Parameters:**
- `starttime` (`double`): The start time for the scaling operation.
- `duration` (`double`): The duration over which the scaling occurs.
- `easing` (`OsbEasing`): The easing function applied to the scaling.
- `before` (`Vector2`): The initial scale vector of the note.
- `after` (`Vector2`): The final scale vector of the note.

---

### Color
Changes the color of the note's sprite at a specified time.

```csharp
public void Color(double starttime, Color4 color);
```

**Parameters:**
- `starttime` (`double`): The time at which the color change should occur.
- `color` (`Color4`): The new color to apply to the note.

---

### GetRotation
Retrieves the current rotation of the note's sprite at the specified time.

```csharp
public double getRotation(double starttime);
```

**Parameters:**
- `starttime` (`double`): The time at which to check the rotation angle.

**Returns:**
- (`double`): The rotation angle of the note at the specified time.

---

### OpacityAt
Returns the current opacity level of the note at a given time, useful for transitions and visibility checks.

```csharp
public float OpacityAt(double currentTime);
```

**Parameters:**
- `currentTime` (`double`): The time at which to check the opacity level.

**Returns:**
- (`float`): The opacity of the note at the specified time.

---

### ScaleAt
Determines the scale of the note's sprite at a specified time, important for animations or size-based interactions.

```csharp
public Vector2 ScaleAt(double currentTime);
```

**Parameters:**
- `currentTime` (`double`): The time at which to check the scale.

**Returns:**
- (`Vector2`): The scale vector of the note at the specified time.

---

### GetRandomJudgement
Generates a random judgement result for the note, simulating scoring feedback as might be seen in gameplay.

```csharp
static string GetRandomJudgement();
```

**Returns:**
- (`string`): A random judgement string, such as "great" or "fantastic", based on predefined probabilities.

---