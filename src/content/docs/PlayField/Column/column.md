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

### MoveColumn
Moves the entire column from one position to another over a given time range.

```csharp
public void MoveColumn(OsbEasing easing, double starttime, double endtime, Vector2 from, Vector2 to);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function for the movement transition.
- `starttime` (`double`): The start time for the movement.
- `endtime` (`double`): The end time for the movement.
- `from` (`Vector2`): The starting position.
- `to` (`Vector2`): The ending position.

---

### MoveColumnRelative, MoveColumnRelativeX, MoveColumnRelativeY
Moves the column relative to its current position, with variants for specific axis movement.

```csharp
public void MoveColumnRelative(OsbEasing easing, double starttime, double endtime, Vector2 offset);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function for the movement.
- `starttime` (`double`): The start time for the movement.
- `endtime` (`double`): The end time for the movement.
- `offset` (`Vector2`): The amount and direction of the movement.

---

### RotateReceptor, RotateReceptorRelative
Rotates the receptor either to an absolute angle or relative to its current orientation.

```csharp
public void RotateReceptorRelative(OsbEasing easing, double starttime, double endtime, double rotation);
public void RotateReceptor(OsbEasing easing, double starttime, double endtime, double rotation);
```

**Parameters:**
- `easing` (`OsbEasing`): The easing function for the rotation.
- `starttime` (`double`): The start time for the rotation.
- `endtime` (`double`): The end time for the rotation.
- `rotation` (`double`): The angle of rotation (in radians).

---

### MoveOrigin, MoveOriginAbsolute, MoveOriginRelative
Manages the movement of the origin point of the column.

```csharp
public void MoveOriginAbsolute(double starttime, Vector2 newOriginPosition);
```

**Parameters:**
- `starttime` (`double`): The time at which the movement starts.
- `newOriginPosition` (`Vector2`): The new position for the origin.

---

### Position, Rotation, and Scale at Time Methods
Retrieves the position, rotation, or scale of the origin or receptor at a specific time.

```csharp
public Vector2 OriginPositionAt(double starttime);
```

**Parameters:**
- `starttime` (`double`): The time at which to get the position, rotation, or scale.

---

These methods and properties provide comprehensive control over individual columns within the rhythm game's playfield, facilitating dynamic animations and interactions that align with the game's music and rhythm.

### Position, Rotation, and Scale at Time Methods (Continued)

**Additional Methods:**
- `OriginRotationAt(double starttime)`: Gets the rotation of the origin at a specific time.
- `OriginScaleAt(double starttime)`: Gets the scale of the origin at a specific time.
- `ReceptorPositionAt(double starttime)`: Retrieves the position of the receptor at a given time.
- `ReceptorRotationAt(double starttime)`: Retrieves the rotation of the receptor at a specified time.
- `ReceptorScaleAt(double starttime)`: Retrieves the scale of the receptor at a given time.

These methods are crucial for synchronizing the visual elements of each column with the rhythm and timing of the music, ensuring a cohesive and engaging gameplay experience.

---

### Utility and Additional Methods

**MoveOrigin and Similar Methods:**
- `MoveOriginAbsolute(OsbEasing ease, double starttime, double endtime, Vector2 startPos, Vector2 endPos)`: Moves the origin of the column to a new position over time with easing.
- `MoveOriginRelative(OsbEasing ease, double starttime, double endtime, Vector2 offset)`: Moves the origin of the column relative to its current position.

These methods allow for precise control over the positioning of note origins within each column, adding to the dynamic visual appeal of the game.