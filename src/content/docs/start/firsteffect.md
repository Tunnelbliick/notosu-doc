---
title: My First Effect
description: Creating Your First Dynamic Storyboard Effect in notOSU!
---

Welcome to your first step in crafting dynamic effects for osu!mania storyboards using notOSU!. In this guide, we'll create a simple yet impactful effect by utilizing rotation and movement functions provided by the `Playfield` class. This will give you a foundational understanding of how to animate the playfield and its elements.

## Objective
Our goal is to create an effect where the playfield rotates slightly and then moves up and down to the beat of the music, creating a dynamic and engaging visual experience.

## Prerequisites
- Basic knowledge of C# and osu! storyboard scripting.
- notOSU! setup completed with a functioning playfield.

## Step-by-Step Guide

### 1. Define the Timing
Identify the part of the song where you want to apply the effect. For this example, let's say the effect starts at `70010ms` and ends at `71510ms`.

### 2. Rotate the Playfield
We'll start by rotating the playfield slightly. This creates a sense of motion and prepares the player for the upcoming movement.

```csharp
field.Rotate(OsbEasing.None, 70010, 70010 + 1500, Math.PI * 2, CenterType.middle);
```

### 3. Resize the Playfield
Next, we'll resize the playfield to add a little more spice to the rotation of the playfield.

Example Rotation First:
```csharp
field.Rotate(OsbEasing.None, 70010, 70010 + 1500, Math.PI * 2, CenterType.middle);
field.Resize(OsbEasing.InSine, 70010, 70010 + 1500 / 2, 750, height);
field.Resize(OsbEasing.OutSine, 70010 + 1500 / 2, 70010 + 1500, 250, height);
```
![StorybrewEditor_EVVgW47pTB](https://github.com/Tunnelbliick/notosu/assets/38663241/398e0152-1f19-4e5a-99c3-0807d98b2293)


Example Resize First:
```csharp
field.Resize(OsbEasing.InSine, 70010, 70010 + 1500 / 2, 750, height);
field.Resize(OsbEasing.OutSine, 70010 + 1500 / 2, 70010 + 1500, 250, height);
field.Rotate(OsbEasing.None, 70010, 70010 + 1500, Math.PI * 2, CenterType.middle);
```
![StorybrewEditor_cDfVcHT4Dt](https://github.com/Tunnelbliick/notosu/assets/38663241/7bc07da4-411e-4ae5-9d9a-883069aff140)

### 5. Test Your Effect
Run your storyboard script and observe the effect in sync with the music. Adjust timings and values as needed to fine-tune the experience.

## Tips for Enhancement
- **Sync with Music**: Adjust the timings and duration to match the beat and rhythm of the song.
- **Subtlety is Key**: Keep movements and rotations subtle to avoid overwhelming the player.
- **Experiment**: Try different easing functions and movement vectors for variety.

## Conclusion
You've successfully created your first dynamic effect in notOSU!. This foundational knowledge opens up a world of possibilities for more complex and creative storyboard effects. Keep experimenting and refining your skills to create unforgettable storyboard experiences in osu!mania.