---
title: Receptor
description: Properties, Methods, and Functions for Receptor Objects in a Rhythm Game Playfield
---

The `Receptor` class represents the visual receptor element in a storyboard for osu!mania, which interacts with notes during gameplay. It manages the receptor's animation, positioning, and effects based on user interactions and game mechanics.


**Properties:**
- `receptorSpritePath`: `string` - Path to the sprite used for the receptor.
- `position`: `Vector2` - The initial position of the receptor.
- `layer`: `StoryboardLayer` - The storyboard layer where the receptor is rendered.
- `renderedSprite`: `OsbSprite` - The actual sprite object of the receptor.
- `debug`: `OsbSprite` - A sprite used for debugging purposes.
- `appliedTransformation`: `string` - Tracks any transformations applied to the receptor for special effects.
- `positionX`, `positionY`: `SortedDictionary<double, float>` - Dictionaries tracking the X and Y positions of the receptor over time.
- `light`, `hit`: `OsbSprite` - Additional sprites used for effects like lighting and hit animations.
- `rotation`: `double` - Current rotation of the receptor in radians.
- `columnType`: `ColumnType` - Type of column based on the game layout, affecting positioning and rotation.
- `bpmOffset`, `bpm`: `double` - BPM and its offset for precise timing animations.
- `deltaIncrement`: `double` - Increment value used for detailed animation calculations.

**Constructors:**
### Receptor
Initializes a new instance of the `Receptor` with specified properties, setting up its sprite and initial animations based on the column type and game settings.

```csharp
public Receptor(string receptorSpritePath, double rotation, StoryboardLayer layer, CommandScale scale, double starttime, ColumnType type, double delta);
public Receptor(string receptorSpritePath, double rotation, StoryboardLayer layer, Vector2 position, ColumnType type, double delta);
```

**Parameters:**
- `receptorSpritePath` (`string`): Path to the sprite image.
- `rotation` (`double`): Initial rotation in radians.
- `layer` (`StoryboardLayer`): The layer on which the receptor is rendered.
- `scale` (`CommandScale`), `position` (`Vector2`): Scale or position settings for the receptor.
- `starttime` (`double`): Start time for initial animations.
- `type` (`ColumnType`): Column type, affecting rotation and positioning.
- `delta` (`double`): Delta increment for animation calculations.

## Methods

### Render
Handles the rendering of the receptor on the storyboard, including color transitions based on beat timings.

```csharp
public void Render(double starttime, double endtime);
```

**Parameters:**
- `starttime` (`double`): Start time for rendering.
- `endtime` (`double`): End time for rendering.

### Movement Methods
Methods for moving the receptor both absolutely and relatively within the storyboard.

```csharp
public void MoveReceptorAbsolute(double starttime, Vector2 endPos);
public void MoveReceptorAbsolute(OsbEasing ease, double starttime, double endtime, Vector2 startPos, Vector2 endPos);
public void MoveReceptorRelative(OsbEasing ease, double starttime, double endtime, Vector2 offset);
public void MoveReceptorRelativeX(OsbEasing ease, double starttime, double endtime, float value);
public void MoveReceptorRelativeY(OsbEasing ease, double starttime, double endtime, float value);
```

**Parameters:**
- `starttime`, `endtime` (`double`): Start and end times for the movement.
- `ease` (`OsbEasing`): Easing function for the transition.
- `startPos`, `endPos`, `offset` (`Vector2`): Starting, ending, and offset positions for the movement.
- `value` (`float`): Value for relative movement in X or Y direction.

### Scale and Rotate
Adjusts the scale and rotation of the receptor to enhance visual effects, especially during gameplay interactions.

```csharp
public void ScaleReceptor(OsbEasing ease, double starttime, double endtime, Vector2 newScale);
public void RotateReceptorAbsolute(OsbEasing ease, double starttime, double endtime, double rotation);
public void RotateReceptor(OsbEasing ease, double starttime, double endtime, double rotation);
public void PivotReceptor(OsbEasing ease, double starttime, double endtime, double rotation, Vector2 center);
```

**Parameters:**
- `ease` (`OsbEasing`): Easing function for scaling or rotation transitions.
- `starttime`, `endtime` (`double

`): Start and end times for the scaling or rotation effect.
- `newScale` (`Vector2`): New scale vector.
- `rotation` (`double`): Rotation angle in radians.
- `center` (`Vector2`): Center point for rotation.

### Utility Methods
Provides real-time information about the position and scale of the receptor, useful for dynamic interactions and animations.

```csharp
public Vector2 PositionAt(double time);
public Vector2 ScaleAt(double time);
public float RotationAt(double time);
```

**Parameters:**
- `time` (`double`): The specific time to retrieve the property.

**Returns:**
- Position, scale, or rotation at the specified time.