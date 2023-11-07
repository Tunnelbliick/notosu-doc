---
title: Storybrew Setup
description: A guide on how to setup Storybrew
---

A short guide on how to setup Storybrew
If you encounter any issues refer to the [Storybrew Wiki](https://github.com/Damnae/storybrew/wiki) or the Storyboarder Banquet [Discord](https://github.com/Tunnelbliick/notosu)

## Setting Storybrew up

1. Download the latest [version](https://github.com/Damnae/storybrew/releases/latest).

2. Install [Visual Studio Code](https://code.visualstudio.com/). 

    Make sure to either check the "Add to PATH" option, or to install it in its default location so storybrew can find it. 
    
    You can use other versions of Visual Studio, but they are much heavier to install. Any text editor can be used to edit scripts, but you'd be missing IntelliSense (word completion, parameter hints, etc.). Visual Studio Code is also better integrated for script creation/editing.

3. Install the [.NET Framework 4.5.2 Developer Pack](https://www.microsoft.com/en-us/download/details.aspx?id=42637).

4. Launch `Storybrew Editor.exe` and click on `New project`.

5. Choose a name for the project and select the mapset by picking any .osu file inside it.

6. Storyboards are made of multiple effects; to create a new effect, click on the Effects tab on the bottom right, then New script.

7. Pick a name for the script, then click Ok. The script will open in Visual Studio Code where you can edit it.

8. The first time you open a script in Visual Studio Code, it will ask you to install the C# extension (If it doesn't, press Ctrl-P and type `ext install csharp`). After restarting, your code should be syntax colored (= not completely white).

9. Here's a sample script, copy it inside the `Generate` method (make sure the path to the background image is correct).

```csharp
var layer = GetLayer("Main");
var bg = layer.CreateSprite("bg.jpg", OsbOrigin.Centre);
bg.Scale(0, 480.0 / 768);
bg.Fade(0, 2000, 0, 1);
bg.Fade(8000, 10000, 1, 0);
```

10. The result will be visible in the editor as soon as you save the script. You can use the mouse wheel or arrow keys to move in time and see the background fading in and out. You can also press space to play the song.

11. Click the puzzle piece in the bottom right to write the .osb file.

12. Your storyboard is now working in osu!
