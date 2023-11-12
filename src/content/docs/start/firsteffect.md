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
Identify the part of the song where you want to apply the effect. For this example, let's say the effect starts at `50000ms` and ends at `52000ms`.

### 2. Rotate the Playfield
We'll start by rotating the playfield slightly. This creates a sense of motion and prepares the player for the upcoming movement.

```csharp
double startTime = 50000;
double endTime = 52000;
double rotationAngle = Math.PI / 30; // Small rotation angle

playfield.Rotate(OsbEasing.OutQuad, startTime, startTime + 1000, rotationAngle);
```

### 3. Move the Playfield
Next, we'll make the playfield move up and down to the beat. This movement will be synchronized with the music to enhance the player's immersion.

```csharp
double beatDuration = 60000 / BPM; // Replace BPM with the song's BPM
Vector2 moveUp = new Vector2(0, -10); // Move up by 10 units
Vector2 moveDown = new Vector2(0, 10); // Move down by 10 units

// Move up on the first beat
playfield.moveField(OsbEasing.OutQuad, startTime + 1000, startTime + 1000 + beatDuration / 2, moveUp.X, moveUp.Y);

// Move down on the second beat
playfield.moveField(OsbEasing.OutQuad, startTime + 1000 + beatDuration / 2, startTime + 2000, moveDown.X, moveDown.Y);
```

### 4. Return to Original Position
After the effect, it's essential to bring the playfield back to its original position and rotation for a seamless experience.

```csharp
playfield.Rotate(OsbEasing.InQuad, endTime - 1000, endTime, -rotationAngle);
playfield.moveField(OsbEasing.InQuad, endTime - 1000, endTime, 0, 0);
```

### 5. Test Your Effect
Run your storyboard script and observe the effect in sync with the music. Adjust timings and values as needed to fine-tune the experience.

## Tips for Enhancement
- **Sync with Music**: Adjust the timings and duration to match the beat and rhythm of the song.
- **Subtlety is Key**: Keep movements and rotations subtle to avoid overwhelming the player.
- **Experiment**: Try different easing functions and movement vectors for variety.

## Conclusion
You've successfully created your first dynamic effect in notOSU!. This foundational knowledge opens up a world of possibilities for more complex and creative storyboard effects. Keep experimenting and refining your skills to create unforgettable storyboard experiences in osu!mania.