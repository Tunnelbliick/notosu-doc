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
Sets up the playfield with initial dimensions, layers, and columns.

```csharp
public void InitializePlayField(StoryboardLayer receptors, StoryboardLayer notes, double starttime, double endtime, float initialWidth, float initialHeight, float receptorWallOffset, double OverallDifficulty);
```

**Parameters:**
- `receptors` (`StoryboardLayer`): The layer for receptors.
- `notes` (`StoryboardLayer`): The layer for notes.
- `starttime` (`double`): The start time for the playfield's activity.
- `endtime` (`double`): The end time for the playfield's activity.
- `initialWidth` (`float`): Initial width of the playfield.
- `initialHeight` (`float`): Initial height of the playfield.
- `receptorWallOffset` (`float`): Offset for placing the receptors on the playfield.
- `OverallDifficulty` (`double`): Overall difficulty setting for the playfield.

## Methods

### SetWidth
Sets the width of the playfield.

```csharp
public void SetWidth(float width);
```

**Parameters:**
- `width` (`float`): The new width of the playfield.

---

### SetHeight
Sets the height of the playfield.

```csharp
public void SetHeight(float height);
```

**Parameters:**
- `height` (`float`): The new height of the playfield.

---

### InitializeNotes
Initializes notes on the playfield based on hit objects and timing details.

```csharp
public void InitializeNotes(List<OsuHitObject> objects, double bpm, double offset, bool isColored = false, double msPerPart = 30);
```

**Parameters:**
- `objects` (`List<OsuHitObject>`): List of hit objects to place as notes.
- `bpm` (`double`): Beats per minute, used to calculate note timing.
- `offset` (`double`): Offset time for notes to sync correctly.
- `isColored` (`bool`): Indicates whether notes should be colored.
- `msPerPart` (`double`): Milliseconds per part for timing granularity.

---

### AddNote
Adds a note to a specific column if it overlaps with the current play time.

```csharp
public void AddNote(Dictionary<double, Note> notes, OsuHitObject hitobject, Column column, double bpm, double offset, bool isColored, double msPerPart);
```

**Parameters:**
- `notes` (`Dictionary<double, Note>`): Dictionary storing notes keyed by start time.
- `hitobject` (`OsuHitObject`): The hit object to be transformed into a note.
- `column` (`Column`): The column in which the note will be placed.
- `bpm` (`double`): Beats per minute, used for timing.
- `offset` (`double`): Offset time for the note.
- `isColored` (`bool`): If true, the note will be colored.
- `msPerPart` (`double`): Milliseconds per part, affecting note timing.

---

### Resize
Dynamically resizes the playfield dimensions over a specified period.

```csharp
public void Resize(OsbEasing easing, double starttime, double endtime, float width, float height);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing type used for the transition.
- `starttime` (`double`): Start time for the resizing effect.
- `endtime` (`double`): End time for the resizing effect.
- `width` (`float`): The new width to transition to.
- `height` (`float`): The new height to transition to.

---

### ScaleOrigin
Applies scaling to the origin of specified columns or all columns.

```csharp
public void ScaleOrigin(OsbEasing easing, double starttime, double endtime, Vector2 scale, ColumnType type);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing type used for scaling.
- `starttime` (`double`): Start time for the scaling effect.
- `endtime` (`double`): End time for the scaling effect.
- `scale` (`Vector2`): Scale factors for x and y dimensions.
- `type` (`ColumnType`): The type of columns to scale (specific or all).

---

### ScaleReceptor
Applies scaling to the receptors of specified columns or all columns.

```csharp
public void ScaleReceptor(OsbEasing easing, double starttime, double endtime, Vector2 scale, ColumnType type);
```



**Parameters:**
- `easing` (`OsbEasing`): The easing type used for scaling.
- `starttime` (`double`): Start time for the scaling effect.
- `endtime` (`double`): End time for the scaling effect.
- `scale` (`Vector2`): Scale factors for x and y dimensions.
- `type` (`ColumnType`): The type of columns to scale (specific or all).

---


### ScaleColumn
Applies scaling to both the receptors and origins of specified columns or all columns.

