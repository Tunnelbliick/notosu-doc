---
title: Note
description: Properties, Methods, and Functions for Note Objects in a Rhythm Game Playfield
---

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

## Constructor

### Note
Initializes a note with specific properties, setting up its sprite and animations.

```csharp
public Note(StoryboardLayer layer, OsuHitObject hitObject, Column column, double bpm, double offset, bool isColored = false, double msPerPart = 40);
```

**Parameters:**
- `layer` (`StoryboardLayer`): The layer on which the note is rendered.
- `hitObject` (`OsuHitObject`): The hit object data from the Osu! map.
- `column` (`Column`): The column object associated with the note.
- `bpm` (`double`): Beats per minute, for timing calculations.
- `offset` (`double`): Offset for timing adjustments.
- `isColored` (`bool`, optional): Flag to indicate if the note should be colored.
- `msPerPart` (`double`, optional): Milliseconds per part, used for sliders.

## Methods

### Render
Handles the rendering of the note sprite over a specified duration.

```csharp
public void Render(double starttime, double endtime, OsbEasing easing, double initialFade, double fadeInTime = 50, double fadeOutTime = 10);
```

**Parameters:**
- `starttime`, `endtime` (`double`): Start and end times for the rendering.
- `easing` (`OsbEasing`): The easing function for the transition.
- `initialFade` (`double`): Initial fade level.
- `fadeInTime`, `fadeOutTime` (`double`): Duration for fade in and fade out.

---

### ApplyHitLightingToNote
Applies lighting effects to the note when hit.

```csharp
public void ApplyHitLightingToNote(double starttime, double endtime, double fadeOutTime, Receptor currentReceptor, double iterationRate = 10);
```

**Parameters:**
- `starttime`, `endtime` (`double`): Start and end times for the hit lighting.
- `fadeOutTime` (`double`): Duration for fade out.
- `currentReceptor` (`Receptor`): The current receptor related to the note.
- `iterationRate` (`double`): Rate of iteration for the lighting effect.

---

### RenderTransformed
Renders the note with a transformed appearance.

```csharp
public void RenderTransformed(double starttime, double endTime, string reference, double fadeInTime = 50, double fadeOutTime = 0);
```

**Parameters:**
- `starttime`, `endTime` (`double`): Start and end times for the transformed rendering.
- `reference` (`string`): Reference identifier for the specific transformation.
- `fadeInTime`, `fadeOutTime` (`double`): Duration for fade in and fade out.

---

### Movement and Animation Methods
Includes methods for moving and animating the note within the playfield.

```csharp
public void Move(double starttime, double duration, OsbEasing easing, Vector2 startposition, Vector2 endposition);;
public void Rotate(double starttime, double duration, OsbEasing easing, double rotation)
```

**Parameters:**
- `starttime`, `duration` (`double`): Start time and duration of the movement or rotation.
- `easing` (`OsbEasing`): The easing function for the transition.
- `startposition`, `endposition` (`Vector2`): Starting and ending positions for movement.
- `rotation` (`double`): Angle of rotation in radians.

---

### Utility Methods
Include additional methods for handling specific properties like opacity and scale at different times, as well as for special effects like coloring and fading.

```csharp
public void Scale(double starttime, double endtime, OsbEasing easing, Vector2 before, Vector2 after);
public void Color(double starttime, Color4 color);
public float OpacityAt(double currentTime);
```

**Utility Method Descriptions:**
- `Scale`: Adjusts the scale of the note sprite between two vector sizes.
- `Color`: Changes the color of the note sprite.
- `OpacityAt`: Retrieves the opacity of the note at a specific time.

**Parameters:**
- `starttime`, `endtime` (`double`): Start and end times for scaling or coloring.
- `easing` (`OsbEasing`): The easing function for the scaling transition.
- `before`, `after` (`Vector2`): The scale vectors before and after the transition.
- `color` (`Color4`): The color to be applied to the note sprite.
- `currentTime` (`double`): The specific time to check for opacity.

---

### Special Effect Methods
These methods provide additional functionalities like making the note invisible or applying transformations.

```csharp
public void invisible(double time);
public void MoveAbsolute(double starttime, double endTime, OsbEasing easing, Vector2 startposition, Vector2 endposition);
```

**Parameters:**
- `time` (`double`): The time at which the note becomes invisible.
- `starttime`, `endTime` (`double`): Start and end times for absolute movement.
- `easing` (`OsbEasing`): The easing function for the movement.
- `startposition`, `endposition` (`Vector2`): Starting and ending positions for absolute movement.