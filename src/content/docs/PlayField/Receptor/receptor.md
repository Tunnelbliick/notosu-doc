---
title: Receptor
description: Properties, Methods, and Functions for Receptor Objects in a Rhythm Game Playfield
---

The `Receptor` class in a rhythm game represents individual receptors within the playfield. It handles their positioning, animations, and interactions, offering functionalities for moving, scaling, and rotating these elements in response to the gameplay.

## Properties

- `receptorSpritePath`: `string` - Path to the sprite used for the receptor.
- `position`: `Vector2` - The position of the receptor on the playfield.
- `layer`: `StoryboardLayer` - The storyboard layer where the receptor is rendered.
- `renderedSprite`: `OsbSprite` - The actual sprite object of the receptor.
- `debug`: `OsbSprite` - A debug sprite for development purposes.
- `appliedTransformation`: `string` - Keeps track of any transformations applied to the receptor.
- `positionX`, `positionY`: `SortedDictionary<double, float>` - Tracks the X and Y positions over time.
- `rotation`: `double` - The rotation of the receptor in radians.
- `startRotation`: `double` - The initial rotation of the receptor.
- `columnType`: `ColumnType` - The type of column this receptor belongs to.
- `bpmOffset`, `bpm`: `double` - BPM and offset for timing receptor animations.
- `deltaIncrement`: `double` - Increment value for easing calculations.

## Constructors

### Receptor
Initializes a receptor with specific properties and sets up its sprite and animations.

```csharp
public Receptor(String receptorSpritePath, double rotation, StoryboardLayer layer, CommandScale scale, double starttime, ColumnType type, double delta);
```

**Parameters:**
- `receptorSpritePath` (`String`): Path to the receptor sprite.
- `rotation` (`double`): Initial rotation of the receptor in radians.
- `layer` (`StoryboardLayer`): The layer on which the receptor is rendered.
- `scale` (`CommandScale`): The scale applied to the receptor sprite.
- `starttime` (`double`): The start time for initializing the receptor animations.
- `type` (`ColumnType`): The type of column this receptor is part of.
- `delta` (`double`): Increment value for easing and other animations.

---

### Receptor (Overloaded Constructor)
Another version of the constructor allowing different initialization parameters.

```csharp
public Receptor(string receptorSpritePath, double rotation, StoryboardLayer layer, Vector2 position, ColumnType type, double delta);
```

**Parameters:**
- `receptorSpritePath` (`string`): Path to the receptor sprite.
- `rotation` (`double`): Initial rotation of the receptor in radians.
- `layer` (`StoryboardLayer`): The layer on which the receptor is rendered.
- `position` (`Vector2`): The initial position of the receptor.
- `type` (`ColumnType`): The type of column this receptor is part of.
- `delta` (`double`): Increment value for easing and other animations.

## Methods

### MoveReceptorAbsolute
Moves the receptor to an absolute position.

```csharp
public void MoveReceptorAbsolute(double starttime, Vector2 endPos);
```

**Parameters:**
- `starttime` (`double`): The start time for the movement.
- `endPos` (`Vector2`): The end position for the receptor.

---

### MoveReceptorAbsolute (Overloaded)
Moves the receptor from one position to another over a time range with easing.

```csharp
public void MoveReceptorAbsolute(OsbEasing ease, double starttime, double endtime, Vector2 startPos, Vector2 endPos);
```

**Parameters:**
- `ease` (`OsbEasing`): The easing function for the movement transition.
- `starttime` (`double`): The start time for the movement.
- `endtime` (`double`): The end time for the movement.
- `startPos` (`Vector2`): The starting position.
- `endPos` (`Vector2`): The ending position.

---

### MoveReceptorRelative
Moves the receptor relative to its current position.

```csharp
public void MoveReceptorRelative(OsbEasing ease, double starttime, double endtime, Vector2 offset);
```

**Parameters:**
- `ease` (`OsbEasing`): The easing function for the movement.
- `starttime` (`double`): The start time for the movement.
- `endtime` (`double`): The end time for the movement.
- `offset` (`Vector2`): The offset for the movement.

---

### RotateReceptor, PivotReceptor
Rotates the receptor either absolutely or around a pivot point.

```csharp
public void RotateReceptorAbsolute(OsbEasing ease, double starttime, double endtime, double rotation);
public void PivotReceptor(OsbEasing ease, double starttime, double endtime, double rotation, Vector2 center);
```

**Parameters for `RotateReceptorAbsolute`:**
- `ease` (`OsbEasing`): The easing function for the rotation transition.
- `starttime` (`double`): The start time for the rotation.
- `endtime` (`double`): The end time for the rotation.
- `rotation` (`double`): The angle of rotation in radians.

**Parameters for `PivotReceptor`:**
- `ease` (`OsbEasing`): The easing function for the rotation.
- `starttime` (`double`): The start time for the rotation effect.
- `endtime` (`double`): The end time for the rotation effect.
- `rotation` (`double`): The angle of rotation in radians.
- `center` (`Vector2`): The center point around which the receptor rotates.

---

### Render, RenderTransformed
Manages the rendering of the receptor sprite with or without transformations.

```csharp
public void Render(double starttime, double endtime);
public void RenderTransformed(double starttime, double endtime, string reference);
```

**Parameters for `Render`:**
- `starttime` (`double`): The start time for the rendering.
- `endtime` (`double`): The end time for the rendering.

**Parameters for `RenderTransformed`:**
- `starttime` (`double`): The start time for the transformed rendering.
- `endtime` (`double`): The end time for the transformed rendering.
- `reference` (`string`): A reference identifier for the specific transformation.

---

### Utility Methods
Include additional methods for handling specific properties like position, scale, and rotation at different times.

```csharp
public Vector2 PositionAt(double time);
public float RotationAt(double currentTIme);
public Vector2 ScaleAt(double currentTime);
```

**Utility Method Descriptions:**
- `PositionAt`: Retrieves the receptor's position at a specified time.
- `RotationAt`: Retrieves the receptor's rotation at a given time.
- `ScaleAt`: Retrieves the receptor's scale at a certain time.

These utility methods provide essential functionalities for dynamically managing the receptor's position, rotation, and scale, aligning them with the rhythm and flow of the game.