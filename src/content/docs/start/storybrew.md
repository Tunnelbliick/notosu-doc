---
title: Storybrew Setup
description: Step-by-Step Guide on Setting Up Storybrew
---

This guide provides a straightforward process for setting up Storybrew, a powerful tool for osu! storyboarding. If you face any difficulties, consult the [Storybrew Wiki](https://github.com/Damnae/storybrew/wiki) or join the Storyboarder Banquet [Discord](https://discord.gg/storyboarders) for assistance.

## Installing Storybrew

1. **Download Storybrew**: Obtain the latest version of Storybrew from the [official releases page](https://github.com/Damnae/storybrew/releases/latest).

2. **Install Visual Studio Code**: Download and install [Visual Studio Code](https://code.visualstudio.com/). Ensure the "Add to PATH" option is selected during installation for seamless integration with Storybrew. While other versions of Visual Studio or text editors can be used, Visual Studio Code offers optimal features like IntelliSense and better script editing support.

3. **.NET Framework 4.5.2 Developer Pack**: Install the [.NET Framework 4.5.2 Developer Pack](https://www.microsoft.com/en-us/download/details.aspx?id=42637) to ensure compatibility with Storybrew.

4. **Create a New Project**: Launch `Storybrew Editor.exe`, click on `New project`, and set up your project by naming it and selecting a mapset from any .osu file within it.

5. **Effect Creation**: In Storybrew, storyboards are built from multiple effects. To create an effect, navigate to the Effects tab, click on New script, name your script, and click Ok. The script will open in Visual Studio Code for editing.

6. **Visual Studio Code Setup**: Upon opening a script for the first time in Visual Studio Code, you'll be prompted to install the C# extension (use `ext install csharp` in the command palette if it doesn't prompt). Restart Visual Studio Code after installation to enable syntax coloring.

7. **Writing Your First Script**: Here's a basic script to start with. Copy it into the `Generate` method of your script. Make sure the image path is correctly referenced.
   ```csharp
   var layer = GetLayer("Main");
   var bg = layer.CreateSprite("bg.jpg", OsbOrigin.Centre);
   bg.Scale(0, 480.0 / 768);
   bg.Fade(0, 2000, 0, 1);
   bg.Fade(8000, 10000, 1, 0);
   ```

8. **Previewing Your Work**: Save the script to see the effects in the editor. Use the mouse wheel or arrow keys to navigate through time and observe the background image fading in and out. Press space to play the song.

9. **Exporting to osu!**: Once you're satisfied with your storyboard, click the puzzle piece icon in the bottom right of the editor to generate the .osb file.

10. **Storyboard in osu!**: Place the .osb file in your osu! mapset folder. Your storyboard is now ready to be viewed within the game.

By following these steps, you can successfully set up and begin creating storyboards with Storybrew. For more advanced techniques and troubleshooting, refer to the resources provided.