---
title: notOSU! Configuration Guide
description: Step-by-step instructions for configuring a notOSU! storyboard environment.
---

## Getting Started with notOSU!

Welcome to the setup guide for notOSU!, a tool designed for creating dynamic storyboards in osu!mania. This guide will walk you through the process of downloading and configuring notOSU! for your storyboard projects.

### Step 1: Download the Files
Start by downloading the latest release of notOSU! from the [official repository](https://github.com/Tunnelbliick/notosu/releases/latest). Make sure to select the most recent version for the latest features and improvements.

### Step 2: Installation
Once you have downloaded the files, you need to integrate them into your storyboard environment:

- Locate the `/scriptLibrary` directory in your storyboard project.
- Extract and move the downloaded folders from notOSU! into the `/scriptLibrary` directory.

With these steps, the initial setup for notOSU! is complete.

## Configuring a Playfield for Storyboarding

Setting up a playfield and notes in notOSU! involves three key components: layers, a playfield instance, and a DrawInstance. Here's how to do it:

### Required Components:

1. **Layers**: Create separate layers for receptors and notes within your storyboard.
2. **Playfield Instance**: Establish a playfield instance to manage the gameplay area and note mechanics.
3. **DrawInstance**: Utilize a DrawInstance to control how notes are drawn and animated on the playfield.

### Example Setup:

Below is an example script to guide you through configuring a playfield in notOSU!:

```csharp
var receptors = GetLayer("r");
var notes = GetLayer("n");

// Define general values
var starttime = 0;
var endtime = 24000;
var duration = endtime - starttime;

// Playfield dimensions
var width = 200f;
var height = 500;

// Note initialization parameters
var bpm = 190f;
var offset = 0f;

// DrawInstance configuration
var updatesPerSecond = 50;
var scrollSpeed = 800f;
var rotateNotesToFaceReceptor = false;
var fadeTime = 60;

var receptorBitmap = GetMapsetBitmap("sb/sprites/receiver.png"); // Receptor sprite
var receptorWidth = receptorBitmap.Width;

Playfield field = new Playfield();
field.InitializePlayField(receptors, notes, starttime, endtime, width, height, 50);
field.InitializeNotes(Beatmap.HitObjects.ToList(), bpm, offset, false, sliderAccuracy);

DrawInstance draw = new DrawInstance(field, starttime, scrollSpeed, updatesPerSecond, OsbEasing.None, rotateNotesToFaceReceptor, fadeTime, fadeTime);

// Apply effects before calling draw function
// Note: Any changes after draw function call will not be rendered
draw.DrawNotesByOriginToReceptor(duration);
```

By following these steps, you can effectively set up your notOSU! Playfield and Notes, ready for creating engaging storyboards for osu!mania.