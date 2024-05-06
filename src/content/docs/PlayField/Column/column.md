---
title: Column
description: Properties, Methods, and Functions for Columns in a Rhythm Game Playfield
---

The `Column` class in a rhythm game playfield represents individual columns which handle their respective receptors, notes, and animations. It provides functionalities for moving, scaling, rotating these elements, and syncing them with the game's rhythm.

## Properties

- `type`: `ColumnType` - Specifies the type of the column.
- `offset`: `double` - X coordinate offset for this column.
- `scale`: `CommandScale` - Scale of the receptor and origin.
- `receptor`: `Receptor` - The receptor object associated with the column.
- `origin`: `NoteOrigin` - The origin point for notes in the column.
- `bpmOffset`, `bpm`: `double` - BPM and offset for timing the receptor glints and note animations.

## Constructor

### Column
Initializes a column with specific properties, creating receptor and origin objects.

```csharp
public Column(double offset, ColumnType type, String receptorSpritePath, StoryboardLayer columnLayer, CommandScale scale, double starttime, double delta);
```

**Parameters:**
- `offset` (`double`): The X coordinate for this column.
- `type` (`ColumnType`): The type of the column, determining its position and rotation.
- `receptorSpritePath` (`String`): Path to the sprite used for the receptor.
- `columnLayer` (`StoryboardLayer`): The storyboard layer where the column will be rendered.
- `scale` (`CommandScale`): The scale of the receptor and origin.
- `starttime` (`double`): The start time for initializing the receptor and origin animations.
- `delta` (`double`): Used for timing adjustments in animations.

## Methods

### setBPM
Sets the BPM for the receptor glint on full beats and adjusts the timing offset.

```csharp
public void setBPM(double bpm, double bpmOffset);
```

**Parameters:**
- `bpm` (`double`): The beats per minute, determining the rhythm timing.
- `bpmOffset` (`double`): The offset in milliseconds for aligning the BPM with the music.

---

Here is the documentation for each of the new functions you've provided, following the style of the ASTRO documentation you showed:

---

### MoveColumn
Coordinates the simultaneous absolute movement of the receptor and the origin.

```csharp
public void MoveColumn(OsbEasing easing, double starttime, double endtime, Vector2 from, Vector2 to);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function applied to the movement.
- `starttime` (`double`): The time at which the movement starts.
- `endtime` (`double`): The time at which the movement ends.
- `from` (`Vector2`): The starting position of the movement.
- `to` (`Vector2`): The ending position of the movement.

---

### MoveColumnRelative
Coordinates the simultaneous relative movement of the receptor and the origin by a specified offset.

```csharp
public void MoveColumnRelative(OsbEasing easing, double starttime, double endtime, Vector2 offset);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function applied to the movement.
- `starttime` (`double`): The time at which the movement starts.
- `endtime` (`double`): The time at which the movement ends.
- `offset` (`Vector2`): The offset by which the column is moved.

---

### MoveColumnRelativeX
Coordinates the simultaneous relative horizontal movement (X-axis) of the receptor and the origin.

```csharp
public void MoveColumnRelativeX(OsbEasing easing, double starttime, double endtime, float value);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function applied to the movement.
- `starttime` (`double`): The time at which the movement starts.
- `endtime` (`double`): The time at which the movement ends.
- `value` (`float`): The value by which the X-axis position is changed.

---

### MoveColumnRelativeY
Coordinates the simultaneous relative vertical movement (Y-axis) of the receptor and the origin.

```csharp
public void MoveColumnRelativeY(OsbEasing easing, double starttime, double endtime, float value);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function applied to the movement.
- `starttime` (`double`): The time at which the movement starts.
- `endtime` (`double`): The time at which the movement ends.
- `value` (`float`): The value by which the Y-axis position is changed.

---

### MoveReceptorAbsolute
Manages the absolute positioning of the receptor.

```csharp
public void MoveReceptorAbsolute(double starttime, Vector2 newReceptorPosition);
```

**Parameters:**
- `starttime` (`double`): The time at which the positioning starts.
- `newReceptorPosition` (`Vector2`): The new position for the receptor.

---

### MoveReceptorAbsolute (Overload)
Manages the movement of the receptor from a starting position to an ending position over a specified time period.

```csharp
public void MoveReceptorAbsolute(OsbEasing ease, double starttime, double endtime, Vector2 startPos, Vector2 endPos);
```

**Parameters:**
- `ease` (`OsbEasing`): The easing function applied to the movement.
- `starttime` (`double`): The time at which the movement starts.
- `endtime` (`double`): The time at which the movement ends.
- `startPos` (`Vector2`): The starting position of the receptor.
- `endPos` (`Vector2`): The ending position of the receptor.

---

### RotateReceptorRelative
Manages the relative rotation of the receptor over a specified time period.

```csharp
public void RotateReceptorRelative(OsbEasing easing, double starttime, double endtime, double rotation);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function applied to the rotation.
- `starttime` (`double`): The time at which the rotation starts.
- `endtime` (`double`): The time at which the rotation ends.
- `rotation` (`double`): The degree of rotation to be applied.

---

These methods and properties provide comprehensive control over individual columns within the rhythm game's playfield, facilitating dynamic animations and interactions that align with the game's music and rhythm.

### Position, Rotation, and Scale at Time Methods (Continued)

**Additional Methods:**
- `OriginPositionAt(double starttime)`: Retrieves the position of the origin at a specific time.
- `OriginRotationAt(double starttime)`: Retrieves the rotation of the origin at a specific time.
- `OriginScaleAt(double starttime)`: Retrieves the scale of the origin at a specific time.
- `ReceptorPositionAt(double starttime)`: Retrieves the position of the receptor at a given time.
- `ReceptorRotationAt(double starttime)`: Retrieves the rotation of the receptor at a specified time.
- `ReceptorScaleAt(double starttime)`: Retrieves the scale of the receptor at a given time.

These methods are crucial for synchronizing the visual elements of each column with the rhythm and timing of the music, ensuring a cohesive and engaging gameplay experience.

---

These methods allow for precise control over the positioning of note origins within each column, adding to the dynamic visual appeal of the game.