```csharp
public void ScaleColumn(OsbEasing easing, double starttime, double endtime, Vector2 scale, ColumnType type);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing type used for the transition.
- `starttime` (`double`): Start time for the scaling effect.
- `endtime` (`double`): End time for the scaling effect.
- `scale` (`Vector2`): The scale factors for the x and y dimensions.
- `type` (`ColumnType`): Specifies the columns to be scaled (individual column or all columns).

---

### MoveColumnRelative
Moves specified columns or all columns relative to their current positions by a given offset.

```csharp
public void MoveColumnRelative(OsbEasing easing, double starttime, double endtime, Vector2 offset, ColumnType type);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function applied to the movement.
- `starttime` (`double`): The time at which the movement starts.
- `endtime` (`double`): The time at which the movement ends.
- `offset` (`Vector2`): The offset by which the columns are moved.
- `type` (`ColumnType`): Specifies the columns to be moved (individual column or all columns).

---

### MoveColumnRelativeX
Moves specified columns or all columns relative to their current positions along the X-axis by a specified value.

```csharp
public void MoveColumnRelativeX(OsbEasing easing, double starttime, double endtime, float value, ColumnType type);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function applied to the movement.
- `starttime` (`double`): The time at which the movement starts.
- `endtime` (`double`): The time at which the movement ends.
- `value` (`float`): The value by which the X-axis position is changed.
- `type` (`ColumnType`): Specifies the columns to be moved (individual column or all columns).

---

### MoveColumnRelativeY
Moves specified columns or all columns relative to their current positions along the Y-axis by a specified value.

```csharp
public void MoveColumnRelativeY(OsbEasing easing, double starttime, double endtime, float value, ColumnType type);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function applied to the movement.
- `starttime` (`double`): The time at which the movement starts.
- `endtime` (`double`): The time at which the movement ends.
- `value` (`float`): The value by which the Y-axis position is changed.
- `type` (`ColumnType`): Specifies the columns to be moved (individual column or all columns).

---

### Scale
Scales the playfield, optionally keeping the receptors and origins in their relative positions, based on the specified center type.

```csharp
public void Scale(OsbEasing easing, double starttime, double endtime, Vector2 newScale, bool keepPosition = false, CenterType centerType = CenterType.playfield);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function applied to the scaling.
- `starttime` (`double`): The start time for the scaling.
- `endtime` (`double`): The end time for the scaling.
- `newScale` (`Vector2`): The new scaling factors for x and y dimensions.
- `keepPosition` (`bool`, optional): If true, keeps receptors and origins in their relative positions.
- `centerType` (`CenterType`): Determines the center point for the scaling (playfield, middle, or receptor).

---

### MoveReceptorAbsolute
Moves a receptor or all receptors from a specific start position to an end position over time.

```csharp
public void MoveReceptorAbsolute(OsbEasing easing, double starttime, double endtime, Vector2 from, Vector2 to, ColumnType column);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function applied to the movement.
- `starttime` (`double`): The start time for the movement.
- `endtime` (`double`): The end time for the movement.
- `from` (`Vector2`): The starting position of the receptor.
- `to` (`Vector2`): The ending position of the receptor.
- `column` (`ColumnType`): Specifies the column(s) affected (individual or all).

---

### MoveReceptorAbsolute (Overloaded)
Moves a receptor or all receptors to a new position from their current positions at a given start time.

```csharp
public void MoveReceptorAbsolute(OsbEasing easing, double starttime, double endtime, Vector2 to, ColumnType column);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function applied to the movement.
- `starttime` (`double`): The start time for the movement.
- `endtime` (`double`): The end time for the movement.
- `to` (`Vector2`): The new position of the receptor.
- `column` (`ColumnType`): Specifies the column(s) affected (individual or all).

---

### MoveReceptorRelative
Moves a receptor or all receptors by a relative offset over a specified period.

```csharp
public void MoveReceptorRelative(OsbEasing easing, double starttime, double endtime, Vector2 position, ColumnType column);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function applied to the movement.
- `starttime` (`double`): The start time for the movement.
- `endtime` (`double`): The end time for the movement.
- `position` (`Vector2`): The relative offset by which to move the receptor.
- `column` (`ColumnType`): Specifies the column(s) affected (individual or all).

---

