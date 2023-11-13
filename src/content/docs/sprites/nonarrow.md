---
title: Changing to a non arrow skin
description: Steps required to modify notOsu! to a non arrow skin.
---

# Implementing Non-Arrow Skins in notOSU!

Custom skins like bars, diamonds, or any non-arrow shapes can add a unique flair to your osu!mania storyboard. When using these alternative skins, you won't need the rotation functionality designed for arrow skins. Here's how to adapt your storyboard for non-arrow skins.

## Preparing Your Skin

First, ensure your custom skin images are placed in the storyboard's `sprites` directory. Your skin should consist of the following sprite elements:

- **Notes**: The images used for each note in gameplay.
- **Receptors**: The images that represent where notes should be hit.
- **Hold Body**: The image used for the body of hold notes.

Refer to the sprite setup page for detailed instructions on organizing your sprite files.

## Adjusting the Script for Non-Arrow Skins

To accommodate non-arrow skins, you'll need to disable the rotation for both notes and receptors in the script. This is because non-arrow skins typically don't require orientation to match gameplay mechanics.

### Notes

Within your storyboard script, locate the `Note` class. In the `Render` method, you'll find lines of code that rotate the note sprites based on their column. Remove or comment out the entire `switch` statement that contains these `note.Rotate` methods.

### Receptors

Similarly, in the `Receptor` class constructors, you'll also find `receptorSprite.Rotate` methods within a `switch` statement. These lines are responsible for rotating the receptor sprites and should be removed or commented out for non-arrow skins.

## Example of Adjusted Note Render Method

Here's what your `Render` method in the `Note` class might look like after removing the rotation:

Remove this code from the functions, since it will not be needed for non arrow skins.
```csharp
switch (type)
    {
        case ColumnType.one:
        sprite.Rotate(starttime - 1, 1 * Math.PI / 2);
            break;
        case ColumnType.two:
        sprite.Rotate(starttime - 1, 0 * Math.PI / 2);
            break;
        case ColumnType.three:
        sprite.Rotate(starttime - 1, 2 * Math.PI / 2);
            break;
        case ColumnType.four:
        sprite.Rotate(starttime - 1, 3 * Math.PI / 2);
            break;
}
```

```csharp
public void Render(double starttime, double endtime, OsbEasing easing, double initialFade, double fadeInTime = 50, double fadeOutTime = 10)
{
    // ... other code ...

    // Rotation has been removed for non-arrow skins
    // No switch statement required

    // ... other code ...
}
```

## Example of Adjusted Receptor Constructor

And here's an example of a `Receptor` class constructor without the rotation:

```csharp
public Receptor(String receptorSpritePath, double rotation, StoryboardLayer layer, CommandScale scale, double starttime, ColumnType type, double delta)
{
    // ... other code ...

    // Rotation has been removed for non-arrow skins
    // No switch statement required

    // ... other code ...
}
```

After making these changes, your storyboard will use the new non-arrow skins without unnecessary rotations, ensuring that your custom skins display correctly during gameplay.

In the future this step will probably be replaced by a flag, but i suggest on sticking to Arrows for more complex modcharts.

## Final Steps

Once you have updated your storyboard script, remember to test the storyboard to ensure that the skins appear as intended and that gameplay is not adversely affected.

For further guidance on sprite setup and storyboard customization, please revisit the [Sprite Setup Guide](/sprites/sprites). If you encounter any issues or need additional help, the notOSU! community is a valuable resource for support and advice.