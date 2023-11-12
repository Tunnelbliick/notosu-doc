---
title: PathWay
description: Renders a pathway the notes follow
---

The `PathWay` static class designed for drawing paths for notes using storyboard sprites. It's important to note that this method is considered defunct and not recommended for use, as it will likely be replaced by a more efficient method in the context of the `ByEquation` renderer.

### Functionality of the `PathWay` Renderer:

- **Path Drawing**: It draws paths for notes between two points using storyboard sprites.
- **Support for Different Path Types**: The renderer can draw both linear and bezier paths.
- **Customization of Path Precision**: The precision of the path (i.e., how smooth or detailed it is) can be adjusted.

### Parameters Explained:

- `instance`: `DrawInstance` - An instance containing all necessary information for the drawing process, such as the playfield and animation parameters.
- `starttime`: `double` - The start time for the path drawing.
- `endtime`: `double` - The end time for the path drawing.
- `layer`: `StoryboardLayer` - The storyboard layer on which the paths will be drawn.
- `spritePath`: `string` - The path to the sprite used for drawing the path.
- `type`: `PathType` - The type of path to draw (line or bezier).
- `precision`: `int` - Determines the smoothness and detail of the path.
- `updatesPerSecond`: `int` (default: 3) - Determines how often the path is updated per second.

### Customizable Aspects:

- **Path Type**: You can choose between a linear path or a bezier path.
- **Path Precision**: The level of detail in the path can be adjusted by changing the precision parameter.
- **Sprite Customization**: The sprite used for the path can be changed, allowing for different visual styles.
- **Update Rate**: The frequency at which the path is updated can be adjusted to match the rhythm of the music or gameplay mechanics.