### MoveOriginAbsolute
Moves an origin or all origins to a new position at a specified time.

```csharp
public void MoveOriginAbsolute(double starttime, Vector2 to, ColumnType column);
```

**Parameters:**
- `starttime` (`double`): The time at which the movement starts.
- `to` (`Vector2`): The new position of the origin.
- `column` (`ColumnType`): Specifies the column(s) affected (individual or all).

---

### MoveOriginAbsolute (Eased)
Moves an origin or all origins from their current positions at a given start time to a new position over a specified period, using easing.

```csharp
public void MoveOriginAbsolute(OsbEasing easing, double starttime, double endtime, Vector2 to, ColumnType column);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function applied to the movement.
- `starttime` (`double`): The start time for the movement.
- `endtime` (`double`): The end time for the movement.
- `to` (`Vector2`): The new position of the origin.
- `column` (`ColumnType`): Specifies the column(s) affected (individual or all).

---

### MoveOriginAbsolute (Eased, From-To)
Moves an origin or all origins from a specified start position to an end position over time, using easing.

```csharp
public void MoveOriginAbsolute(OsbEasing easing, double starttime, double endtime, Vector2 from, Vector2 to, ColumnType column);
```

**Parameters:**
- `easing` (`OsbEasing

`): The easing function applied to the movement.
- `starttime` (`double`): The start time for the movement.
- `endtime` (`double`): The end time for the movement.
- `from` (`Vector2`): The starting position of the origin.
- `to` (`Vector2`): The ending position of the origin.
- `column` (`ColumnType`): Specifies the column(s) affected (individual or all).

---

### RotateReceptorRelative
Rotates receptors within specified columns or all columns relative to their current rotation.

```csharp
public void RotateReceptorRelative(OsbEasing easing, double starttime, double endtime, double rotation, ColumnType column = ColumnType.all);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function applied to the rotation.
- `starttime` (`double`): The time at which the rotation starts.
- `endtime` (`double`): The time at which the rotation ends.
- `rotation` (`double`): The degree of rotation to be applied.
- `column` (`ColumnType`): Specifies the columns to be rotated (individual column or all columns).

---

### RotateReceptorAbsolute
Rotates receptors within specified columns or all columns to a specified angle over time.

```csharp
public void RotateReceptorAbsolute(OsbEasing easing, double starttime, double endtime, double rotation, ColumnType column = ColumnType.all);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function applied to the rotation.
- `starttime` (`double`): The time at which the rotation starts.
- `endtime` (`double`): The time at which the rotation ends.
- `rotation` (`double`): The absolute degree of rotation to be applied.
- `column` (`ColumnType`): Specifies the columns to be rotated (individual column or all columns).

---

### RotatePlayFieldStatic
Rotates the entire playfield statically, adjusting the receptors to maintain their relative positions despite the playfield's rotation.

```csharp
public void RotatePlayFieldStatic(OsbEasing easing, double starttime, double endtime, double radians);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing type used for the rotation.
- `starttime` (`double`): The start time for the rotation effect.
- `endtime` (`double`): The end time for the rotation effect.
- `radians` (`double`): The angle in radians to rotate the playfield.

---

### Rotate
Rotates the entire playfield, dynamically adjusting the positions of receptors to match the new orientation based on a specified center type.

```csharp
public void Rotate(OsbEasing easing, double starttime, double endtime, double radians, CenterType centerType = CenterType.middle);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing type used for the rotation.
- `starttime` (`double`): The start time for the rotation effect.
- `endtime` (`double`): The end time for the rotation effect.
- `radians` (`double`): The angle in radians to rotate the playfield.
- `centerType` (`CenterType`): The center type for the rotation (playfield, middle, or receptor).

---

### RotateColumn
Rotates a specific column within the playfield, considering different centering options for rotation.

```csharp
public void RotateColumn(OsbEasing easing, double starttime, double endtime, double radians, ColumnType columnType, CenterTypeColumn centerType = CenterTypeColumn.middle);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing type used for the rotation.
- `starttime` (`double`): The start time for the rotation effect.
- `endtime` (`double`): The end time for the rotation effect.
- `radians` (`double`): The angle in radians to rotate the column.
- `columnType` (`ColumnType`): The specific column type to be rotated.
- `centerType` (`CenterTypeColumn`): Specifies the centering type for the rotation (playfield, middle, receptor, column, or columnX).

