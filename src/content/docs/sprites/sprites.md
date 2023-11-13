---
title: Folder Structure and Sprites
description: The required folders and Sprites for notOSU!
---

# Setting Up the Storyboard Folder for notOSU!

When creating storyboards for osu!mania using notOSU!, organizing your storyboard folder correctly is crucial. Here's a step-by-step guide on setting up your storyboard folder for a notOSU! project.

## Initial Folder Structure

Your storyboard folder should be organized into subfolders for different asset types. Based on the images you've provided, the structure should look like this:

```
sb/
├── sprites/
│   ├── 1.png
│   ├── 2.png
│   ├── ...
│   ├── ...
│   ├── 12.png
│   ├── arrow.png
│   ├── decent.png
│   ├── excellent.png
│   ├── fantastic.png
│   ├── great.png
│   ├── hold.png
│   ├── hold_body.png
│   ├── receiver.png
│   └── wayof.png
└── white.png
```

You can download the default sprites based on Peteres Cel [here](https://github.com/Tunnelbliick/notosu/raw/main/sb.rar)

You can find Peteres ITG skins [here](https://github.com/Pete-Lawrence/Peters-Noteskins)

### Snaps

notOSU! currently support following beatsnaps `1` `2` `3` `4` `12` `16` and any multiples which will reuse the same sprite like `6` `9` or `24` `36` as example.

Here's what each folder is for:

- `sb/`: This is your main storyboard directory. All storyboard-related assets go here.
- `sprites/`: This subfolder contains all the visual elements you'll use in your storyboard, like hit objects and receptors.
- `white.png`: This is just a 1x1 white pixel thaat is used for visualisations etc.

## Setting Up Your Storyboard Folder

1. **Create the `sb/` Folder**: This should be within your osu! beatmap directory. It's where all storyboard-related files will reside.
2. **Add Subfolders**: Inside `sb/`, create a subfolder named `sprites/`.
3. **Populate with Assets**: Place your image assets into the appropriate subfolders. For instance, receptor images go into `sprites/`.
4. **Naming Convention**: Make sure your files are named logically, as shown in the structure above. This will help you reference them correctly in your storyboard scripts.

## Using Assets in Your Storyboard

When referencing these assets in your storyboard script, you'll use paths relative to the `sb/` folder. For example, if you're accessing `receiver.png`, the path would be `sb/sprites/receiver.png`.

## Tips for Managing Your Storyboard Folder

- **Keep It Clean**: Only include assets that you will use in your storyboard to avoid clutter.
- **Use Version Control**: If you're working with a team or want to keep track of changes, consider using a version control system like Git.
- **Backup Regularly**: Storyboards can be complex and time-consuming, so make regular backups to avoid losing your work.

By following this guide, you'll have a well-organized storyboard folder that will make your notOSU! project management smoother and more efficient. Happy storyboarding!

--- 

This guide assumes a basic understanding of file management and how to work with directories. Make sure to tailor the guide to the specific needs of your project and the preferences of your storyboard team.