---

### MoveFieldX
Moves the entire playfield horizontally relative to its current position.

```csharp
public void MoveFieldX(OsbEasing easing, double starttime, double endtime, float amount);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing type used for the movement.
- `starttime` (`double`): The start time for the movement.
- `endtime` (`double`): The end time for the movement.
- `amount` (`float`): The amount by which to move the field along the X-axis.

---

### MoveFieldY
Moves the entire playfield vertically relative to its current position.

```csharp
public void MoveFieldY(OsbEasing easing, double starttime, double endtime, float amount);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing type used for the movement.
- `starttime` (`double`): The start time for the movement.
- `endtime` (`double`): The end time for the movement.
- `amount` (`float`): The amount by which to move the field along the Y-axis.

---

### MoveField
Moves the entire playfield both horizontally and vertically relative to its current position.

```csharp
public void MoveField(OsbEasing easing, double starttime, double endtime, float amountX, float amountY);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing type used for the movement.
- `starttime` (`double`): The start time for the movement.
- `endtime` (`double`): The end time for the movement.
- `amountX` (`float`): The amount by which to move the field along the X-axis.
- `amountY` (`float`): The amount by which to move the field along the Y-axis.

---

### AddEffect
Adds an effect to the playfield at a specific time, specified by the type of effect and a reference.

```csharp
public void AddEffect(double starttime, double endtime, EffectType type, string reference);
```

**Parameters:**
- `starttime` (`double`): The start time when the effect begins.
- `endtime` (`double`): The end time when the effect ends.
- `type` (`EffectType`): The type of effect to be added.
- `reference` (`string`): A reference identifier for the effect.

---

### AddEffectWithValue
Adds an effect with an associated value to the playfield at a specific time, providing additional control over the effect's intensity or behavior.

```csharp
public void AddEffectWithValue(double starttime, double endtime, EffectType type, string reference, float value);
```

**Parameters:**
- `starttime` (`double`): The start time when the effect begins.
- `endtime` (`double`): The end time when the effect ends.
- `type` (`EffectType`): The type of effect to be added.
- `reference` (`string`): A reference identifier for the effect.
- `value` (`float`): A value associated with the effect, adjusting its intensity or other characteristics.

---

### FadeAt
Creates a fade effect at a specific time, using either a single or a range of time.

```csharp
public void FadeAt(double time, float fade);
public void FadeAt(double time, double endtime, float fade);
public void FadeAt(double time, double endtime, OsbEasing easing, float fade);
```

**Parameters:**
- `time` (`double`): The start time for the fade effect.
- `endtime` (`double`, optional): The end time for the fade effect, if specifying a duration.
- `easing` (`OsbEasing`, optional): The easing function applied to the fade effect.
- `fade` (`float`): The target opacity level.

---

### FindFadeAtTime
Finds the fade effect that is active at a given time.

```csharp
public float FindFadeAtTime(double time);
```

**Parameters:**
- `time` (`double`): The time at which to find the active fade effect.

**Returns:**
- (`float`): The opacity level of the fade effect active at the specified time.

---

### GetColumnWidth
Calculates the width of individual columns based on the total width of the playfield.

```csharp
public float GetColumnWidth();
public float GetColumnWidth(float width);
```

**Parameters:**
- `width` (`float`, optional): The width of the playfield, if different from the current width.

**Returns:**
- (`float`): The width of one column.

---

### CalculateOffset
Calculates the offset needed to center the columns within the playfield.

```csharp
public float CalculateOffset();
public float CalculateOffset(float width);
```

**Parameters:**
- `width` (`float`, optional): The width of the playfield, if different from the current width.

**Returns:**
- (`float`): The calculated offset.

---

### CalculatePlayFieldCenter
Calculates the center point of the playfield based on the positions of receptors and origins at a given time.

```csharp
public Vector2 CalculatePlayFieldCenter(double currentTime);
```

**Parameters:**
- `currentTime` (`double`): The time at which to calculate the center.

**Returns:**
- (`Vector2`): The center point of the playfield.